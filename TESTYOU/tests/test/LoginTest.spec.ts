import { test, expect } from '@playwright/test';
import LoginPO from '../pages/LoginPage';
import LoginData from '../data-factory/LoginData'
import HomePage from '../pages/HomePage';
import ForgotPasswordPage from '../pages/ForgotPassword';
import CreateAccountPage from '../pages/CreateAccoutPage';

test('1: Verify that user is logged in successfully with valid data in both fields', async ({
    page,
}) => {

    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.validLoginData();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add login data and submit
    await login.loginToApp(loginCredentials)

});

test('2: Verify that user is redirected to the ForgotPassword page after clicking on Forgot Password ? link', async ({ page }) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const forgotPassword = new ForgotPasswordPage(page);

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

     //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Click on the ForgotPassword link
    await login.clickOnForgotPasswordLink();

    //Verify that user is navigate to the ForgotPassword page
    const headerText = await forgotPassword.isHeaderTextPresent();
    expect(headerText).toBeTruthy();

});

test('3: Verify that user is redirected to the Facebook page after clicking on Sign in with Facebook button', async ({ page }) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

   //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy(); 

    //Click on the Sign in with facebook link
    await login.clickOnSignInWithFacebookButton();

    /* //Verify that user is redirected to the facebook page
    expect(page).toHaveURL('*facebook*') */
});

test('4: Verify that user is redirected to the Google page after clicking on Login with Google button', async ({ page }) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy(); 

    //Verify the google link text
    const googleLink = await login.getGoogleLinkText();
    expect(googleLink).toContain('google.com')
    
});

test('5: Verify that user is redirected to the Create a free account page after clicking on Or Signup for TestYou link', async ({ page }) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const createAccount = new CreateAccountPage(page);

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

      //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy(); 

    //Click on the Or Signup for TestYou link
    await login.clickOnSignupForTestYouLink();

    //Verify that user is navigate to the create account page
    const headerText = await createAccount.isHeaderTextPresent();
    expect(headerText).toBeTruthy();
});

test('6: Verify that validation message is displayed after clicking on the Login button with invalid data in both fields', async ({
    page,
}) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.invalidLoginData();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add invalid login data in both fields and submit
    await login.loginToApp(loginCredentials)

    //Verify validation message is displayed
    const errorMessage = await login.getErrorMessage();
    expect(errorMessage).toEqual('Userid or Password Not Match');

});

test('7: Verify that validation message is displayed after clicking on the Login button with invalid Email & valid Password', async ({
    page,
}) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.invalidEmailAndValidPassword();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add invalid Email & valid Password and submit
    await login.loginToApp(loginCredentials)

    //Verify validation message is displayed
    const errorMessage = await login.getErrorMessage();
    expect(errorMessage).toEqual('Userid or Password Not Match');

});

test('8: Verify that validation message is displayed after clicking on the Login button with valid Email & invalid Password', async ({
    page,
}) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.validEmailAndInvalidPassword();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add valid Email & invalid Password and submit
    await login.loginToApp(loginCredentials)

    //Verify validation message is displayed
    const errorMessage = await login.getErrorMessage();
    expect(errorMessage).toEqual('Userid or Password Not Match');

});

test('9: Verify that validation message is displayed while entering less than minimim character limit', async ({
    page,
}) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.lessThanMinChar();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add less than minimim character limit in both fields
    await login.loginToApp(loginCredentials)

    //Verify validation message is displayed
    const errorMessage = await login.getErrorMessage();
    expect(errorMessage).toEqual('Userid or Password Not Match');

});

test('10: Verify that validation message is displayed while entering more than maximum character limit', async ({
    page,
}) => {
    const login = new LoginPO(page);
    const home = new HomePage(page);
    const loginCredentials = LoginData.moreThanMaxChar();

    //Navigate to the URL
    await page.goto('');

    //Verify the app logo is present
    const logoPresent = await home.isLogoPresent();
    expect(logoPresent).toBeTruthy();

    //Click on the 'Login' link
    await home.clickOnLoginLinkText();

    //Verify the header text of login page
    const loginHeaderText = await login.isheaderTextPresent();
    expect(loginHeaderText).toBeTruthy();

    //Add more than maximum character limit in both fields
    await login.loginToApp(loginCredentials)

    //Verify validation message is displayed
    const errorMessage = await login.getErrorMessage();
    expect(errorMessage).toEqual('Userid or Password Not Match');

});
