const BINPATH = './node_modules/nightwatch/bin/'

module.exports = {
  src_folders: [
    'test/e2e'
  ],
  output_folder: './reports',
  selenium: {
    start_process: true,
    server_path: './node_modules/nightwatch/bin/selenium.jar',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver' : './node_modules/nightwatch/bin/chromedriver'
    }
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: './screenshots'
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    }
  }
}

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error);
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});

