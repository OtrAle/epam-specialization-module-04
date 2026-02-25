const { browser } = require("@wdio/globals");

module.exports = class Base {
  open(path) {
    return browser.url(path);
  }

  async getCurrentPath() {
    const url = await browser.getUrl();
    return new URL(url).pathname;
  }
};