Feature: Manager Actions

    Background:
        Given User goes to XYZ Bank Home page
        When User clicks on "Bank Manager" button

    @smoke
    Scenario: Manager logs in 
        Then Manager profile is displayed
    @smoke
    Scenario: Manager adds customer
        Given User clicks on "Add Customer" button
        When User adds new customer
        And User clicks on "Customers" button
        Then Attributes "firstName,lastName,postalCode" of new user are displayed
    @smoke
    Scenario: Manager opens an account for customer
        Given User clicks on "Add Customer" button
        When User adds new customer
        And User clicks on "Open Account" button
        And User opens new "Pound" acount to new user
        And User clicks on "Customers" button
        Then Attributes "firstName,lastName,postalCode,accounts" of new user are displayed
    @smoke
    Scenario: New customer appears in customer login option
        Given User clicks on "Add Customer" button
        When User adds new customer
        And User clicks on "Home" button
        And User clicks on "Customer Login" button
        And Customer logs in with "New User"
        Then "New User" account is displayed
    @smoke
    Scenario: New customer is deleted
        Given User clicks on "Add Customer" button
        When User adds new customer
        And User clicks on "Customers" button
        And User deletes "New User"
        And User clicks on "Home" button
        And User clicks on "Customer Login" button
        Then "New User" option is not displayed
    
    Scenario: Old customer is deleted
        Given User clicks on "Customers" button
        When User deletes "Hermoine Granger"
        And User clicks on "Home" button
        And User clicks on "Customer Login" button
        Then "Hermoine Granger" option is not displayed