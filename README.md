# 🔸 OrangeHRM Test Automation Framework

This project is a **Playwright-based TypeScript automation suite** designed to validate end-to-end flows on [OrangeHRM Open Source](https://opensource-demo.orangehrmlive.com/). It includes tests for modules like **Login**, **Buzz**, **Dashboard**, and **My Info**.

---

## 🚀 Tech Stack

- **Playwright** with TypeScript  
- **Page Object Model** design pattern  
- **Node.js & NPM**  
- **Playwright HTML Reporter**  
- JSON-based test data separation  

---

## 📁 Folder Structure
├── node_modules/             # Auto-generated dependencies (ignored in Git)
├── pageObjects/              # Page Object Model classes for each module
│   ├── BuzzPage.ts           # Encapsulates Buzz Newsfeed interactions
│   ├── LoginPage.ts          # Handles login page actions and validations
│   └── MyInfoPage.ts         # Covers My Info page scenarios
├── playwright-report/        # Auto-generated Playwright HTML test reports
├── test-results/             # Stores raw results, traces, and artifacts
├── tests/                    # All test specs
│   ├── buzz.spec.ts          # Test cases for Buzz functionality
│   ├── login.spec.ts         # Login scenarios
│   └── myInfo.spec.ts        # Tests for My Info workflows
├── utils/                    # Reusable constants and helper locators
│   ├── constant.ts           # Centralized static values like test text
│   └── locators.ts           # Modular selectors used across pages
├── .gitignore                # Files and folders excluded from Git tracking
├── package-lock.json         # Locks installed versions of dependencies
├── package.json              # Project metadata, scripts, and dependencies
├── playwright.config.ts      # Main Playwright test runner config
└── README.md                 # Project overview and instructions


---

## ⚙️ Setup Instructions

1. **Install dependencies**

   ```bash
   npm i


2. **Run tests**
    ```bash
   npx playwright test

3. **- Run specific test file**
   ```bash
   npx playwright test tests/buzz.spec.ts


4. **View HTML Report**
 ```bash
   npx playwright show-report



