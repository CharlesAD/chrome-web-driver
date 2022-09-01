import "chromedriver";
import { describe, it } from "node:test";
import { Builder, By, until } from "selenium-webdriver";

const URL = "https://s3t-products.netlify.app/";

let checkbox;
let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser("chrome").build();

  await driver.get(URL);

  checkbox = await driver.findElement(By.css("input[(type = checkbox)]"));

  // Is any data loading?
  try {
    await until.elementLocated;
    By.css("tr[data-testid='product-row'");
  } catch (error) {
    console.error("No data is loading");
    driver.quit();
  }
});

afterEach(() => {
  driver.quit();
});

describe("Category Rows", () => {
  it("should display categories in bold", async () => {
    const categoryRowFontWeight = await driver
      .findElement(By.css("tr[data-testid='cat-row'] th"))
      .getCssValue("font-weight");

    expect(categoryRowFontWeight).toBe("700 ");
  }, 30000);
});

describe("Out of stock", () => {
  it("hides out of stock products", async () => {
    //  const outOfStocks = await driver.findElement(By.className("out-of-stock"));

    // if (!outOfStocks.length) {
    // throw new Error("No out of stock products");
    // }

    // Or

    try {
      await driver.findElement(By.className("out-of-stock"));
    } catch {
      console.error("No out of stock products");
    }

    const outOfStock = await driver.findElements(By.className("out-of-stock"));

    expect(outOfStock).toHaveLength(0);
  }, 30000);
});
