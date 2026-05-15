Feature: File Upload Functionality

  @fileupload
  Scenario: Upload a valid file successfully
    Given the user is on the file upload page
    When the user sees the file upload instructions
    And the user chooses a valid file from the local system
    Then the file should be uploaded successfully
    And a success message should be displayed

