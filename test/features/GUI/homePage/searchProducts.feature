Feature: I want to search desired product

    # Intentionally kept user id and password in cucumber as in real world single user will not do transactions as we perform test executions with different credentials
    @SearchProduct
    Scenario: I want to validate navigation bar default fields
        Given I am on Depop website
        When I click on login link
        And I set username "userName" on login page
        And I set password "password" on login page
        And I click on login button
        And I validate profile icon value "SI"
        Then I click on search link
        And I search product "madtrend"
        And I click product "madtrend-too-genius-graphic-tee" from products list


