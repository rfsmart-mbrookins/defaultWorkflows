import { expect } from "@playwright/test";

export class AcctAlias02 {
  constructor(page) {
    this.page = page;
  }

 
  accountAliasIssue02Link = () => this.page.locator('a[id="AccountAliasIssue02_Default"]');
  textBox = () => this.page.locator('#txt');
  exitBtn = () => this.page.locator('#btnF3')

    //Account Alias 02 link
    async validateAcctAlias02Link() {
      await this.accountAliasIssue02Link().click();
    }

    //Collect Org
    async collectOrg() {
      await this.textBox().fill("002");
      await this.textBox().press('Enter');
    }

    async collectAccountSource() {
      await this.textBox().fill("US");
      await this.textBox().press('Enter');
    }

    async collectItemNumber() {
      await this.textBox().fill("AS65001");
      await this.textBox().press('Enter');
    }

    async collectSubinventory() {
      await this.textBox().fill("Stores");
      await this.textBox().press('Enter');
    }
    async collectLocator() {
      await this.textBox().fill("1.1.1.1");
      await this.textBox().press('Enter');
    }
    async collectQuantity() {
      await this.textBox().fill("1");
      await this.textBox().press('Enter');
    }
    async collectUom() {
      await this.textBox().fill("Ea");
      await this.textBox().press('Enter');
    }
    async collectQtyLabels() {
      await this.textBox().fill("0");
      await this.textBox().press('Enter');
    }
    async exitWorkflow() {
        await this.exitBtn().click();
    }

}