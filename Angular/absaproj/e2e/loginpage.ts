import { browser, element, by } from 'protractor';
import { AbsaprojPage } from "./app.po"

export class LoginPage extends AbsaprojPage {
    navigateTo() {
        return browser.get('/');
    }

    getEmailInput() {
        return element(by.css('app-root input[name="logindetails-email"]'));
    }

    getPasswordInput() {
        return element(by.css('app-root input[name="logindetails-password"]'));
    }

    getLoginFormSubmitButton() {
        return element(by.css('app-root .login-submit'));
    }

    getLoginFailed() {
        return element(by.css('app-root .login-failed'));
    }
}
