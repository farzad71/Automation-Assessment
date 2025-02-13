import { expect, type Locator, type Page } from '@playwright/test';


export class CreateAuthorPage {
  private page: Page;
  private getAuthors: Locator;
  private getNewAuthors: Locator;
  private getNewAuthorsName: Locator;
  private getNewAuthorsEmail: Locator;
  private getCreate: Locator;
  private getSearch: Locator;
  private getResult: Locator;
 
 
  

  constructor(page: Page) {
    this.page = page;
    this.getAuthors= page.locator("//span[contains(text(),'Authors')]")
    this.getNewAuthors = page.locator(
      "(//div//button[2]//span)[2]"
    );
    this.getNewAuthorsName = page.locator(
      "//*[@id='mountedActionsData.0.name']"
    );
    this.getNewAuthorsEmail = page.locator("//*[@id='mountedActionsData.0.email']");
    this.getCreate = page.locator("(//span[contains(text(),'Create')])[1]");

    this.getSearch = page.locator("//*[@id='input-2']");
    this.getResult = page.locator("//span[contains(text(),'fz')]")
    
  }

  
  async ClickOnAuthors(){
    await this.getAuthors.isVisible();
    await this.getAuthors.click();
  }
  async ClickonNewAuthors() {
    await this.getAuthors.isVisible();
    await this.getNewAuthors.click();
    
  }

  async ClickOnCreate(){
    await this.getAuthors.isVisible();
    await this.getCreate.click();
  }
  async EnterNewAuthorsName() {
    await this.getNewAuthorsName.fill("fz");
  }

  async EnterNewAuthorsEmail() {
    await this.getNewAuthorsEmail.fill("abcd@yahoo.com");
  }

  async EnterInSearchBox() {
    await this.getSearch.fill("abcd@yahoo.com");
  }
  //#################----All the Assert Functions----####################################
 
  async AssertSearchResult() {
    console.log((this.getResult).getByText);
    await expect(this.getResult).toHaveText("fz");
  }

 
  
}
