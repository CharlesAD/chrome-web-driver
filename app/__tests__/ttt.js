import "geckodriver";
import { Builder, By } from "selenium-webdriver";

const URL = "https://s3t-tic-tac-toe.netlify.app/";

let driver;
let squares;

beforeEach(async () => {
  driver = new Builder().forBrowser("firefox").build();
  driver.manage().window().maximize();

  await driver.get(URL);

  squares = await driver.findElements(By.className("square"));
});

afterEach(() => {
  driver.quit();
});

it("renders nine squares", () => {
  expect(squares).toHaveLength(9);
});

it("returns alternating noughts and crosses when buttons are clicked", async () => {
  const square1 = squares[0];
  const square2 = squares[1];
  const square3 = squares[2];

  await square1.click();
  await square2.click();
  await square3.click();

  expect(await square1.getText()).toBe(driver.getText("X"));
  expect(await square2.getText()).toBe(driver.getText("O"));
  expect(await square3.getText()).toBe(driver.getText("X"));
});
