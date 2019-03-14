import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  } 

  getElementText(selector: string) {
    return element(by.css(selector)).getText() as Promise<string>;
  }

  clickButton(selector: string) {
    return element(by.css(selector)).click();
  }
}


 