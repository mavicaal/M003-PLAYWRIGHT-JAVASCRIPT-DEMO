import { Given, When, Then } from '@cucumber/cucumber';

When('User clicks on {string} button', async (buttonName: string) => {
    switch(buttonName) { 
        case "Customer": { 
           await (global as any).home.clicksCustomerLoginButton();
           break; 
        } 
        case "Bank Manager": { 
           await (global as any).home.clicksBankManagerLoginButton();
           break; 
        } 
        case "Add Customer": {
           await (global as any).manager.clicksAddCustomerBtn();
           break;    
        } 
        case "Customers": { 
           await (global as any).manager.clicksCustomersBtn(); 
           break; 
        }  
        default: { 
            throw new Error('Button name is not recognized!');           
        } 
     }
});