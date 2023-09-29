# WhatsApp Puppeteer Bot

## Overview

This project is a simple WhatsApp automation script using Puppeteer. It leverages Puppeteer's capabilities to send messages on WhatsApp programmatically.

## Features

- Launches a headless browser with Puppeteer.
- Navigates to WhatsApp Web (http://web.whatsapp.com).
- Waits for the user to log in by adding a delay.
- Sends a series of messages to a specified chat, demonstrating message automation.
- Includes a final message to let the recipient know it's a fun project.

## How to Use

1. Clone the repository: `git clone https://github.com/yourusername/whatsapp-puppeteer-bot.git`
2. Install dependencies: `npm install`
3. Run the script: `node index.js`

### Note on Node Modules

This project includes `package.json`, `package-lock.json`, and `node_modules` in version control. While this practice is not typical due to the potential size of the `node_modules` directory, it has been included to simplify setup for users.

It's recommended to use `npm install` to fetch the dependencies locally and ensure compatibility. If needed, you can choose to exclude `node_modules` from version control by modifying the `.gitignore` file.

## Important Note

This script is for educational and demonstrative purposes only. It's crucial to use automation scripts responsibly and within the terms of service of the platforms you interact with.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
