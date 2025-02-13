import { expect, type Locator, type Page } from '@playwright/test';
import ENV from "../utils/ENV";

export class LoginPage {
 

  private page: Page;
  private getLoginButton: Locator;
  private getUserNameInput: Locator;
  private getPasswordInput: Locator;
  private getAuthors: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getUserNameInput = page.getByLabel('Email address*');
    this.getPasswordInput = page.getByLabel('Password*');
    this.getLoginButton = page.getByRole('button', { name: 'Sign in' });
    this.getAuthors= page.locator("//span[contains(text(),'Authors')]")
    
  }



  async EnterUserName() {
    await this.getUserNameInput.fill(ENV.ADMIN_USER_NAME);

  }

  async EnterPassword() {
    await this.getPasswordInput.fill(ENV.ADMIN_USER_PASSWORD);
  }

  async ClickOnLoginButton() {
    await this.getLoginButton.click();
  }

  async ValidatedAuthorIsVisiable(){
    await this.getAuthors.isVisible();
  }
  
}