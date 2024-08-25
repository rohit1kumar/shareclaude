const API_URL = 'https://claudeshare.pages.dev/api/chats';
const PAGE_URL = 'https://claudeshare.pages.dev/c'

function getUUID() {
    const match = window.location.href.match(/\/chat\/([^\/]+)/);
    return match ? match[1] : null;
}

function extractMessageContent(element) {
    let content = '';
    element.querySelectorAll('p, pre').forEach((el) => {
        if (el.tagName === 'PRE') {
            const codeBlock = el.querySelector('code');
            if (codeBlock) {
                const language = codeBlock.className.replace('language-', '');
                content += `\`\`\`${language}\n${codeBlock.textContent}\n\`\`\`\n\n`;
            } else {
                content += `\`\`\`\n${el.textContent}\n\`\`\`\n\n`;
            }
        } else {
            content += `${el.textContent.trim()}\n\n`;
        }
    });
    return content.trim();
}

function getUserAndClaudeMessages() {
    const messages = [];
    const chatTitle = document.querySelector('.font-tiempos.truncate.font-normal.tracking-tight')?.textContent.trim();

    const userMessages = Array.from(document.getElementsByClassName('font-user-message'));
    const claudeMessages = Array.from(document.getElementsByClassName('font-claude-message'));

    let i = 0;
    while (i < userMessages.length || i < claudeMessages.length) {
        if (i < userMessages.length) {
            const userMsg = extractMessageContent(userMessages[i]);
            if (userMsg) {
                messages.push({ source: 'user', message: userMsg });
            }
        }
        if (i < claudeMessages.length) {
            const claudeMsg = extractMessageContent(claudeMessages[i]);
            if (claudeMsg) {
                messages.push({ source: 'claude', message: claudeMsg });
            }
        }
        i++;
    }

    const chatUUID = getUUID();
    return {
        title: chatTitle,
        content: messages,
        uuid: chatUUID,
    };
}

async function getShareURL(messages) {

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messages),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { id } = await response.json();
        return `${PAGE_URL}/${id}`;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function addShareButton() {
    const button = document.createElement('button');
    button.textContent = '🔗';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#d97757';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';

    button.addEventListener('click', async () => {
        const msgs = getUserAndClaudeMessages();
        const shareURL = await getShareURL(msgs);
        if (shareURL) {
            navigator.clipboard.writeText(shareURL);
            button.textContent = '📋';
            button.style.backgroundColor = '#4CAF50';
        } else {
            button.textContent = '❌';
            button.style.backgroundColor = '#f44336';
            setTimeout(() => {
                button.textContent = 'Share';
                button.style.backgroundColor = '#d97757';
            }, 2000);
        }
    });

    document.body.appendChild(button);
}

window.addEventListener('load', () => addShareButton());
