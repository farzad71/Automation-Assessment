import {test} from "../Fixture/page.fixture"

test.describe('Web Application Page Validation Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

  });

  test('Verify "Verify that the newly created Author appears in the search results@regression', async ({createAuthorPage}) => {
    await createAuthorPage.ClickOnAuthors();
    await createAuthorPage.ClickonNewAuthors();
    await createAuthorPage.EnterNewAuthorsName();
    await createAuthorPage.EnterNewAuthorsEmail();
    await createAuthorPage.ClickOnCreate();
    await createAuthorPage.EnterInSearchBox();
    await createAuthorPage.AssertSearchResult();
  });

  
  
});
