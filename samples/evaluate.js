var page = require('webpage').create();

page.open('https://www.goodreads.com/', function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ', title);
  phantom.exit();
});

// var page = require('webpage').create();
// page.onConsoleMessage = function(msg) {
//   console.log('Page title is ' + msg);
// };
// page.open(url, function(status) {
//   page.evaluate(function() {
//     console.log(document.title);
//   });
//   phantom.exit();
// });