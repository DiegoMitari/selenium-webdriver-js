const { Builder, By } = require('selenium-webdriver');

describe('Login Web saucedemo Test', () => {

  it('Login with standar_user credentials', async () => {

    let driver = new Builder()
                    .forBrowser('chrome')
                    .build();
    await driver.get('https://www.saucedemo.com/');

    await driver.findElement(By.id("user-name"))
                .sendKeys('standard_user')
    await driver.findElement(By.id('password'))
                .sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.sleep(3000);
    await driver.quit();
  })
})