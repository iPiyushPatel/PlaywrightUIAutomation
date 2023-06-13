import BasePage from './BasePage';

const headerText = '//div//span[text()="Create a Free account"]'


class CreateAccount extends BasePage {

    async isHeaderTextPresent() {
        await this.page.locator(headerText).waitFor();
        const headerTextPresent = await this.page.locator(headerText).isVisible();
        return headerTextPresent;
      }
}

export default CreateAccount;
