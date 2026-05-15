Feature: Validate Navigation window tabs and alert

  Scenario: Validate the Switch_Window_Tab_Alert
    Given user on the raghul shetty automation practice page
    When users are able to visible Switch Window Example Text
    And user should click the open window button
    And users are able to visible Switch Tab Example
    And user should click the Open tab

  Scenario: Validate the alert
    Given user on the raghul shetty automation practice page
    When users are able to visible Switch To Alert Example
    And user enter the full name in alert field
    And user click the alert
    Then alert popup should be displayed
    And user accept the alert

  Scenario: Validate the confirm
    Given user on the raghul shetty automation practice page
    When users are able to visible Switch To Alert Example
    And user enter the full name in alert field
    And user click the confirm
    Then confirm popup should be displayed
    And user accept the confirm


  Scenario: Element display and hide
   Given user on the raghul shetty automation practice page
    When users are able to visible Element Displayed Example
    And user able to visible the inputbox
    And user are able to click the hidebtn and check the input is hide
    And user are able to click the showbtn and check the input again visible
   

