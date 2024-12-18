"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = new chrome_1.Options({});
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--use-fake-ui-for-media-stream");
        let driver = yield new selenium_webdriver_1.Builder()
            .forBrowser(selenium_webdriver_1.Browser.CHROME)
            .setChromeOptions(options)
            .build();
        try {
            yield driver.get("https://meet.google.com/qqr-phoz-psc");
            yield driver.sleep(1000);
            const nameInput = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//input[@placeholder="Your name"]')));
            yield nameInput.clear();
            yield nameInput.click();
            yield nameInput.sendKeys("Ai Notes");
            const enterButton = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//span[contains(text(), "Ask to join") or contains(text(),"Join")]')));
            console.log({ enterButton });
            yield enterButton.click();
            yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id("c12asdf")), 1000000);
        }
        finally {
            yield driver.quit();
        }
    });
}
main();
