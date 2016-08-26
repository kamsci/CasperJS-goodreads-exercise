# CasperJS-goodreads-exercise
Used CasperJS to test Goodreads.com

## Instructions
* Installed CasperJs and PhantomJS via Homebrew
* Created cookies file by running terminal command: casperjs test --cookies-file=cookies.txt
  *  NOTE: Did not use cookie.txt file in test
* Run test.js file in terminal using command:  capserjs test test.js


## Oustanding Issues
* No persistent login, did some research and the theory is casper.start might be the culprit. Other research suggests ways to keep session cookies, however, I have not been able to implement. 
* Not all tests will pass becasue I cannot stay logged in to complete the test assertions. 
