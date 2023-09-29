const puppeteer = require('puppeteer');
const print = require('debug')('whats_app:Success_info');
const ErrorHandler = require('debug')('whats_app:Error');

(async () => {
  const options = {
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', //Read how to change executablePath in Readme file
  };

  // Handle errors
  try {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    console.log("Browser launched & created a new page. \nGoing to [whats app]]!");
    await page.goto('http://web.whatsapp.com');

    await new Promise(resolve => setTimeout(resolve, 30000)); // starts working after a minute
    await new Promise(resolve => setTimeout(resolve, 30000));
    
    console.log("Run a loop to send message 100 times :hahaha:");
    for (let i = 1; i <= 100; i++) {
      console.log("Typing our text in the input field");
      await page.type("div.lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8.b9fczbqn.t35qvd06.m62443ks.rkxvyd19.c5h0bzs2.bze30y65.kao4egtt", "Message number "+ i ); 
      
    //Write your own message above after the comma
      
      await page.keyboard.press('Enter');
      
      console.log(`Message sent: ${i} times.`);

      await new Promise(resolve => setTimeout(resolve, 1000)); //set time as your need
   
    }
  //Send one last message to notify it's just a funny project!
    
    console.log("Send one last message to notify it's just a funny project!");
    await page.type("div.lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8.b9fczbqn.t35qvd06.m62443ks.rkxvyd19.c5h0bzs2.bze30y65.kao4egtt", "Dear, Don't be angry please. It's a funny project & I chose you as one of my experimental Guinea pigs because I know you won't get hurt.", { delay: 100 });
    await page.keyboard.press('Enter');
    

    console.log("Message Send Completed Successfully! Closing browser");
    await browser.close();
  } catch (error) {
    ErrorHandler("Oops! Something is going wrong [Error Occurred]");
    console.error(error);
  }
})();
