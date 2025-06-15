import { expect, Locator, Page } from '@playwright/test';
import { LocatorValue } from '../utils/locators';
import { Constant } from '../utils/constant';

export class BuzzPage {
  private page: Page;
  private readonly buzzMenu: Locator;
  private readonly buzztext: Locator;
  private readonly buzzPost: Locator;
  private readonly likeButton: Locator;
  private readonly likeCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buzzMenu = page.locator(LocatorValue.buzzPage.buzzMenu);
    this.buzztext = page.locator(LocatorValue.buzzPage.buzzText);
    this.buzzPost = page.locator(LocatorValue.buzzPage.buzzPost);
    this.likeButton = page.locator(LocatorValue.buzzPage.likeButton).first(); 
    this.likeCount = page.locator(LocatorValue.buzzPage.likeCount).first(); 
  }

  async gotoBuzz() {
    await this.buzzMenu.click();
    await expect(this.buzztext).toBeVisible();
  }

  async addBuzzPost() {
    await this.buzztext.fill(Constant.BUZZ_TEXT); 
    await this.buzzPost.click();
  }

  async likeBuzzPost() {
    await this.likeButton.click();
    await expect(this.likeCount).toContainText('1');
  } 
 
}