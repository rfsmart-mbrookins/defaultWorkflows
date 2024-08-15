import { expect } from "@playwright/test";

export class AcctAlias02 {
  constructor(page) {
    this.page = page;
  }

 
  accountAliasIssue02Link = () => this.page.locator('a[id="AccountAliasIssue02_Default"]');

    //Account Alias 02 link
    async validateAcctAlias02Link() {
      await this.accountAliasIssue02Link().click();
    }

}