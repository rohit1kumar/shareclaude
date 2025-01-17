const PAGE_URL = 'https://shareclaude.pages.dev'
const CLAUDE_API_URL = 'https://claude.ai/api/organizations'
let organizationId = ''

const shareIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`

const loaderSVG = `<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" class="animate-spin text-white"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/><path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/></g></svg>`

async function getOrganizationId() {
	// If organizationId is already set, return it
	if (organizationId) return organizationId
	try {
		const response = await fetch(CLAUDE_API_URL, {
			credentials: 'include',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json'
			}
		})

		if (!response.ok) {
			throw new Error('Failed to fetch organizations')
		}

		const data = await response.json()
		if (data?.length > 0) {
			const chatOrg = data.find((org) => org.capabilities?.includes('chat'))
			if (chatOrg) {
				return chatOrg.uuid
			}
		}

		throw new Error('No organization found')
	} catch (error) {
		console.error('Failed to get organization:', error)
		return null
	}
}

function getConversationId() {
	const match = window.location.href.match(/\/chat\/([^\/]+)/)
	return match?.[1] || null
}

async function getConversationMessages({ organizationId, conversationId }) {
	if (!organizationId || !conversationId) return null

	try {
		const response = await fetch(
			`${CLAUDE_API_URL}/${organizationId}/chat_conversations/${conversationId}?tree=True&rendering_mode=messages&render_all_tools=true`,
			{
				headers: {
					accept: '*/*',
					'content-type': 'application/json'
				},
				credentials: 'include'
			}
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = await response.json()
		const messages = data.chat_messages.map((msg) => {
			const { sender, content, attachments } = msg
			let message = content[0].text

			if (sender === 'human' && attachments.length > 0) {
				for (const attachment of attachments) {
					const { file_type, file_name, extracted_content } = attachment
					const fileType = file_type?.split('/')[1] || file_type
					if (fileType) {
						message += `\n\n${file_name}:\n\n\`\`\`${fileType}\n${extracted_content}\n\`\`\``
					} else {
						message += `\n\n${file_name}:\n\n${extracted_content}`
					}
				}
			}

			return {
				source: sender === 'human' ? 'user' : 'claude',
				message
			}
		})

		return {
			title: data.name,
			content: messages
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
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(messages)
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
	button.innerHTML = shareIconSVG

	button.className =
		'inline-flex items-center justify-center relative shrink-0 ring-offset-2 ring-offset-bg-300 ring-accent-main-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-200 border-transparent transition-colors font-styrene active:bg-bg-400 hover:bg-bg-500/40 hover:text-text-100 h-8 w-8 rounded-md active:scale-95 !rounded-lg'
	button.type = 'button'
	button.title = 'Share conversation'
	button.ariaLabel = 'Share conversation'

	button.addEventListener('click', async () => {
		const conversationId = getConversationId()
		if (!conversationId) {
			alert('You need to go to a conversation to share it')
			return
		}

		button.innerHTML = loaderSVG
		button.disabled = true

		const messages = await getConversationMessages({
			organizationId,
			conversationId
		})
		if (!messages) {
			alert('Failed to get conversation messages')
			button.innerHTML = shareIconSVG
			button.disabled = false
			return
		}

		const shareURL = await getShareURL(messages)
		if (!shareURL) {
			alert('Failed to generate share URL')
			button.innerHTML = shareIconSVG
			button.disabled = false
			return
		}

		navigator.clipboard.writeText(shareURL)
		window.open(shareURL, '_blank')

		// Reset button after the action
		button.innerHTML = shareIconSVG
		button.disabled = false
	})

	const uploadButton = document.querySelector(
		'button[aria-label="Upload content"]'
	)
	if (uploadButton && !document.querySelector('.share-button')) {
		button.classList.add('share-button')
		uploadButton.parentElement.appendChild(button)
	}
}

function monitorPageChanges() {
	const observer = new MutationObserver(() => {
		if (!document.querySelector('.share-button')) {
			addShareButton()
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
	monitorPageChanges()
})
