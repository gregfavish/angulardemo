import { browser, element, by } from 'protractor';

export class AbsaprojPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }


  getLoginButton() {
    return element(by.css('app-root .login-button'));
  }

  getLogOutButton() {
    return element(by.css('app-root .logout-button'));
  }

  waiTforRouteToLoad(route) {
    browser.wait(this.urlChanged(route), 4000);
  }


  urlChanged(route) {
    return function () {
      return browser.getCurrentUrl().then(function (actualUrl) {
        return actualUrl.indexOf(route) >-1;
      });
    };
  };

  pause() {
    browser.pause();
  }
};

