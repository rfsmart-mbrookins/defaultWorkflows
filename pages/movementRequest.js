import { expect } from "@playwright/test";

export class MovementRequest {
  constructor(page) {
    this.page = page;
  }

  movementRequestLink = () =>
    this.page.locator('a:has-text("Create Movement Request")');
  textBox = () => this.page.locator("#txt");
  exitBtn = () => this.page.locator("#btnF3");
  submitBtn = () => this.page.locator("#btnF5");

  //Label Print 01 link
  async validateCreateMovementRequestLink() {
    await this.movementRequestLink().click();
  }

  //Collect Org
  async collectOrg() {
    await this.textBox().fill("002");
    await this.textBox().press("Enter");
  }

  //Collect Item Number
  async collectItemNumber() {
    await this.textBox().fill("CD-REG-ITEM-01");
    await this.textBox().press("Enter");
  }

  //Collect Source Subinventory
  async collectSourceSubinventory() {
    await this.textBox().fill("Stores");
    await this.textBox().press("Enter");
  }

  //Collect Source Locator
  async collectSourceLocator() {
    await this.textBox().fill("1.1.1.1");
    await this.textBox().press("Enter");
  }

  //Collect Quantity
  async collectQuantity() {
    await this.textBox().fill("1");
    await this.textBox().press("Enter");
  }

  //Collect Unit of Measure
  async collectUom() {
    await this.textBox().fill("Ea");
    await this.textBox().press("Enter");
  }

  //Collect Destination Subinventory
  async collectDestinationSubinventory() {
    await this.textBox().fill("Stores");
    await this.textBox().press("Enter");
  }

  //Collect Source Locator
  async collectDestinationLocator() {
    await this.textBox().fill("1.1.1.2");
    await this.textBox().press("Enter");
  }

  //Collect Delivery Request Date
  async collectDeliveryDate() {
    const currentDate = new Date().toISOString().split("T")[0];
    await this.textBox().fill(currentDate);
    await this.textBox().press("Enter");
  }

  //Click Submit Button
  async submitMovementRequest() {
    await this.submitBtn().click();
  }

  //Exit Workflow
  async exitWorkflow() {
    await this.exitBtn().click();
  }
}
