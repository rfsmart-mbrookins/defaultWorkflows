import { expect } from "@playwright/test";

export class MiscellaneousTransactions {
  constructor(page) {
    this.page = page;
  }

  miscellaneousTransactionsLink = () =>
    this.page.locator('a:has-text("Miscellaneous Transactions")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");

  //Miscellaneous Transactions Link
  async validateMiscellaneousTransactions() {
    await this.miscellaneousTransactionsLink().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("001");
    await this.textBox().press("Enter");
  }

  //Collect Account Source
  async collectAccountSource() {
    await this.textBox().fill("US");
    await this.textBox().press("Enter");
  }

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("CD-REG-ITEM-01");
    await this.textBox().press("Enter");
  }

  //Collect Subinventory
  async collectSubinventory() {
    await this.textBox().fill("Stores");
    await this.textBox().press("Enter");
  }

  //Collect Locator
  async collectLocator() {
    await this.textBox().fill("1.1.1.1");
    await this.textBox().press("Enter");
  }

  //Collect Quanity
  async collectQuantity() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Unit of Measure
  async collectUom() {
    await this.textBox().fill("Ea");
    await this.textBox().press("Enter");
  }

  //Collect Quantity of Labels
  async collectQtyLabels() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Printer -
  async collectPrinter() {
    await this.textBox().fill("TestPrinter1");
    await this.textBox().press("Enter");
  }

  //Exit Workflow
  async exitWorkflow() {
    await this.exitBtn().click();
  }
}
