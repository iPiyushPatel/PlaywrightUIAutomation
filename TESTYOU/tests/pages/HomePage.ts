import BasePage from './BasePage';

const loginLinkText = '//a[@id = "ctl00_headerTop_Signindiv"]'
const appLogo = '//div[@class = "grid_7 logo pull_1"]'


class HomePage extends BasePage {

    async isLogoPresent() {
        await this.page.locator(appLogo).waitFor();
        const logoPresent = await this.page.locator(appLogo).isVisible();
        return logoPresent;
      }

  async clickOnLoginLinkText() {
    await this.page.locator(loginLinkText).click();
  }
}

export default HomePage;
