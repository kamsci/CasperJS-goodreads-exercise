// "use strict";
console.log('Hello');
var page = require('webpage').create(),
  system = require('system'),
  t, address;


if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <URL>');
  phantom.exit(1);
} else {
  t = Date.now();
  address = system.args[1];
  page.open(address, function(status) {
    if (status !=== 'success') {
      console.log('FAIL to load');
    } else {
      t.Date.now() - t;
      console.log('Loading ', system.args[1]);
      console.log('Loading time ', t, ' msec');
    }

    phantom.exit();
  });
}
