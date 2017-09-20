Feature: Design Phase

  Scenario: On clicking the Begin button, it should navigate to "Who is the sponsor for this study?" screen
    When the user clicks on the Begin button
    Then the application should be navigated to "Who is the sponsor for this study?" screen.

    Scenario: "Sponsor of the study" Value should be selected from the DropDown box and click on Continue button
      When the selects "Sponsor of the study" value from the dropdown
      Then the Continue button should be enabled
      And clicks on the Continue button
      Then it should be navigated to "What is the name of the study?" screen

      Scenario: Studyname should be entered and Continue button should be clicked
        When the studyname is entered in the textbox
        Then the Continue button should be enabled
        And clicks on the Continue button
        Then it should be navigated to "Would you like a THREAD expert to guide you through this process?" screen

        Scenario: Click on either options available on "Would you like a THREAD expert to guide you through this process?" screen
          When the user clicks on "sure, that would help" option from the screen
          Then it should navigate to "We’re happy to help." screen
          And click on Continue button.
          Then it should navigate to "In which countries will this study be conducted?" screen
          And click on back navigation button available at the bottom-left corner
          Then it should navigate back to "We’re happy to help." screen.
          And again click on back navigation button available at the bottom-left corner
          Then it should navigate back to "Would you like a THREAD expert to guide you through this process?" screen
          Then Click on "No thanks" button
          Then it should navigate to "In which countries will this study be conducted?" screen.

          Scenario: Select a value from the dropdown in "In which countries will this study be conducted?" screen and click on Continue button.
            When the user selects a "value: from the dropdown
            Then Continue button should be enabled
            Then Click on Continue button.
            Then it should navigate to "What is the target participant population(s)?" screen

            Scenario: Enter the value inside textbox in "What is the target participant population(s)?" screen and click on Continue button
              When the user enter the "value" and choose that from the suggestions prompted
              And Clicks on the Continue button which is enabled
              Then it should navigate to "What type of study is this?" screen.

              Scenario: Select a value from the dropdown in "What type of study is this?" and click on Continue button
                When the user selects a "value" from the dropdown box available
                And clicks on Continue button
                Then it should navigate to "What is the number of patients you expect to enroll?" screen

                Scenario: Enter a value in the text box available in "What is the number of patients you expect to enroll?" screen and click on Continue button
                  When the user enters a "value" in the text box
                  And clicks on the continue button
                  Then it should navigate to "What are your key study dates?" screen

                  Scenario: configure the valid date values in "What are your key study dates?" screen and click on Continue button
                    When the user selects "Study start date" as the minimum value than all other values in the screen
                    And "Study end date" as maximum value than all other values in the screen
                    And "First participant enrolled" and "First participant's last day in the study" dates should be in between the study start and end dates in ascending order
                    And "Study is continuous" check box is checked
                    Then "Continue button should be enabled
                    And on clicking the Continue button
                    Then The user should be navigated to "Identify study milestones." screen

                    Scenario: configuring respective values in "Identify study milestones." screen and clicking on Continue button.
                      When the user enter input values into milestone fields available on the screen
                      And clicks on Continue button
                      Then it should be navigated to "What channels do you need?" screen

                      Scenario: Select all that apply in "What channels do you need?" screen and Click on Continue button
                        When the user selects atleast one of the available options on the screen
                        Then the Continue button should be enabled
                        And when the users clicks on cContinue button
                        Then the application should be navigated to "Element Library" screen of "Customize" phase


