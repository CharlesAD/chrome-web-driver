import { Builder } from "selenium-webdriver";
import "chromedriver";

async function test() {
  // Wait for the browser to get built and launched 🚀
  const driver = new Builder().forBrowser("chrome").build();

  await driver.get("https://www.google.com");

  driver.quit();
}

test();
