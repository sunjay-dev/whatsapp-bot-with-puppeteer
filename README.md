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

1. Clone the repository and Install dependencies:
   ```bash
   git clone https://github.com/sunjay-dev/whatsapp-bot-with-puppeteer.git
   cd whatsapp-bot-with-puppeteer
   npm install
   ```
2. Run the script:
   ```bash
   node index.js
   ```

### Note on Node Modules

This project includes `package.json`, `package-lock.json`, and `node_modules` in version control. While this practice is not typical due to the potential size of the `node_modules` directory, it has been included to simplify setup for users.

It's recommended to use `npm install` to fetch the dependencies locally and ensure compatibility. If needed, you can choose to exclude `node_modules` from version control by modifying the `.gitignore` file.

### How to find the `executablePath` for Google Chrome, you can follow these steps:

1. **Windows:**
   - Right-click on the Google Chrome shortcut on your desktop or in the Start menu.
   - Select "Properties" from the context menu.
   - In the "Shortcut" tab, you will see a field labeled "Target."
   - Copy the text in the "Target" field. It should look something like this:

     ```
     "C:\Program Files\Google\Chrome\Application\chrome.exe"
     ```

   - Use this path as the `executablePath` in your Puppeteer configuration.

2. **macOS:**
   - Open a terminal.
   - Run the following command:

     ```bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
     ```

   - Copy the path returned by this command and use it as the `executablePath` in your Puppeteer configuration.

3. **Linux:**
   - Open a terminal.
   - Run the following command:

     ```bash
     which google-chrome
     ```

   - Copy the path returned by this command and use it as the `executablePath` in your Puppeteer configuration.


## Important Note

This script is for educational and demonstrative purposes only. It's crucial to use automation scripts responsibly and within the terms of service of the platforms you interact with.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
