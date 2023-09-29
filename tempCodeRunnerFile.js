const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

var finishline = async function () {
 // for(let i=0;i<2;i++){
  try {
    const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36');
    await page.goto('https://web.whatsapp.com/');
    
    // Wait for the page to load or perform any necessary waiting logic
    //await page.waitForSelector('.g0rxnol2.f804f6gw.ln8gz9je.ppled2lx.gfz4du6o.r7fjleex.g9p5wyxn.i0tg5vk9.aoogvgrq.o2zu3hjb.jpthtbts.lyqpd7li.bs7a17vp.csshhazd._11JPr');
    await page.waitForTimeout(5000);
  //  await page.click('.ast-custom-button');
    

    await page.waitForTimeout(2000);
    // Click on the image with the specified class
    await page.type("input[id='wpforms-9-field_0']",`Aryan ${i}`)

    await page.type("input[id='wpforms-9-field_0-last']",'Kumar')

    await page.type("input[id='wpforms-9-field_1']",'Aryankumar@gmail.com')

    await page.type("input[id='wpforms-9-field_3']",'Meeting')

    await page.type("textarea[id='wpforms-9-field_2']",'When can we set the meeting?')

    await page.waitForTimeout(2000);

    await page.click('#wpforms-submit-9', btn => btn.click())

    await page.waitForTimeout(1000);

    await page.click('#wpforms-submit-9', btn => btn.click())

    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }

};

finishline();
