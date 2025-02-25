const {Builder} = require('selenium-webdriver');

async function openGoogleChrome() {
  let driver = await new Builder().forBrowser('chrome').build();
  console.log("poop before open");
  await driver.get('http://www.google.com');
  //make full screen
  await driver.manage().window().maximize();
  console.log("max");
  await driver.sleep(1000);
  try{
    //const searchBar = await driver.findElement({css: '.class#input'});
    const searchBar = await driver.findElement({css: '.gLFyf'});
    await searchBar.sendKeys('selenium');
  } catch(e){
    console.log("couldn't find css selector");
  }

  await driver.sleep(1000);
  try{
    //const searchBar = await driver.findElement({css: '.class#input'});
    const dots9 = await driver.findElement({css: '.gb_B'}).click();
  } catch(e){
    console.log("couldn't find css selector");
  }
  

  await driver.sleep(3000);

  console.log("poop");
  //Find and click "Stay signed out" using XPATH //*[@id="yDmH0d"]/c-wiz/div/div/c-wiz/div/div/div/div[2]/div[2]/button
  
  try{
    const staySignedOut = await driver.findElement({xpath: '//*[@id="yDmH0d"]/c-wiz/div/div/c-wiz/div/div/div/div[2]/div[2]/button'});
    await staySignedOut.click();
  } catch(e){
    console.log("couldn't find xpath selector");
  }

  await driver.sleep(3000);
  

  //click on the search using css selector id:  inputWrapper
  //const searchBar = await driver.findElement({css: '#input'});
  //await searchBar.sendKeys('selenium');

  try{
    let gmail = await driver.findElement({css: '.gb_X'});
    await gmail.click();
  } catch(e){
    console.log("couldn't find Css selector");
  }
   
  // await driver.sleep(3000);

  //await driver.quit();
}

openGoogleChrome();
