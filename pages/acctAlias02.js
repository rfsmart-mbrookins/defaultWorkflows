import { expect } from "@playwright/test";

export class AcctAlias02 {
  constructor(page) {
    this.page = page;
  }

  accountAliasIssue02Link = () =>
    this.page.locator('a:has-text("Account Alias Issue 02")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");

  //Account Alias 02 link
  async validateAcctAlias02Link() {
    await this.accountAliasIssue02Link().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("002");
    await this.textBox().press("Enter");
  }

  //Collect Account Source
  async collectAccountSource() {
    await this.textBox().fill("US");
    await this.textBox().press("Enter");
  }

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("AS65001");
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
    await this.textBox().fill("\\PRINT-SERVLexmark-room");
    await this.textBox().press("Enter");
  }

  //Exit Workflow
  async exitWorkflow() {
    await this.exitBtn().click();
  }
}
