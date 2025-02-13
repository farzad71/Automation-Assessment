import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CreateAuthorPage } from '../pages/createAuthor.page';



type UIPages = {
  loginPage: LoginPage;
  createAuthorPage: CreateAuthorPage;


};

export const test = base.extend<UIPages>({
  createAuthorPage: async ({ page }, use) => {
    const createAuthorPage = new CreateAuthorPage(page);
    await use(createAuthorPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});
