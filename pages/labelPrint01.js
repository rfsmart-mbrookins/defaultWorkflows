import { expect } from "@playwright/test";

export class LabelPrint01 {
  constructor(page) {
    this.page = page;
  }

  LabelPrint01Link = () => this.page.locator('a:has-text("Label Print 01")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");

  //Label Print 01 link
  async validateLabelPrint01Link() {
    await this.LabelPrint01Link().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("002");
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

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("CD-REG-ITEM-01");
    await this.textBox().press("Enter");
  }

  //Collect Quantity
  async collectQuantity() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Quantity of Labels
  async collectQtyLabels() {
    await this.textBox().fill("0");
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
