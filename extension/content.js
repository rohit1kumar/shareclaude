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
    button.textContent = '🔗'
    button.style.position = 'fixed'
    button.style.bottom = '20px'
    button.style.right = '20px'
    button.style.padding = '10px 20px'
    button.style.backgroundColor = '#d97757'
    button.style.color = '#fff'
    button.style.border = 'none'
    button.style.borderRadius = '5px'
    button.style.cursor = 'pointer'
    button.style.zIndex = '1000'

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
        const originalText = button.textContent
        button.textContent = '📋'
        setTimeout(() => {
            button.textContent = originalText
            window.open(shareURL, '_blank')
        }, 1000)
    })

    document.body.appendChild(button)
}

window.addEventListener('load', async () => {
    organizationId = await getOrganizationId()
    addShareButton()
})
