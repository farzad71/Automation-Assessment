import { expect } from "@playwright/test";
import{test as setup} from "./Fixture/page.fixture"
import { STORAGE_STATE_ADMIN } from "./playwright.config";

setup("Admin login Token", async ({ page, loginPage }) => {
  await page.goto("");
  await loginPage.EnterUserName();
  await loginPage.EnterPassword();
  await loginPage.ClickOnLoginButton();
  await expect(page).toHaveURL('https://demo.filamentphp.com/');
  await page.context().storageState({ path: STORAGE_STATE_ADMIN });
  const accessToken = await page.evaluate(()=>{
    return sessionStorage.getItem("access_token");
  })
  
  process.env.STORAGE_STATE_ADMIN = accessToken ?? ""

  await loginPage.ValidatedAuthorIsVisiable();

});


export default setup;
