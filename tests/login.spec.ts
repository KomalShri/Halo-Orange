import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { Constant } from '../utils/constant';

test('Login Test with Admin', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(Constant.USERNAME, Constant.PASSWORD);

  const dashboardText = await loginPage.verifyDashboard();
  expect(dashboardText).toContain('Dashboard');
});