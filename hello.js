var page = require('webpage').create(),
  system = require('system'),
  t, address;

page.open('https://www.goodreads.com/', function(status) {
  console.log("Status", status);

  if (status === "success") {
    page.render('goodreads.png');
  }

   phantom.exit();
});
