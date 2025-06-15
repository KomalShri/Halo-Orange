import { test, expect } from '@playwright/test';
import { BuzzPage } from '../pageObjects/BuzzPage';
import { LoginPage } from '../pageObjects/LoginPage';
import { Constant } from '../utils/constant';

test.describe('Buzz Feature', () => {
  let buzz: BuzzPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    buzz = new BuzzPage(page);

    await loginPage.goto();
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
    await buzz.gotoBuzz();
  });

  test('Navigate to Buzz', async ({ page }) => {
  await buzz.gotoBuzz();
  });

  test('Add Buzz Post', async ({ page }) => {
    await buzz.addBuzzPost();
  });

  test('Like Buzz Post', async ({ page }) => {
  await buzz.likeBuzzPost();
  });

});