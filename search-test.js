// Goodreads

//REQUIRMENTS
// * Login (don’t test registration)
// * Search for a book
// * Add the book to your currently reading list
// * Update the reading progress on the book to 27%

// * the title of the book matches an expected name
// * the author name is correct
// * the reading progress has been set to 27 out of 100

casper.test.begin('Login to Goodreads, search, add to currently-reading, update progress', 10, function suite(test) {

  var xpath = require('casper').selectXPath;


  // LOGIN TEST
  casper.start('https://www.goodreads.com/', function() {

    test.assertTitle('Share Book Recommendations With Your Friends, Join Book Clubs, Answer Trivia', 'goodreads homepage title as expected');
    test.assertExists('form[action="https://www.goodreads.com/user/sign_in?source=home"]', 'login form found');

    this.fill('form[action="https://www.goodreads.com/user/sign_in?source=home"]', {
      'user[email]': 'kamsci@gmail.com',
      'user[password]': 'p@ssw0rd'
    }, true);

    this.capture('search-test-img/after-login.png');
    this.echo('Home Page: ' + this.getTitle());

  });

  casper.thenOpen('https://www.goodreads.com/user/show/58858200-krista',function() {

    //// Confirm page visual and Title
    this.capture('search-test-img/profile.png');
    this.echo('Profile Page: ' + this.getTitle());

    test.assertTitleMatch(/Krista - Seattle/, 'login profile title as expected');
  });


  // SEARCH TEST
  casper.thenOpen('https://www.goodreads.com/', function() {

    //// Confirm page visual and Title
    this.capture('search-test-img/search.png');
    this.echo('Search Page: ' + this.getTitle());

    // test.assertTitle('Share Book Recommendations With Your Friends, Join Book Clubs, Answer Trivia', 'Goodreads homepage title as expected');

    test.assertExists('form[action="/search"]', 'Search form found');

    this.fill('form[action="/search"]', {
        'query': 'Nexus'
    }, true);

    test.assertField('query', 'Nexus');

  }); 


  // ADD TO CURRENTLY-READING TEST
  casper.thenOpen('https://www.goodreads.com/search?q=nexus', function() {

  // Confirm page URL and visual
    this.capture('search-test-img/search2.png');
    console.log('Search page location is ' + this.getCurrentUrl());

    test.assertExists('form[action="/shelf/add_to_shelf"]', 'Form Exists: add to shelf');


  // DOM CHECK - Author and Title match
    casper.evaluate(function() {
      this.echo("book:" + document.querySelector('.bookTitle').innerText());   
    });
    // Locate parent with xPath
    // require('utils').dump(this.getElementsInfo(xpath('..//*[@id="1_book_13642710"]')));
    
    // this.echo("Book:" + this.fetchText(book));


  // CLICK currently-reading -- CSS3 Selector Method
    test.assertExists('button[value="currently-reading"]', 'Currently-reading button exists');

    // require('utils').dump(this.getElementsInfo('button[value="currently-reading"]'));

    this.click('button[type="submit"][value="currently-reading"]');


  // CLICK currently-reading -- XPath Selector Method
    this.test.assertExists(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button'), 'Found currently-reading button via element with book ID');

    // require('utils').dump(this.getElementsInfo(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button')));
    
    this.click(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button'));


    // require('utils').dump(this.getElementsInfo(xpath('//title')));

    casper.wait(3000, function () {
      
    // Check currently-reading status
    casper.evaluate(function() {
      require('utils').dump(this.getElementsInfo(xpath('//*[@id="1_book_13642710"]/div/span')));

      if (this.visible(xpath('//*[@id="1_book_13642710"]/div/span'))) {
        this.echo('Span Visible');
      } else {
        this.echo('Span Not Visible');
      }

    });

      this.capture('search-test-img/currently.png');  

    }); // End wait

  });
    
    casper.then(function() {
      console.log('New location is ' + this.getCurrentUrl());
      this.capture('search-test-img/after-currently.png');
      this.echo('Title Reviews: ' + this.getTitle());

    });

  casper.thenOpen('https://www.goodreads.com/book/show/13642710-nexus?from_search=true', function() {
    
    casper.evaluate(function() {
      document.querySelector('div[class="wtrPrompt wtrUserStatusPrompt"]').setAttribute('display', 'initial');
    });

    test.assertExists('form[action="/user_status"]', 'update book progress form exists');


    this.fill('form[action="/user_status"]', {
      'user_status[page]': 124
    }, true)

    test.assertField('user_status[page]', 124);

  });

  casper.run(function() {
    test.done();
  });
  
});