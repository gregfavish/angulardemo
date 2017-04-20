import { browser, element, by } from 'protractor';
import { AbsaprojPage } from "./app.po"

export class EditPage extends AbsaprojPage {
    getNameInput() {
        return element(by.css('app-root input[name="person-name"]'));
    }

    getSurnameInput() {
        return element(by.css('app-root input[name="person-surname"]'));
    }

    getCountryInput() {
        return element(by.css('app-root select[name="country-select"]'));
    }

    getSubmitButton() {
        return element(by.css('app-root .edit-submit'));
    }

    selectCountry() {
        this.getCountryInput().element(by.css("option:nth-child(2)")).click();
    }
}
