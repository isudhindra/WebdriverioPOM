Feature: I want to review order after adding product
    # Intentionally kept user id and password in cucumber as in real world single user will not do transactions as we perform test executions with different credentials

    @ReviewOrder
    Scenario: I want to validate default fields on review page
        Given I am on Depop website
        When I click on login link
        And I set username "userName" on login page
        And I set password "password" on login page
        And I click on login button
        And I validate profile icon value "SI"
        Then I click on search link
        And I search product "madtrend"
        When I click product "madtrend-too-genius-graphic-tee" from products list
        Then I validate default fields from product page
        And I click on buy now button on product page
        And I validate default fields from review order page

    @ReviewOrder
    Scenario: I want to change address on review order page
        Given I am on Depop website
        When I click on login link
        And I set username "userName" on login page
        And I set password "password" on login page
        And I click on login button
        And I validate profile icon value "SI"
        Then I click on search link
        And I search product "madtrend"
        When I click product "madtrend-too-genius-graphic-tee" from products list
        Then I validate default fields from product page
        And I click on buy now button on product page
        And I validate default fields from review order page
        And I click on change address link on review order page
        And I change address on review order page
            | FullName    | Testing Depop  |
            | Address     | Amazing Street |
            | City        | Reading        |
            | State       | Berkshire      |
            | PostCode    | RG2 5DD        |
            | EmailId     | Test@gmail.com |
            | PhoneNumber | 07412345678    |