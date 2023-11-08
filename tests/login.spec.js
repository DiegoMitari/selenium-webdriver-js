const { Builder, By } = require('selenium-webdriver');

async function getSauceDemo() {

  let driver = new Builder()
                  .forBrowser('chrome')
                  .build();
  try {
    await driver.get('https://www.saucedemo.com/')

    await driver.findElement(By.id("user-name"))
                .sendKeys('standard_user')
    await driver.findElement(By.id('password'))
                .sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.sleep(3000)
    return driver;
    /**
     * El objeto driver es esencial en Selenium, ya que representa la instancia del navegador 
     * con la que puedes interactuar. Devolver driver permite que el test pueda utilizar este 
     * objeto en el segundo test para realizar acciones adicionales en la página web abierta.
     */
  } catch(error) {
    console.error('Error al abrir el navegador:', error)
    return null
    /**
     * Devolver null indica que algo salió mal y que el objeto driver no se inicializó correctamente. 
     * En el segundo test, puedes verificar si driver es null para manejar este caso de error y 
     * tomar las medidas apropiadas.
     */
  }
};

describe('Login Web Saucedemo Test', () => {

  it('Login with standar_user credentials', () => {
    getSauceDemo();
  })
})

module.exports = { getSauceDemo }