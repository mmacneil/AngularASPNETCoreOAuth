import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header title', () => {
    page.navigateTo();
    expect(page.getElementText('app-root > app-shell > app-header > header > div > div > a > strong')).toEqual('OAuth Client');
  });

  it('can navigate to registration', () => {
    page.navigateTo();
    page.clickButton('app-root > app-shell > main > div > app-index > div > div > a:nth-child(3)');
    browser.waitForAngular();
    expect(page.getElementText('h1')).toEqual('Register');
  });

  it('can navigate to login', () => {
    page.navigateTo();
    page.clickButton('app-root > app-shell > main > div > app-index > div > div > a:nth-child(4)');
    browser.waitForAngular();
    expect(page.getElementText('h1')).toEqual('Login');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
