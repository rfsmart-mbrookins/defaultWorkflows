import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
  }
  
  loginBtn = () => this.page.locator(".btn-primary");
  usernameInput = () => this.page.locator("#Username");
  passwordInput = () => this.page.locator("#Password");
  cancelBtn = () => this.page.locator(".btn-secondary");
  regressionLink = () => this.page.locator('a[href*="QA Regression"]');

  //Login
  async goto() {
    await this.page.goto("https://icsstg-purplecobras.oraclecloud.rfsmart.com/webclient");
  }

//Enter valid login credentials
  async inputValidLoginCredentials() {
    await this.usernameInput().fill("dev.one");
    await this.passwordInput().fill("RFSics1650");
  }

  //Enter invalid login credentials
  async inputInvalidLoginCredentials() {
    await this.usernameInput().fill("invalid_user");
    await this.passwordInput().fill("invalidPassword");
  }

  //Login button
  async submitLoginCredentials() {
    await this.loginBtn().click();
  }

  //Cancel button
  async cancelLoginCredentials() {
    await this.cancelBtn().click();
  }

  //Validate error message returned
  async validateInvalidLoginErrorMsg() {
    await expect(this.loginErrorMsg()).toBeVisible();
    await expect(this.loginErrorMsg()).toHaveText(
      "Invalid username or password"
    );
  }

  //Regression link
  async validateRegressionLink() {
    await this.regressionLink().click();
  }

}


