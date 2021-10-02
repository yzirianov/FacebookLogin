import { expect } from 'chai';
import LoginPage from  '../pages/login.page';
import SecurePage from '../pages/secure.page';

describe('Facebook login application', () => {
    it('lets login', async () => {
        await LoginPage.open();

        await LoginPage.login('xxxx@hotmail.com', 'Password');
        
      it('Assert Attribute',()=> {
        
        const text = $('aria-label').getText()
        const element = $('aria-label')
        element.waitForExist()
        expect(element).toHaveText('Facebook')

        })
       
        await expect(flashAlert).toHaveTextContaining('Facebook');
    });
});


