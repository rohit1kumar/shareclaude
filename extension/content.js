const PAGE_URL = 'https://shareclaude.pages.dev'
const CLAUDE_API_URL = 'https://claude.ai/api/organizations'
let organizationId = ''

async function getOrganizationId() {
    try {
        const response = await fetch(CLAUDE_API_URL, {
            credentials: 'include',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch organizations')
        }

        const data = await response.json()
        if (data?.length > 0) {
            return data[0].uuid
        }

        throw new Error('No organization found')
    } catch (error) {
        console.error('Failed to get organization:', error)
        return null
    }
}

function getClaudechatId() {
    const match = window.location.href.match(/\/chat\/([^\/]+)/)
    return match?.[1] || null
}

async function getClaudeConversationData() {
    if (!organizationId) {
        organizationId = await getOrganizationId()
        if (!organizationId) {
            return null
        }
    }

    const claudeConversationId = getClaudechatId()
    if (!claudeConversationId) {
        return null
    }

    try {
        const response = await fetch(
            `${CLAUDE_API_URL}/${organizationId}/chat_conversations/${claudeConversationId}?tree=True&rendering_mode=messages&render_all_tools=true`,
            {
                headers: {
                    'accept': '*/*',
                    'content-type': 'application/json',
                },
                credentials: 'include'
            }
        )

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        const messages = data.chat_messages.map(msg => ({
            source: msg.sender === 'human' ? 'user' : 'claude',
            message: msg.content[0].text
        }))

        return {
            title: data.name,
            content: messages,
        }
    } catch (error) {
        console.error('Error fetching conversation:', error)
        return null
    }
}

async function getShareURL(messages) {
    try {
        const response = await fetch(`${PAGE_URL}/api/chats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messages),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const { id } = await response.json()
        return `${PAGE_URL}/c/${id}`
    } catch (error) {
        console.error('Error getting share URL:', error)
        return null
    }
}

function addShareButton() {
    const button = document.createElement('button')
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
        <path d="M176 160a39.7 39.7 0 0 0-28.6 12.1l-46.1-29.6a40.3 40.3 0 0 0 0-29l46.1-29.6A40 40 0 1 0 136 56a41 41 0 0 0 .3 4.8l-46.1 29.6a40 40 0 1 0 0 75.2l46.1 29.6a41 41 0 0 0-.3 4.8 40 40 0 1 0 40-40Zm0-112a24 24 0 1 1-24 24 24 24 0 0 1 24-24ZM64 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm112 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"/>
    </svg>`

    button.className = 'inline-flex items-center justify-center relative shrink-0 ring-offset-2 ring-offset-bg-300 ring-accent-main-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-200 border-transparent transition-colors font-styrene active:bg-bg-400 hover:bg-bg-500/40 hover:text-text-100 h-8 w-8 rounded-md active:scale-95 !rounded-lg'
    button.type = 'button'
    button.ariaLabel = 'Share conversation'
    button.style.cssText = `
        margin-left: 8px;
        color: white;
        background: transparent;
        border: none;
    `

    button.addEventListener('click', async () => {
        const conversationData = await getClaudeConversationData()
        if (!conversationData) {
            alert('Failed to get conversation data')
            return
        }

        const shareURL = await getShareURL(conversationData)
        if (!shareURL) {
            alert('Failed to generate share URL')
            return
        }

        navigator.clipboard.writeText(shareURL)
        window.open(shareURL, '_blank')
    })

    // Find the upload button container and insert our share button after it
    const observer = new MutationObserver((mutations, obs) => {
        const uploadButton = document.querySelector('button[aria-label="Upload content"]')
        if (uploadButton) {
            uploadButton.parentElement.appendChild(button)
            obs.disconnect()
        }
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
}

window.addEventListener('load', async () => {
    organizationId = await getOrganizationId()
    addShareButton()
})
