// Goodreads

// REQUIREMENTS
// * Login (don’t test registration)

casper.test.begin('Login to Goodreads', 3, function suite(test) {
  casper.start('https://www.goodreads.com/', function() {
    test.assertTitle('Share Book Recommendations With Your Friends, Join Book Clubs, Answer Trivia', 'goodreads homepage title as expected');
    test.assertExists('form[action="https://www.goodreads.com/user/sign_in?source=home"]', 'login form found');

    this.fill('form[action="https://www.goodreads.com/user/sign_in?source=home"]', {
      'user[email]': 'kamsci@gmail.com',
      'user[password]': 'p@ssw0rd'
    }, true);
  });

  casper.thenOpen('https://www.goodreads.com/user/show/58858200-krista',function() {

    //// Confirm page visual and Title
    // this.capture('login.png');
    // this.echo('First Page: ' + this.getTitle());

    test.assertTitleMatch(/Krista - Seattle/, 'login profile title as expected');
  });

////////////////////////////////////////
// Other attempts to confirm logged in
  // test.assertEval(function() {
    // return __utils__.findOne('.profileMenu').getAttribute('href') === '/user/show/58858200-krista';
    // });
  // });
//////////////////////////////////////

  casper.run(function() {
    test.done();
  });
});