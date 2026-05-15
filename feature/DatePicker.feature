Feature: DatePicker Functionality

Scenario: Validating the date picker
  Given user on the date picker wedpage
  When user click the date picker input
  And user select date "24-07-2003"
  Then check selected date is visible in date picker input

 

 
 