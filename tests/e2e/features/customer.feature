Feature: Customer Login

    Scenario Outline: Customer logs in with any default user
        Given User goes to XYZ Bank Home page
        When User clicks "Customer" Login button
        And Customer logs in with "<user>"
        Then "<user>" account is displayed

    Examples:
        |user|
        |Hermoine Granger|
        |Harry Potter|
        |Ron Weasly|
        |Albus Dumbledore|
        |Neville Longbottom|
