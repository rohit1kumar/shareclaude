# [ShareClaude](https://shareclaude.pages.dev)

<div align="center">

Chrome Extension to share your [Claude](https://claude.ai) conversations with one click.


[![Visit ShareClaude](https://img.shields.io/badge/Visit-ShareClaude-blue.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEOTc3NTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGFyZS0yIj48Y2lyY2xlIGN4PSIxOCIgY3k9IjUiIHI9IjMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE5IiByPSIzIi8+PGxpbmUgeDE9IjguNTkiIHgyPSIxNS40MiIgeTE9IjEzLjUxIiB5Mj0iMTcuNDkiLz48bGluZSB4MT0iMTUuNDEiIHgyPSI4LjU5IiB5MT0iNi41MSIgeTI9IjEwLjQ5Ii8+PC9zdmc+)](https://shareclaude.pages.dev)
[![Platform Chrome](https://img.shields.io/badge/Platform-Chrome-yellow?logo=google-chrome&logoColor=yellow)](https://chrome.google.com/webstore/detail/shareclaude/hngfnlgdbhjmejfndkhnnkjbblfhoija)



</div>

## Features

- One-click sharing of Claude AI conversations
- Instant URL generation
- Support syntax highlighting for code
- Works directly with Claude's web interface

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/rohit1kumar/shareclaude.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `extension` folder from the cloned repository

## How to Use

1. Open [Claude](https://claude.ai) in your browser
2. Start or continue a conversation with Claude
3. Click the <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoYXJlLTIiPjxjaXJjbGUgY3g9IjE4IiBjeT0iNSIgcj0iMyIvPjxjaXJjbGUgY3g9IjYiIGN5PSIxMiIgcj0iMyIvPjxjaXJjbGUgY3g9IjE4IiBjeT0iMTkiIHI9IjMiLz48bGluZSB4MT0iOC41OSIgeDI9IjE1LjQyIiB5MT0iMTMuNTEiIHkyPSIxNy40OSIvPjxsaW5lIHgxPSIxNS40MSIgeDI9IjguNTkiIHkxPSI2LjUxIiB5Mj0iMTAuNDkiLz48L3N2Zz4=" alt="Share icon" width="15" height="15" style="background-color:white"> share icon in the input box adjacent to the attachments button.
4. The sharing URL will be automatically copied to your clipboard
5. Share the URL with anyone you want!

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Cloudflare Workers
- **Database**: Cloudflare D1

## Known Issues

- Extension icon may not appear on the first load. Refreshing the page resolves this issue.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## Links

- [Website](https://shareclaude.pages.dev)

---
Made with ☕ for the Claude community
