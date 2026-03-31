# 🤖 MDH-MD WhatsApp Bot V3.0.6
> A powerful, multi-purpose WhatsApp user bot built with Node.js and `whatsapp-web.js`.

[![Version](https://img.shields.io/badge/Version-3.0.6-blue.svg)](https://github.com/YOUR_USERNAME/MDH-MD-V3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Key Features
- **Pairing Code System:** No QR scan needed! Link via phone number.
- **Admin Tools:** Full group management (Kick, Ban, Mute, Promote).
- **AI Integration:** Powered by GPT & Gemini for smart responses.
- **Media Tools:** Sticker maker, Image-to-Video, Background Remover.
- **Entertainment:** Anime commands, Games (TicTacToe, Hangman), and Fun filters.

---

## 🛠️ Setup & Installation

### 1. Get a Session ID
Visit the [Pairing Site](YOUR_PAIRING_SITE_LINK_HERE) to link your WhatsApp account and receive your unique `SESSION_ID`.

### 2. Deploy to Server
Click the button below to deploy directly to your favorite platform:

| Platform | Link |
| :--- | :--- |
| **Koyeb** | [Deploy on Koyeb](https://app.koyeb.com/deploy?type=git&repository=YOUR_GITHUB_REPO_URL) |
| **Render** | [Deploy on Render](https://render.com/deploy?repo=YOUR_GITHUB_REPO_URL) |

### 3. Environment Variables
Make sure to set these variables in your hosting dashboard:
- `SESSION_ID`: Your pairing session code.
- `OWNER_NUMBER`: Your phone number (e.g., 2348012345678).
- `PREFIX`: `.`

---

## 📜 Command Menu
The bot uses the `.` prefix by default. Here are a few popular commands:

| Command | Description |
| :--- | :--- |
| `.menu` | View the full interactive menu |
| `.gpt` | Chat with AI |
| `.sticker` | Convert image to sticker (reply to image) |
| `.play` | Download and play music |
| `.ping` | Check bot latency |

---

## 🤝 Credits
- **Developer:** [MRDIEHARD LOF](https://youtube.com/@MDH-MD)
- **Library:** [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)

---

## ⚠️ Disclaimer
This bot is not affiliated with WhatsApp Inc. Use it responsibly to avoid being banned by WhatsApp for spamming.
