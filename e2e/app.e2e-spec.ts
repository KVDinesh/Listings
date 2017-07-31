import { BussinesslistingsPage } from './app.po';

describe('bussinesslistings App', () => {
  let page: BussinesslistingsPage;

  beforeEach(() => {
    page = new BussinesslistingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
