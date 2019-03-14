import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeaderTitleText() {
    return element(by.css('app-root > app-header strong')).getText() as Promise<string>;
  }
}
