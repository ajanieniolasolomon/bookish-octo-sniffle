import { NewsGenerateDemoPage } from './app.po';

describe('News-generate-demo App', () => {
  let page: NewsGenerateDemoPage;

  beforeEach(() => {
    page = new NewsGenerateDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
