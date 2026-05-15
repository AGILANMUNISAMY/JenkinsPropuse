
@ValidateFormFields
Feature: Form Fields - Positive Scenario

  Scenario Outline: Validate successful form submission with valid inputs
    Given user is on the test page
    When user enters the first name "<firstName>"
    And user enters the last name "<lastName>"
    And user enters email "<email>"
    And user selects the country code "<countryCode>"
    And user enters the phone number "<phone>"
    And user enters the address line 1 "<address1>"
    And user enters the address line 2 "<address2>"
    And user enters the state "<state>"
    And user enters the postal code "<postalCode>"
    And user selects the country "<country>"
    And user selects the date of birth "<dob>"
    And user selects the gender "<gender>"
    And user accepts the terms and conditions
    And user clicks the submit button

    Examples:
      | firstName | lastName | email           | countryCode | phone      | address1 | address2 | state     | postalCode | country | dob        | gender |
      | Agilan    | Munisamy | agilan@test.com | +91         | 9876543210 | Street 1 | Area     | TamilNadu | 600001     | India   | 10-01-1998 | Male   |

   