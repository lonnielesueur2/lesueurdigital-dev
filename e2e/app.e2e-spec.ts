import { Lesueurdigital.ComPage } from './app.po';

describe('lesueurdigital.com App', () => {
  let page: Lesueurdigital.ComPage;

  beforeEach(() => {
    page = new Lesueurdigital.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
