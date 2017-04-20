import { browser, element, by } from 'protractor';
import { AbsaprojPage } from "./app.po"

export class CreatePage extends AbsaprojPage {
    navigateTo() {
        return browser.get('/Create');
    }

    getNameInput() {
        return element(by.css('app-root input[name="name"]'));
    }

    getSurnameInput() {
        return element(by.css('app-root input[name="surname"]'));
    }

     getCountryInput() {
        return element(by.css('app-root select[name="country"]'));
    }

     getSubmitButton() {
        return element(by.css('app-root .create-submit'));
    }

    selectCountry(){
      this.getCountryInput().element(by.css("option:nth-child(1)")).click();
    }
}
