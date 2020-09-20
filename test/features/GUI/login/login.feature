Feature: Depop Login Page validation

    # Intentionally kept user id and password in cucumber as in real world single user will not do transactions as we perform test executions with different credentials

    @Login
    Scenario: Successful login page validation
        Given I am on Depop website
        When I click on login link
        And I set username "userName" on login page
        And I set password "password" on login page
        And I click on login link

    @Login
    Scenario: Validate error messages on Login screen
        Given I am on Depop website
        When I click on login link
        And I validate username and password error messages