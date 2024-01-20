import LoginObject from "../selectors/LoginObject";
import 'cypress-xpath';
export class loginApp{

    //navigate to signin page 
    navigateToSignPage(){
        cy.xpath(LoginObject.Signin).click();
        cy.get(LoginObject.ContinueBtn).should('be.visible');
    }

    //enter mail id
    enterEmail(email){
        cy.get(LoginObject.Email).type(email);
    }

    //click on continue button and verify signin button should be visible
    clickOnContinueBtn(){
        cy.get(LoginObject.ContinueBtn).click();
        cy.get(LoginObject.signinBtn).should('be.visible');
    }

    //enter password
    enterpassword(password){
        cy.get(LoginObject.password).type(password);
    }

    //click on signin button
    clickOnSignBtn(){
        cy.get(LoginObject.signinBtn).click();
    }

    //verify amazon logo after login
    verifyAmazonLogo(){
        cy.get(LoginObject.verifyLogo).should('be.visible');
    }

    LoginApp(email,password){
        this.navigateToSignPage();
        this.enterEmail(email);
        this.clickOnContinueBtn();
        this.enterpassword(password);
        this.clickOnSignBtn();
    }

}