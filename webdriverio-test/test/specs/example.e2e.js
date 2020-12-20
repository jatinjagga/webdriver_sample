
//import allureReporter from '@wdio/allure-reporter'

const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const SalePage = require('../pageobjects/sale.page');

//import LoginPage from '../pageobjects/login.page';

describe('My home page', () => {
    it('should open the home page', () => {
LoginPage.home();


    });
});


describe('My Login application', () => {
    it('should login with invalid credentials', () => {
  		
       	LoginPage.loginError("test@test.com","ThisIs@T3st",'Invalid login or password.');
    	LoginPage.loginError("","",'Login and password are required.');

    });
});


describe('Add product to cart', () => {
	it('should add shirt to cart', () => {
//CartPage.addtoCart("shirt","slim-fit-dobby-oxford","Blue","XL");
//CartPage.addtoCart("shirt","slim-fit-dobby-oxford","Blue","XL");
CartPage.addtoCart("shirt","Slim fit Dobby Oxford Shirt","Blue","XL");
//Slim fit Dobby Oxford Shirt



    });
});

describe('select sale page ', () => {
	it('should select the sale page ', () => {
SalePage.saleClick();


    });
});


describe('select filter on sale page ', () => {
	it('should select filter on sale page ', () => {
SalePage.salePriceFilter();
    });
});





