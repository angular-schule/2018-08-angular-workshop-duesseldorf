import { browser, $ } from 'protractor';

fdescribe('duesseldorf.de', () => {

  // disable Angular synchronization because this is not an Angular page
  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should perform search', () => {
    // open page
    browser.get('https://www.duesseldorf.de');

    // wait for side overlay to be opened
    browser.sleep(500);

    // find and click search button in side overlay
    const searchBtn = $('li.toolbar-search button');
    searchBtn.click();

    // find search form and input field
    const searchForm = $('form#tx-solr-search-form-pi-search');
    const searchInput = searchForm.$('input#inputText');

    // type text into field
    searchInput.sendKeys('Schlosspark Benrath');

    // submit the form
    searchForm.submit();

    // get the result elements
    const results = $('ol.results-list').$$('li.results-entry');

    // get the headline link element of the first result
    const firstHeadline = results.first().$('a.link-internal');


    expect(results.count()).toBe(10);
    expect(firstHeadline.getText()).toBe('Schlosspark Benrath');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
