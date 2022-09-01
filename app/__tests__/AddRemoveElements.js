import "chromedriver";
import { it } from "node:test";
import { Builder, By, until } from "selenium-webdriver";

const URL = "https://the-internet.herokuapp.com/add_remove_elements/";

let driver;
let adder;

adder = await driver.findElements(By.className(""));

beforeEach(async () => {
  driver = new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();

  await driver.get(URL);
});

afterEach(() => {
  driver.quit();
});

it("adds a new button when 'add element' button is clicked", async () => {});
