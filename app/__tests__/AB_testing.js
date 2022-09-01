import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

const URL = "https://the-internet.herokuapp.com/abtest";

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();

  await driver.get(URL);
});

afterEach(() => {
  driver.quit();
});

it("checks the string 'A/B' is in the title", async () => {
  const h3 = driver.findElement(By.tagName("h3"));

  expect(await h3.getText()).toContain("A/B");
});
