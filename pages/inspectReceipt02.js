import { expect } from "@playwright/test";

export class InspectReceipt02 {
  constructor(page) {
    this.page = page;
  }

  inspectReceipt02Link = () =>
    this.page.locator('a:has-text("Inspect Receipt 02")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");

  //Inspect Receipt 02 Link
  async validateInspectReceipt02() {
    await this.inspectReceipt02Link().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("002");
    await this.textBox().press("Enter");
  }

  //Collect Receipt
  async collectReceipt() {
    await this.textBox().fill("3344");
    await this.textBox().press("Enter");
  }

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("CD-REG-ITEM-01");
    await this.textBox().press("Enter");
  }

  //Collect Unit of Measure
  async collectUom() {
    await this.textBox().fill("Ea");
    await this.textBox().press("Enter");
  }

  //Collect Accepted Quantity
  async collectAcceptedQty() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Accepted Quality Code
  async collectAcceptedCode() {
    await this.textBox().fill("10");
    await this.textBox().press("Enter");
  }

  //Exit Workflow
  async exitWorkflow() {
    await this.exitBtn().click();
  }
}
