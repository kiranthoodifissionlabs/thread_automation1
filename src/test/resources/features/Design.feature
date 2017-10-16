Feature: Design Phase Feature

  It is a design phase first step.

  Scenario: Validate the login functionality
      Given I navigate to the login page
      And I enter the username as "vineeth.varada@fissionlabs.com" and password as "Password@18"
      And I click login button
      Then I should see the homepage with plus icon button
      And click on icon button to create the studies

  Scenario: Validate the  Who is the sponsor for this study screen
    When User clicks on the Begin button
    Then Application should be navigated to Who is the sponsor for this study screen.
    Then Select Sponsor of the study value from the dropdown
    And  Click on Continue button
    Then It should navigated to What is the name of the study screen

  Scenario: Validate Studyname should be entered with Continue button Screen
    When the studyname is entered as "STUDY_TEST_01" in the textbox
    And Click on Continue button
    And It will be navigated to Would you like a THREAD expert to guide you through this process screen

  Scenario: Validate Would you like a THREAD expert to guide you through this process screen
    When User clicks on sure that would help option from the screen
    Then It should navigate to Were happy to help screen
    And Click on Continue button
    Then It should navigate to In which countries will this study be conducted screen
    And Click on back navigation button available at the bottomleft corner
    Then It should navigate back to Were happy to help screen
    And Again click on back navigation button available at the bottomleft corner
    Then It should navigate back to Would you like a THREAD expert to guide you through this process screen
    Then Click on No thanks button
    Then It should navigate to In which countries will this study be conducted screen

  Scenario: Validate Select a value from the dropdown in In which countries will this study be conducted screen and click on Continue button
    When User selects a country from the dropdown
    And Click on Continue button
    Then It should navigate to What is the target participant population screen

  Scenario: Validate the target participant population screen
    When User selects a "Animal-Related Diseases" from the dropdown
    And Click on Continue button
    Then It should navigate to What type of study is this screen

  Scenario: Validate What type of study is this Screen
    When User selects a "Participant Community" from the dropdown
    And Click on Continue button
    And Select "Remote study" from Options screen
    Then It should navigate to What is the number of patients you expect to enroll screen

  Scenario:Validate What is the number of patients you expect to enroll screen
    When User enters the value as "99" in the textbox
    And Click on Continue button
    Then It should navigate to What are your key study dates screen

  Scenario: Validate What are your key study dates screen
    When User selects Study start date as the minimum value than all other values in the screen
    And Study end date as maximum value than all other values in the screen
    And First participant enrolled and First participants last day in the study dates should be in between the study start and end dates in ascending order
    And Select Study is continuous checkbox
    And Click on Continue button
    Then User should be navigated to Identify study milestones screen

  Scenario: Validate Identify study milestones screen
    When User enter input values  "0" "6" "9" "8" "11" into milestone fields available on the screen
    And Click on Continue button
    Then It should be navigated to What channels do you need screen

  Scenario: Validate What channels do you need screen
    When User Selects available options on the screen
    And Click on Continue button
    Then Application should be navigated to Element Library screen of Customize Phase

    Scenario: Validate the Element Library Screen
      When User Selects the Save and Exit Option
      Then It should navigate to landing screen with Welcome text
      And Select Logout from Welcome dropDown which is available on the top left corner of the screen
      Then Application should be navigated to SignIn screen


