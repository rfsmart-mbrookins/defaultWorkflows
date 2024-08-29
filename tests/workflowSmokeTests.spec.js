import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AcctAlias02 } from "../pages/acctAlias02";
import { LabelPrint01 } from "../pages/labelPrint01";
import { MovementRequest } from "../pages/movementRequest";
import { ViewItemQuantities } from "../pages/viewItemQuantities";
import { InspectReceipt02 } from "../pages/inspectReceipt02";
import { MiscellaneousTransactions } from "../pages/miscellaneousTransactions";

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

// test.afterAll(async ({ page }) => {
//   const loginPage = new LoginPage(page);
//     //Exit Workflow
//     await test.step("Exit Workflow", async () => {
//       await loginPage.exitWorkflow();
//     });
// });

test.describe("Default Workflow Tests", () => {
  /* Account Alias Issue 02 */
  test("Account Alias Issue 02", async ({ page }) => {
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
    const labelPrint01Page = new LabelPrint01(page);
    // Click on the Label Print 01 Link
    await test.step("Click Label Print 01 Link", async () => {
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

  /* Create Movement Request */
  test("Create Movement Request", async ({ page }) => {
    const movementRequestPage = new MovementRequest(page);
    // Click on the Movement Request Link
    await test.step("Click Create Movement Request Link", async () => {
      await movementRequestPage.validateCreateMovementRequestLink();
    });
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await movementRequestPage.collectOrg();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await movementRequestPage.collectItemNumber();
    });
    //Enter Source Subinventory
    await test.step("Enter Source Subinventory", async () => {
      await movementRequestPage.collectSourceSubinventory();
    });
    //Enter Source Locator
    await test.step("Enter Source Locator", async () => {
      await movementRequestPage.collectSourceLocator();
    });
    //Enter Quantity
    await test.step("Enter Quantity", async () => {
      await movementRequestPage.collectQuantity();
    });
    //Enter Unit of Measure
    await test.step("Enter Unit of Measure", async () => {
      await movementRequestPage.collectUom();
    });
    //Enter Destination Subinventory
    await test.step("Enter Destination Subinventory", async () => {
      await movementRequestPage.collectDestinationSubinventory();
    });
    //Enter Destination Locator
    await test.step("Enter Destination Locator", async () => {
      await movementRequestPage.collectDestinationLocator();
    });
    //Enter Delivery Request Date
    await test.step("Enter Delivery Request Date", async () => {
      await movementRequestPage.collectDeliveryDate();
    });
    //Submit Movement Request
    await test.step("Submit Movement Request", async () => {
      await movementRequestPage.submitMovementRequest();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await movementRequestPage.exitWorkflow();
    });
  });

  /* View Item Quantities */
  test("View Item Quantities", async ({ page }) => {
    const viewItemQuantitiesPage = new ViewItemQuantities(page);
    // Click on the View Item Quantities Link
    await test.step("Click View Item Quantities Link", async () => {
      await viewItemQuantitiesPage.validateViewItemQuantitiesLink();
    });
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await viewItemQuantitiesPage.collectOrg();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await viewItemQuantitiesPage.collectItemNumber();
    });
    //Enter Subinventory
    await test.step("Enter Subinventory", async () => {
      await viewItemQuantitiesPage.collectSubinventory();
    });
    //Enter Locator
    await test.step("Enter Locator", async () => {
      await viewItemQuantitiesPage.collectLocator();
    });
    //Advance in Workflow
    await test.step("Click Enter", async () => {
      await viewItemQuantitiesPage.enterScreen();
    });
    //Enter Quantity of Labels
    await test.step("Enter Quantity of Labels", async () => {
      await viewItemQuantitiesPage.collectQtyLabels();
    });
    //Enter Quantity on Labels
    await test.step("Enter Quantity on Labels", async () => {
      await viewItemQuantitiesPage.collectQtyOnLabels();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await viewItemQuantitiesPage.exitWorkflow();
    });
  });

  /* Inspect Receipt 02 */
  test("Inspect Receipt 02", async ({ page }) => {
    const inspectReceipt02Page = new InspectReceipt02(page);
    // Click on the Inspect Receipt 02 Link
    await test.step("Click View Item Quantities Link", async () => {
      await inspectReceipt02Page.validateInspectReceipt02();
    });
    //Enter Organization Code
    await test.step("Enter Org Code", async () => {
      await inspectReceipt02Page.collectOrg();
    });
    //Enter Receipt Number
    await test.step("Enter Receipt Number", async () => {
      await inspectReceipt02Page.collectReceipt();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await inspectReceipt02Page.collectItemNumber();
    });
    //Enter Unit of Measure
    await test.step("Enter Unit of Measure", async () => {
      await inspectReceipt02Page.collectUom();
    });
    //Enter Accepted Quantity
    await test.step("Enter Accepted Quantity", async () => {
      await inspectReceipt02Page.collectAcceptedQty();
    });
    //Enter Accepted Quality Code
    await test.step("Enter Accepted Quality Code", async () => {
      await inspectReceipt02Page.collectAcceptedCode();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await inspectReceipt02Page.exitWorkflow();
    });
  });

    /* Miscellaneous Transactons */
    test("Miscellaneous Transactons", async ({ page }) => {
      const miscellaneousTransactionsPage = new MiscellaneousTransactions(page);
      // Click on the Inspect Receipt 02 Link
      await test.step("Click Miscellaneous Transactions Link", async () => {
        await miscellaneousTransactionsPage.validateMiscellaneousTransactions();
      });
      //Enter Organization Code
      await test.step("Enter Org Code", async () => {
        await miscellaneousTransactionsPage.collectOrg();
      });
        //Enter Account Source
    await test.step("Enter Account Source", async () => {
      await miscellaneousTransactionsPage.collectAccountSource();
    });
    //Enter Item Number
    await test.step("Enter Item Number", async () => {
      await miscellaneousTransactionsPage.collectItemNumber();
    });
    //Enter Subinventory
    await test.step("Enter Subinventory", async () => {
      await miscellaneousTransactionsPage.collectSubinventory();
    });
    //Enter Locator
    await test.step("Enter Locator", async () => {
      await miscellaneousTransactionsPage.collectLocator();
    });
    //Enter Quantity
    await test.step("Enter Quantity", async () => {
      await miscellaneousTransactionsPage.collectQuantity();
    });
    //Enter Unit of Measure
    await test.step("Enter UOM", async () => {
      await miscellaneousTransactionsPage.collectUom();
    });
    //Enter Quantity of Labels
    await test.step("Enter Quantity of Labels", async () => {
      await miscellaneousTransactionsPage.collectQtyLabels();
    });
    //Enter Printer
    await test.step("Enter Printer", async () => {
      await miscellaneousTransactionsPage.collectPrinter();
    });
    //Exit Workflow
    await test.step("Exit Workflow", async () => {
      await miscellaneousTransactionsPage.exitWorkflow();
    });

    });
        
});
