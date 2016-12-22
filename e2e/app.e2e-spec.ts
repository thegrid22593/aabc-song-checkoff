import { AabcSongCheckoffPage } from './app.po';

describe('aabc-song-checkoff App', function() {
  let page: AabcSongCheckoffPage;

  beforeEach(() => {
    page = new AabcSongCheckoffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
