@smoke
Feature: Manager Actions

    Scenario: Manager logs in 
        Given User goes to XYZ Bank Home page
        When User clicks on "Bank Manager" button
        Then Manager profile is displayed

    Scenario: Manager adds customer
        Given User goes to XYZ Bank Home page
        When User clicks on "Bank Manager" button
        And User clicks on "Add Customer" button
        And User adds new customer
        And User clicks on "Customers" button
        Then Attributes "firstName,lastName,postalCode" of new user are displayed

    # Scenario: Manager open account for already created customer
    #     Given User goes to XYZ Bank Home page
    #     When User clicks on "Bank Manager" button
    #     And User clicks on "Open Account" button
    #     And User selects "Hermoine Granger" customer
    #     And User selects "dollar" currency
    #     And User clicks on "Customers" button
    #     Then Customer list display new user

    # Scenario: Manager open account for new customer
    #     Given User goes to XYZ Bank Home page
    #     When User clicks on "Bank Manager" button
    #     And User clicks on "Add Customer" button
    #     And User adds new customer
    #     And User clicks on "Customers" button
    #     Then Customer list display new user