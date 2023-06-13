import BasePage from './BasePage';

const headerText = '//span[text()="Forgot your password"]'


class ForgotPassword extends BasePage {

    async isHeaderTextPresent() {
        await this.page.locator(headerText).waitFor();
        const headerTextPresent = await this.page.locator(headerText).isVisible();
        return headerTextPresent;
      }
}

export default ForgotPassword;
