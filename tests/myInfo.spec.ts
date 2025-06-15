import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { MyInfoPage } from '../pageObjects/MyInfoPage';
import { Constant } from '../utils/constant';

test('Update My Info details', async ({ page }) => {
    // Initialize LoginPage and perform login
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);

    // Initialize MyInfoPage and continue test flow
    const myInfoPage = new MyInfoPage(page);
    await myInfoPage.navigateToMyInfo();
    await myInfoPage.updateName(Constant.FIRSTNAME, Constant.MIDDLENAME, Constant.LASTNAME);
});