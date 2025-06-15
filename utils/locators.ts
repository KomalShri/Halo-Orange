export class LocatorValue {

    static readonly buzzPage = {
    buzzMenu: 'a[href*="buzz/viewBuzz"]',     
    buzzText: 'textarea[placeholder="What\'s on your mind?"]',
    buzzPost: 'button[type="submit"]',
    likeButton: '#heart-svg',
    likeCount: 'p.oxd-text.oxd-text--p:has-text("Like")',
    }

    static readonly loginPage = {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    dashboardHeader: 'h6',
    }
}