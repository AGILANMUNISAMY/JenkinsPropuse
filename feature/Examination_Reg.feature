Feature: Registration Functionality

  @Registration
  Scenario Outline: Validate successful registration with valid inputs
    Given user is on the register page
    When user enters the fname "<firstName>"
    And user enters the lname "<lastName>"
    And user enters dateOfBrith "<dob>"
    And user selectoptions the country code "<country>"
    And user select on postal code "<postalCode>"
    And user enters house number "<houseNumber>"
    And user selects the street "<street>"
    And user selects the city "<city>"
    And user selects the state "<state>"
    And user enters phone number "<phone>"
    And user enters the Validemail "<email>"
    And user enters the password "<password>"
    And user clicks the register button
     Then registration should not be successful

    Examples:
      | firstName | lastName | dob        | country | postalCode | houseNumber | street     | city    | state      | phone      | email                        | password   |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 |


  @Registration @Negative @EmptyFieldValidation
  Scenario Outline: Validate registration fails when mandatory fields are empty
    Given user is on the register page
    When user enters the fname "<firstName>"
    And user enters the lname "<lastName>"
    And user enters dateOfBrith "<dob>"
    And user selectoptions the country code "<country>"
    And user select on postal code "<postalCode>"
    And user enters house number "<houseNumber>"
    And user selects the street "<street>"
    And user selects the city "<city>"
    And user selects the state "<state>"
    And user enters phone number "<phone>"
    And user enters the Validemail "<email>"
    And user enters the password "<password>"
    And user clicks the register button
    Then registration should not be successful

    Examples:
      | firstName | lastName | dob        | country | postalCode | houseNumber | street     | city    | state      | phone      | email                        | password   | errorMessage                                                                                                  |
      |           | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | First name is required                                                                                        |
      | Agilan    |          | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | Last name is required                                                                                         |
      | Agilan    | Munisamy |            | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | Please enter a valid date in YYYY-MM-DD format.Date of Birth is required                                      |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | Country is required                                                                                           |
      | Agilan    | Munisamy | 2002-07-24 | India   |            | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | Postalcode is required                                                                                        |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     |             | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | House number is required                                                                                      |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | Street is required                                                                                            |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | City is required                                                                                              |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai |            | 9876543210 | agilanmunisamy2003@gmail.com | Agilan@123 | State is required                                                                                             |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu |            | agilanmunisamy2003@gmail.com | Agilan@123 | Phone is required                                                                                      |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 |                              | Agilan@123 | Email is required                                                                                             |
      | Agilan    | Munisamy | 2002-07-24 | India   | 650037     | 123         | Anna Nagar | Chennai | Tamil Nadu | 9876543210 | agilanmunisamy2003@gmail.com |            | Password is required Password must be minimal 6 characters long. Password can not include invalid characters. |