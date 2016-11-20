module.exports = {
  'Google Assert Title': function(browser) {
    browser
      .url('https://google.com')
      .waitForElementVisible('body')
      .assert.title('Google')
      .end()
  }
}
