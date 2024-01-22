import { loginApp } from "../pages/loginAmazonApp";
import { AddProductToCart } from "../pages/AddEarPodsTocart";

const AddCart = new loginApp();
const product = new AddProductToCart();

describe('E-commerce',async()=>{
    beforeEach(()=>{
        var email="anushagudem12@gmail.com";
        var password="Anush@12";

        cy.visit('https://www.amazon.com/');
        AddCart.LoginApp(email,password);
        AddCart.verifyAmazonLogo();
    })

    it('Add product to cart',()=>{
        var productsname="earpods";

        product.SearchProduct(productsname);
        //product.selectThirdProductAddToCart();
        product.selectThirdProductAndAddToCart()
        product.verifyAddedProductToCart();
    })
})