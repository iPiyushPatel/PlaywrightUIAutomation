import BasePage from './BasePage';

const loginPageHeaderText = '#ctl00_CPHContainer_pnl_login'
const emailTextBox = '//input[@id = "ctl00_indexLogin2_txtUserLogin"]'
const passwordTextBox = '//input[@id = "ctl00_indexLogin2_txtPassword"]'
const loginButton = '//input[@id = "ctl00_indexLogin2_lnkbtnSiginIn"]'
const errorMessage = '//span[@id = "ctl00_CPHContainer_lblOutput"]'
const forgotPasswordLink = '//a[@id = "ctl00_indexLogin2_hprlnkForgetPassword"]'
const signInWithFacebookButton = '//input[@id = "ctl00_indexLogin2_Button3"]'
const loginWithGoogleButton = '//div[@class = "common_btn grid_4 push_0 alpha  clearfix"]//following-sibling::a'
const signupForTestYouLink = '#ctl00_indexLogin2_LoginPanel'

class LoginPage extends BasePage {

    async isheaderTextPresent() {
        await this.page.locator(loginPageHeaderText).waitFor();
        const headerTextPresent = await this.page.locator(loginPageHeaderText).getByText('TestYou Login').isVisible();
        return headerTextPresent;
    }

    async loginToApp(loginData) {
        await this.page.locator(emailTextBox).fill(loginData.email);
        await this.page.locator(passwordTextBox).fill(loginData.password);
        await this.page.locator(loginButton).click();
    }

    async getErrorMessage() {
        const validationMessage = await this.page
            .locator(errorMessage)
            .textContent();
        return validationMessage;
    }

    async clickOnForgotPasswordLink() {
        await this.page.locator(forgotPasswordLink).click();
    }

    async clickOnSignInWithFacebookButton() {
        await this.page.locator(signInWithFacebookButton).click();
    }

    async getGoogleLinkText() {
        const googleLinkText =  await this.page.locator(loginWithGoogleButton).getAttribute('href');
        return googleLinkText
    }

    async clickOnSignupForTestYouLink() {
        await this.page.locator(signupForTestYouLink).getByRole('link', { name: 'Or Signup for TestYou' }).click();
    }

}

export default LoginPage;
