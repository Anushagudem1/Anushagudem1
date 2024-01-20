
import LoginObject from "../selectors/LoginObject";
export class AddProductToCart{

    SearchProduct(ProductName){
        //Enter earpods in search box
        cy.get(LoginObject.searchBox).type(ProductName);
        //Click on search button
        cy.get(LoginObject.searchBtn).click();
    }

    selectThirdProductAddToCart(){
        //find out 3rd product from the list and click on add to cart button
        cy.get("[data-action='puis-card-container-declarative']").find(LoginObject.seeOption).eq('2').click();
        //verify success toasty notification
        cy.xpath(LoginObject.addedToCartSuccessNotifycation).should('be.visible');
        //verify 1 added to cart text
        cy.get(LoginObject.verifyaddToCart).should('be.visible');
    }

    verifyAddedProductToCart(){
        //click on cart button
        cy.get(LoginObject.cartBtn).click();
        // verify cart button having count 1 is prasent or not
        cy.xpath(LoginObject.addedCartCount).should('be.visible');
        //verify product prasent in cart or not
        cy.xpath(LoginObject.verifyAddedProduct).should('be.visible');
    }
}