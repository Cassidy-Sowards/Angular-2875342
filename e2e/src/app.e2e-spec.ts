import { browser, element, by } from 'protractor';

describe('User List App', () => {

  beforeEach(async () => {
    browser.get('/dashboard');
  });

  it('should have a header', async () => {
    const header = by.css('h2');
    const text = await element(header).getText();
    expect(text).toBe('Active Users');
  });
});
