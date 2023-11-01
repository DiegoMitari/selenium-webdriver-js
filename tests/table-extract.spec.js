const { use } = require('express/lib/application');
const {Builder, By} = require('selenium-webdriver')

describe('Extract Data from table', () => {
  it('Test Table', async () => {
    let driver = new Builder()
                    .forBrowser('chrome')
                    .build();
    try {
      await driver.get('https://rori4.github.io/selenium-practice/#/pages/tables/smart-table')
      //Iterate through the links buttons
      for (let i = 1; i < 6; i++) {

      }

      let rows =await driver.findElements(By.xpath('//tbody//tr'))
      let result = [];
      for (const row of rows) {
        let rowData = await row.getText();
        let user = rowData.split(/\n/)

        result.push({
          id: user[0],
          firstName: user[1],
          lastName : user[2],
          userName : user[3],
          email : user[4],
          age   : user[5]
        })
      }
      console.table(result)
    } finally {
      await driver.quit()
    }
  })
})