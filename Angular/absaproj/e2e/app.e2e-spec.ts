import { AbsaprojPage } from './app.po';

describe('absaproj App', function() {
  let page: AbsaprojPage;

  beforeEach(() => {
    page = new AbsaprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
