const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to wait for user to press Enter
const waitForEnter = () => new Promise(resolve => {
  rl.question('Select the Prey then Press Enter to continue...', () => {
    resolve();
  });
});

(async () => {
  // Get user input for the message, number of times, and gap between messages
  const getUserInput = () => new Promise((resolve) => {
    rl.question('What message do you want to send on WhatsApp? ', (message) => {
      rl.question('How many times do you want to send the message? ', (times) => {
        rl.question('What should be the gap between messages (in seconds)? ', (gap) => {
          resolve({ message, times, gap });
        });
      });
    });
  });

  const { message, times, gap } = await getUserInput();

  const options = {
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', //read how to get your executable in Readme
  };

  try {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    console.log("Browser launched & created a new page. \nGoing to [whats app]]!");
    await page.goto('http://web.whatsapp.com'); //opens WhatsApp web

    // Wait for the user to press Enter
    await waitForEnter();

    console.log("Message is going to start in ")
    for(let i=5;i>=0;i--){
      console.log(`${i} seconds`)
    await new Promise(resolve => setTimeout(resolve, 1000)); //wait for 60 seconds to properly load whatsapp
    }

    console.log(`Run a loop to send message ${times} times: ${message}`);
    for (let i = 1; i <= times; i++) {
      console.log("Typing our text in the input field");
      await page.type("div.lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8.b9fczbqn.t35qvd06.m62443ks.rkxvyd19.c5h0bzs2.bze30y65.kao4egtt", message);
      await page.keyboard.press('Enter');

      console.log(`Message sent: ${i} times.`);
      await new Promise(resolve => setTimeout(resolve, gap * 1000)); // Gap between every 2 messages
    }

    console.log("Send one last message to notify it's just a funny project!");
    await page.type("div.lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8.b9fczbqn.t35qvd06.m62443ks.rkxvyd19.c5h0bzs2.bze30y65.kao4egtt", `Dear, Don't be angry please. It's a funny project & I chose you as one of my experimental Guinea pigs because I know you won't be bored and angry at me at all.`, { delay: 100 });
    await page.keyboard.press('Enter');

    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 sec before closing browser

    console.log("Message Send Completed Successfully! Closing browser");
    await browser.close();
  } catch (error) {
    console.error("Oops! Something is going wrong [Error Occurred]");
    console.error(error);
  } finally {
    rl.close();
  }
})();
