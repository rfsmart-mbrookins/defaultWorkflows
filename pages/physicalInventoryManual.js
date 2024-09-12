import { expect } from "@playwright/test";

export class PhysicalInventoryManual {
  constructor(page) {
    this.page = page;
  }

  physicalInventoryManualLink = () =>
    this.page.locator('a:has-text("Physical Inventory Manual")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");

  //Physical Inventory Link
  async validatePhysicalInventoryManual() {
    await this.physicalInventoryManualLink().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("001");
    await this.textBox().press("Enter");
  }

  //Collect Physical Inventory Name
  async collectPhysicalInventoryName() {
    await this.textBox().fill("CS1 Physical Inventory");
    await this.textBox().press("Enter");
  }

  //Collect Subinventory
  async collectSubinventory() {
    await this.textBox().fill("CS1");
    await this.textBox().press("Enter");
  }

  //Collect Locator
  async collectLocator() {
    await this.textBox().fill("A.1.1.1");
    await this.textBox().press("Enter");
  }

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("CD-REG-ITEM-01");
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

  //Collect Number of Tags
  async collectQtyTags() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Printer -
  async collectPrinter() {
    await this.textBox().fill("TestPrinter1");
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

  //Exit Workflow
  async exitWorkflow() {
    await this.exitBtn().click();
  }
}
