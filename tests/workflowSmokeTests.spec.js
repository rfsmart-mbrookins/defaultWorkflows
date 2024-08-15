import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AcctAlias02 } from "../pages/acctAlias02"; // Ensure correct import


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Go to Login Page", async () => {
    await loginPage.goto();
  });
});

test.describe("Default Workflow Tests", () => {

  /* Login Validation Test - Successful Login */
  test("Validate Successful Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Input Valid Credentials and Submit", async () => {
      await loginPage.inputValidLoginCredentials();
      await loginPage.submitLoginCredentials();
    })
  });

  /* Test to Open Regression Link */
  test("Default Workflow Smoketest", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const acctAlias02Page = new AcctAlias02(page);

    // Log in to the application
    await test.step("Input Valid Credentials and Submit", async () => {
      await loginPage.inputValidLoginCredentials();
      await loginPage.submitLoginCredentials();
    });

    // Click on the Regression Link
    await test.step("Click Regression Link", async () => {
      await loginPage.validateRegressionLink(); 
    });
  
    // Click on the Account Alias Issue 02 Link
    await test.step("Click Account Alias 02 Link", async () => {
      await acctAlias02Page.validateAcctAlias02Link(); 
    });
  

  });

});
