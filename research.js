// Goodreads

//REQUIRMENTS
// * Search for a book
// * Add the book to your currently reading list
// * Update the reading progress on the book to 27%

// * the title of the book matches an expected name
// * the author name is correct
// * the reading progress has been set to 27 out of 100


////////////////////////////////////////////////////////
////                   RESEARCH                    ////

// Other attempts to confirm logged in
  // test.assertEval(function() {
    // return __utils__.findOne('.profileMenu').getAttribute('href') === '/user/show/58858200-krista';
    // });
  // });

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