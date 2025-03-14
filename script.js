const puppeteer = require('puppeteer');
const readline = require('readline');
const inputFieldPath = "[aria-label='Type a message']"; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function start() {
    let message = await askQuestion('What message do you want to send on WhatsApp? ');
    let times = await askQuestion('How many times do you want to send the message? ');
    let gap = await askQuestion('What should be the gap between messages (in seconds)? ');
    let notify = await askQuestion('Notfiy the user After sending the messages? [Y/N] ');

    main(message, times, gap, notify);
}

async function main(message, times, gap, notify) {

    const options = {
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    };

    try {
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();

        console.log("Browser launched & created a new page. \nGoing to [whats app]]!");
        await page.goto('http://web.whatsapp.com');

        // Wait for the user to press Enter
        const ans=  await askQuestion("Select the User then Press Enter to continue...");

        if(ans !== ''){
            console.log(`Key Pressed : ${ans} \nBrowser is going to close!`);
            await browser.close();
            return;
        }
        console.log("Message is going to start in ")
        for (let i = 5; i >= 0; i--) {
            console.log(`${i} seconds`)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log(`Run a loop to send message ${times} times: ${message}`);
        for (let i = 1; i <= times; i++) {
            console.log("Typing our text in the input field");
            await page.type(inputFieldPath, message);
            await page.keyboard.press('Enter');

            console.log(`Message sent: ${i} times.`);
            await new Promise(resolve => setTimeout(resolve, gap * 1000));
        }

        if (notify.toLowerCase() === 'y') {
        console.log("Send one last message to notify it's just a funny project!");
        await page.type(inputFieldPath, `Dear, Don't be angry please. It's a funny project & I chose you as one of my experimental.`, { delay: 100 });
        await page.keyboard.press('Enter');

        await new Promise(resolve => setTimeout(resolve, 2000)); 
        }
        console.log("Message Send Completed Successfully! Closing browser");
        await browser.close();
    } catch (error) {
        console.error("Oops! Something is going wrong [Error Occurred]");
        console.error(error);
    } finally {
        rl.close();
    }
}


start();