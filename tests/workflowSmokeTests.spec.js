import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AcctAlias02 } from "../pages/acctAlias02";

/* Go to login page using beforeEach hook */
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Go to Login Page", async () => {
    await loginPage.goto();
    // await loginPage.validateLoginPageURL();
  });
});

test.describe("Default Workflow Tests", () => {
  /* Login Validation test - Successful Login Test */
  test("Validate Successful Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Input Valid Credentials and Submit", async () => {
      await loginPage.inputValidLoginCredentials();
      await loginPage.submitLoginCredentials();
    });
    test("Validate Account Alias Issue 02", async ({ page }) => {
      const acctAlias02 = new AcctAlias02(page);
  });
});
