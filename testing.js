// Goodreads

//REQUIRMENTS
// * Search for a book
// * Add the book to your currently reading list
// * Update the reading progress on the book to 27%

// * the title of the book matches an expected name
// * the author name is correct
// * the reading progress has been set to 27 out of 100

casper.test.begin('Goodreads searches for Nexus book and adds to currently-reading', 6, function suite(test) {

  var xpath = require('casper').selectXPath;

  casper.start('https://www.goodreads.com/', function() {

    test.assertTitle('Share Book Recommendations With Your Friends, Join Book Clubs, Answer Trivia', 'Goodreads homepage title as expected');

    test.assertExists('form[action="/search"]', 'Search form found');

    this.fill('form[action="/search"]', {
        'query': 'Nexus'
    }, true);

    test.assertField('query', 'Nexus');

  }); 

  casper.thenOpen('https://www.goodreads.com/search?q=nexus', function() {

    //// Confirm page visual
    this.capture('/testing-img/search.png');
    console.log('clicked search, new location is ' + this.getCurrentUrl());

    test.assertExists('form[action="/shelf/add_to_shelf"]', 'Form Exists: add to shelf');

    // Author and Title match
    // require('utils').dump(this.getElementsInfo(xpath('//*[@id="1_book_13642710.."]')));
    casper.evaluate(function() {
      this.echo("book:" + document.querySelector('.bookTitle').innerText());   
    });

    // this.echo("Book:" + this.fetchText(book));

    //// CSS3 Selector
    test.assertExists('button[value="currently-reading"]', 'Currently-reading button exists');

    // require('utils').dump(this.getElementsInfo('button[value="currently-reading"]'));

    this.click('button[type="submit"][value="currently-reading"]');

    //// XPath Selector
    this.test.assertExists(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button'), 'Found currently-reading button via element with book ID');

    // require('utils').dump(this.getElementsInfo(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button')));
    
    this.click(xpath('//*[@id="1_book_13642710"]/div[2]/div/ul/li[2]/button'));


    // require('utils').dump(this.getElementsInfo(xpath('//title')));

    casper.wait(3000, function () {
      
    // Check Status
    casper.evaluate(function() {
      require('utils').dump(this.getElementsInfo(xpath('//*[@id="1_book_13642710"]/div/span')));

      if (this.visible(xpath('//*[@id="1_book_13642710"]/div/span'))) {
        this.echo('Span Visible');
      } else {
        this.echo('Span Not Visible');
      }

    });

      this.capture('/testing-img/current.png');    
    });

  });
    
  // casper.wait(3000, function() {
  //   casper.then(function() {
  //     console.log('clicked ok, new location is ' + this.getCurrentUrl());
  //     this.capture('after-current.png');
  //     this.echo('Title Reviews: ' + this.getTitle());

  //   });    
  // });

  casper.thenOpen('https://www.goodreads.com/book/show/13642710', function() {
    test.assertExists('form[action="/user_status"]', 'update book  progress form exists');

    this.
    this.fill('form[action="/user_status"]', {
      'user_status[page]': 124
    }, true)

    test.assertField('user_status[page]', 124);

  });

  casper.run(function() {
    test.done();
  });

}); // end searches


////////////////////////////////////////////////////////
//// RESEARCH

  //// Console log HTML to confirm match to chrome tools
    // this.echo(this.getHTML());

  //// Submit button using fill()
    // this.fill('button[class="wtrExclusiveShelf"]', {
    //   'value': 'currently-reading'
    // }, true);
    // test.assertField('value', 'currently-reading');

  //// Locate element by ID
    // console.log('ID:' + document.getElementById('1_book_13642710'));
    // // RESULT: null
    
    // console.log('Form:' + document.querySelector('div[id="1_book_13642710"]'));
    // // RESULT: null

  //// Query select button then click  
    // casper.evaluate(function(current) {
    //   document.querySelector('button.wtrExclusiveShelf').value = current;
    //   // document.querySelector('button.wtrExclusiveShelf').click();
    // }, 'currently-reading');