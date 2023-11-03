const {Builder, By } = require('selenium-webdriver')

describe('Get an array of products from Sauce Demo Web', () => {
  it('Get array', async () => {
    let driver = new Builder()
                     .forBrowser('chrome')
                     .build()
    try {
      await driver.get('https://www.saucedemo.com/');

      //Login SauceDemo
      await driver.findElement(By.id('user-name'))
                  .sendKeys('standard_user')
      await driver.findElement(By.id('password'))
                  .sendKeys('secret_sauce')
      await driver.findElement(By.id('login-button')).click()
      await driver.sleep(2000)

      //Find the products
      let elements = await driver.findElements(By.css('.inventory_item'))
      let result = []
      for (const element of elements) {
        let rowElement = await (await element.getText()).split(/\n/)
        result.push({
          name: rowElement[0],
          price: parseFloat(rowElement[2].slice(1)),
          description: rowElement[1]
        })
      }
      console.log(result)
    } finally {
      await driver.quit();
    }
  })
})