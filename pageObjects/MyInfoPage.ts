import { expect, Locator, Page } from '@playwright/test';
import { time } from 'console';

export class MyInfoPage {
    private page: Page;
    private readonly myInfoTab: Locator;
    private readonly firstNameInput: Locator;
    private readonly middleNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initializing locators inside the constructor
        this.myInfoTab = page.locator('a[href*="viewMyDetails"]');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.saveButton = page.locator('button[type="submit"]:has-text("Save")').first();
    }

    async navigateToMyInfo() {
        await this.myInfoTab.click();
    }

    async updateName(firstname: string, middlename: string, lastname: string) {
        await this.firstNameInput.click(); 
        await this.firstNameInput.clear(); 
        await this.firstNameInput.fill(firstname);
        await this.middleNameInput.click(); 
        await this.middleNameInput.clear();
        await this.middleNameInput.fill(middlename);
        await this.lastNameInput.click(); 
        await this.lastNameInput.clear();
        await this.lastNameInput.fill(lastname);
        await this.saveButton.click();
        await this.page.waitForSelector('.oxd-toast'); 
        await this.page.reload();
        await this.page.waitForTimeout(1000); 
        expect(await this.firstNameInput.inputValue()).toBe(firstname);
        expect(await this.middleNameInput.inputValue()).toBe(middlename);
        expect(await this.lastNameInput.inputValue()).toBe(lastname);
    }

}