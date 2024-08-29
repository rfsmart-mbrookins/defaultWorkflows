import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AcctAlias02 } from "../pages/acctAlias02";
import { LabelPrint01 } from "../pages/labelPrint01";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  //Go to Login Page
  await test.step("Go to Login Page", async () => {
    await loginPage.goto();
  });
  //Enter Login Credentials
  await test.step("Input Valid Credentials and Submit", async () => {
    await loginPage.inputValidLoginCredentials();
    await loginPage.submitLoginCredentials();
  });
  //Click on Regression Link
  await test.step("Click Regression Link", async () => {
    await loginPage.validateRegressionLink();
  });
});

test.describe("Default Workflow Tests", () => {
  
  /* Account Alias Issue 02 */
  test("Account Alias Issue 02", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const acctAlias02Page = new AcctAlias02(page);
    //Click on Account Alias Issue 02 Link
    await test.step("Click Account Alias 02 Link", async () => {
      await acctAlias02Page.validateAcctAlias02Link();
    });
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await acctAlias02Page.collectOrg();
    });
    //Enter Account Source
    await test.step("Enter Account Source", async () => {
      await acctAlias02Page.collectAccountSource();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await acctAlias02Page.collectItemNumber();
    });
    //Enter Subinventory
    await test.step("Enter Subinventory", async () => {
      await acctAlias02Page.collectSubinventory();
    });
    //Enter Locator
    await test.step("Enter Locator", async () => {
      await acctAlias02Page.collectLocator();
    });
    //Enter Quantity
    await test.step("Enter Quantity", async () => {
      await acctAlias02Page.collectQuantity();
    });
    //Enter Unit of Measure
    await test.step("Enter UOM", async () => {
      await acctAlias02Page.collectUom();
    });
    //Enter Quantity of Labels
    await test.step("Enter Quantity of Labels", async () => {
      await acctAlias02Page.collectQtyLabels();
    });
    //Enter Printer
    await test.step("Enter Printer", async () => {
      await acctAlias02Page.collectPrinter();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await acctAlias02Page.exitWorkflow();
    });
  });

  /* Label Print 01 */
  test("Label Print 01", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const labelPrint01Page = new LabelPrint01(page);
    // Click on the Label Print 01 Link
    await test.step("Click Account Alias 02 Link", async () => {
      await labelPrint01Page.validateLabelPrint01Link();
    });
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await labelPrint01Page.collectOrg();
    });
    //Enter Subinventory
    await test.step("Enter Subinventory", async () => {
      await labelPrint01Page.collectSubinventory();
    });
    //Enter Locator
    await test.step("Enter Locator", async () => {
      await labelPrint01Page.collectLocator();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await labelPrint01Page.collectItemNumber();
    });
    //Enter Quantity
    await test.step("Enter Quantity", async () => {
      await labelPrint01Page.collectQuantity();
    });
    //Enter Quantity of Labels
    await test.step("Enter Quantity of Labels", async () => {
      await labelPrint01Page.collectQtyLabels();
    });
    //Enter Printer
    await test.step("Enter Printer", async () => {
      await labelPrint01Page.collectPrinter();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await labelPrint01Page.exitWorkflow();
    });
  });




}); //test descibe close
