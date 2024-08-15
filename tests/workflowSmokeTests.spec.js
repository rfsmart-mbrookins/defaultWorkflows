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
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await acctAlias02Page.collectOrg(); 
    });
    await test.step("Enter Account Source", async () => {
      await acctAlias02Page.collectAccountSource();
    });
    await test.step("Enter Item Number", async () => {
      await acctAlias02Page.collectItemNumber();
    });
    await test.step("Enter Subinventory", async () => {
      await acctAlias02Page.collectSubinventory();
    });
    await test.step("Enter Locator", async () => {
      await acctAlias02Page.collectLocator();
    });
    await test.step("Enter Quantity", async () => {
      await acctAlias02Page.collectQuantity();
    });
    await test.step("Enter UOM", async () => {
      await acctAlias02Page.collectUom();
    });
    await test.step("Enter Quantity of Labels", async () => {
      await acctAlias02Page.collectQtyLabels();
    });
    await test.step("Exit Workflow", async () => {
      await acctAlias02Page.exitWorkflow();
    });

  

  });

});
