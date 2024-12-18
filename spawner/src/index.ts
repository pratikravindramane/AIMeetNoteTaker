import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
import { elementLocated } from "selenium-webdriver/lib/until";
async function main() {
  const options = new Options({});
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--use-fake-ui-for-media-stream");
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();
  try {
    await driver.get("https://meet.google.com/qqr-phoz-psc");
    await driver.sleep(1000);
    const nameInput = await driver.wait(
      until.elementLocated(By.xpath('//input[@placeholder="Your name"]'))
    );
    await nameInput.clear();
    await nameInput.click();
    await nameInput.sendKeys("Ai Notes");

    const enterButton = await driver.wait(
      until.elementLocated(
        By.xpath(
          '//span[contains(text(), "Ask to join") or contains(text(),"Join")]'
        )
      )
    );
    console.log({ enterButton });
    await enterButton.click();

    await driver.wait(until.elementLocated(By.id("c12asdf")), 1000000);
  } finally {
    await driver.quit();
  }
}
main();
