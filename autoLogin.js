const {Builder} = require('selenium-webdriver');

async function openGoogleChrome() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://the-internet.herokuapp.com');
  //make full screen
  await driver.findElement({xpath: '//*[@id="content"]/ul/li[21]/a'}).click();

  await driver.sleep(1000);
  try{
    //const searchBar = await driver.findElement({css: '.class#input'});
    const userInput = await driver.findElement({css: '#username'});
    await userInput.sendKeys('tomsmith');
    
  } catch(e){
    console.log("couldn't find css selector");
  }

  await driver.sleep(1000);
  try{
    const passwordInput = await driver.findElement({xpath: '//*[@id="password"]'})
    await passwordInput.sendKeys('SuperSecretPassword!');
  } catch(e){
    console.log("couldn't find css selector");
  }
  
  await driver.sleep(1000);

  try{
    const loginButton = await driver.findElement({css: '.radius'});
    await loginButton.click();
  } catch(e){
    console.log("couldn't find css selector");
  }

  await driver.sleep(3000);
  

  //click on the search using css selector id:  inputWrapper
  //const searchBar = await driver.findElement({css: '#input'});
  //await searchBar.sendKeys('selenium');

  try{
    const logoutButton = await driver.findElement({css: '.button.secondary.radius'});
    await logoutButton.click();
  } catch(e){
    console.log("couldn't find Css selector");
  }
   
  await driver.sleep(3000);

  await driver.quit();
}

openGoogleChrome();
