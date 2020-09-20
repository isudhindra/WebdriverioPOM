Feature: I want to buy an item from products page

    # Intentionally kept user id and password in cucumber as in real world single user will not do transactions as we perform test executions with different credentials
    @Product
    Scenario: I want to buy an item which I desired from products page
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





