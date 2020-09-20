Feature: Depop navigation bar validation

    # Intentionally kept user id and password in cucumber as in real world single user will not do transactions as we perform test executions with different credentials
    @NavigationMenu
    Scenario: I want to validate navigation bar default fields
        Given I am on Depop website
        When I click on login link
        And I set username "userName" on login page
        And I set password "password" on login page
        And I click on login button
        And I validate default fields from navigation menu
        And I validate profile icon value "SI"
