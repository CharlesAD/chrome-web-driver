import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

const URL = "https://s3t-tic-tac-toe.netlify.app";

let driver;
let squares;

beforeEach(async () => {
  driver = new Builder().forBrowser("chrome").build();
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

// 'X' always goes first.
it("shows 'X' and 'O' on alternate clicks", async () => {
  const square1 = squares[0];
  const square2 = squares[1];
  const square3 = squares[2];

  await square1.click();
  await square2.click();
  await square3.click();

  expect(await square1.getText()).toBe("X");
  expect(await square2.getText()).toBe("O");
  expect(await square3.getText()).toBe("X");
});

it("recognizes when 'X' wins", async () => {
  squares[4].click();
  squares[2].click();
  squares[7].click();
  squares[1].click();
  squares[0].click();
  squares[3].click();
  squares[8].click();

  // 'h1' will only appear after there is a winner.
  const h1 = await driver.wait(until.elementLocated(By.tagName("h1")));

  expect(await h1.getText()).toBe("X wins!");
});
