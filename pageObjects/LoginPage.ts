import { Locator, Page } from '@playwright/test';
import playwrightConfig from '../playwright.config.ts';
import { LocatorValue } from '../utils/locators.ts';
import { Constant } from '../utils/constant.ts';

export class LoginPage {
  private page: Page;
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator(LocatorValue.loginPage.username);
    this.password = page.locator(LocatorValue.loginPage.password);
    this.loginButton = page.locator(LocatorValue.loginPage.loginButton);
  }

  async goto() {
    await this.page.goto(playwrightConfig.use?.baseURL ?? Constant.BASE_URL);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyDashboard() {
    return await this.page.locator('h6').textContent();
  }
}