import { browser, element, by } from 'protractor';
import { AbsaprojPage } from "./app.po"

export class ViewPage extends AbsaprojPage {
    navigateTo() {
        return browser.get('/');
    }

    getEntityRows() {
        return element.all(by.css('app-root table tr'));
    }

    getFirstEntityRows() {
        return this.getEntityRows().first();
    }

    getEntityTable() {
        return element(by.css('app-root table.personlist'));
    }

    getEntityTableRow() {
        return element.all(by.css('app-root table.personlist .personlistbody tr')).first();
    }

     getEntityTableRowEdit() {
        return element.all(by.css('app-root table.personlist .personlistbody tr a')).first();
    }
}
