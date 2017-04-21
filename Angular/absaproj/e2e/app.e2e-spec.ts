import { AbsaprojPage } from './app.po';
import { LoginPage } from './loginpage';
import { CreatePage } from './createPage';
import { ViewPage } from './viewpage';
import { EditPage } from './editPage';


describe('absaproj App', function () {
  let page: AbsaprojPage;
  let loginPage: LoginPage;
  let createPage: CreatePage;
  let viewPage: ViewPage;
  let editPage: EditPage;

  beforeEach(() => {
    page = new AbsaprojPage();
    loginPage = new LoginPage();
    createPage = new CreatePage();
    viewPage = new ViewPage();
    editPage = new EditPage();
  });

  it('Nav bar initialisation successful', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Absa Project');
    expect(page.getLoginButton().isPresent()).toBeTruthy();
    expect(page.getLogOutButton().isPresent()).toBeFalsy();
  });

  it('Wrong password should not log in', () => {
    loginPage.navigateTo();
    loginPage.getLoginButton().click();
    loginPage.waiTforRouteToLoad("login");

    expect(loginPage.getLoginButton().isPresent()).toBeTruthy();
    expect(loginPage.getPasswordInput().isPresent()).toBeTruthy();
    expect(loginPage.getEmailInput().isPresent()).toBeTruthy();
    expect(loginPage.getLoginFormSubmitButton().isPresent()).toBeTruthy();


    loginPage.getPasswordInput().sendKeys("abc123a");
    loginPage.getEmailInput().sendKeys("a@b.com");

    loginPage.getLoginFormSubmitButton().click();

    expect(loginPage.getLoginFailed().isPresent()).toBeTruthy();

  });

  it('Can login', () => {
    loginPage.navigateTo();
    loginPage.getLoginButton().click();
    loginPage.waiTforRouteToLoad("login");

    expect(loginPage.getLoginButton().isPresent()).toBeTruthy();
    expect(loginPage.getPasswordInput().isPresent()).toBeTruthy();
    expect(loginPage.getEmailInput().isPresent()).toBeTruthy();
    expect(loginPage.getLoginFormSubmitButton().isPresent()).toBeTruthy();


    loginPage.getPasswordInput().sendKeys("abc123");
    loginPage.getEmailInput().sendKeys("a@b.com");

    loginPage.getLoginFormSubmitButton().click();
    expect(loginPage.getLoginFailed().isPresent()).toBeFalsy();

  });

  it('Can Create Person', () => {
    createPage.waiTforRouteToLoad("Create");

    expect(createPage.getNameInput().isPresent()).toBeTruthy();
    expect(createPage.getSurnameInput().isPresent()).toBeTruthy();
    expect(createPage.getCountryInput().isPresent()).toBeTruthy();
    expect(createPage.getSubmitButton().isPresent()).toBeTruthy();

    createPage.getNameInput().sendKeys("NewPerson");
    createPage.getSurnameInput().sendKeys("NewPersonSurname");
    createPage.selectCountry();
    createPage.getSubmitButton().click();

  });

  it('Can View People', () => {
    viewPage.waiTforRouteToLoad("people");
    expect(viewPage.getEntityTable().isPresent()).toBeTruthy();
    expect(viewPage.getEntityTableRow().isPresent()).toBeTruthy();
    viewPage.getEntityTableRowEdit().click();
  });

  it('Can Edit People', () => {
    editPage.waiTforRouteToLoad("people/");

    expect(editPage.getNameInput().isPresent()).toBeTruthy();
    expect(editPage.getSurnameInput().isPresent()).toBeTruthy();
    expect(editPage.getCountryInput().isPresent()).toBeTruthy();
    expect(editPage.getSubmitButton().isPresent()).toBeTruthy();
    editPage.getNameInput().clear();
    editPage.getSurnameInput().clear();
    editPage.getNameInput().sendKeys(makeid());
    editPage.getSurnameInput().sendKeys(makeid());
    editPage.selectCountry();
    editPage.getSubmitButton().click();
  });

  it('Can Logout', () => {
    page.waiTforRouteToLoad("people");

    page.getLogOutButton().click();
    page.waiTforRouteToLoad("login");

    expect(page.getLoginButton().isPresent()).toBeTruthy();
  });

  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
});
