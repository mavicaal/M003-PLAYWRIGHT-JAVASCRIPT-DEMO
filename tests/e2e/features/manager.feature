Feature: Manager Actions

    Background:
        Given User goes to XYZ Bank Home page
        When User clicks on "Bank Manager" button


    Scenario: Manager logs in 
        Then Manager profile is displayed

    Scenario: Manager adds customer
        Given User clicks on "Add Customer" button
        When User adds new customer
        And User clicks on "Customers" button
        Then Attributes "firstName,lastName,postalCode" of new user are displayed

    #  Scenario: Manager opens an account for customer
    #     Given User clicks on "Add Customer" button
    #     When User adds new customer
    #     And User clicks on "Open Account" button
    #     And User opens new acount to new user
    #     And User clicks on "Customers" button
    #     Then Attributes "firstName,lastName,postalCode,account" of new user are displayed