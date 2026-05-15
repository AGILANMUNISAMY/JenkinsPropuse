Feature: validate the controls

Scenario: Validating the Radio, CheckBox, DropDown
  Given user on PracticeRagulshetty website
  When user validate the radio button
  And  user able to select the india in auto suggession
  And user validate the dropdown
  And user validate and select the checkbox
  Then Validation should be in successfully
