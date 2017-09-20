package com.thread.automation.testRunner;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "classpath:features",
        glue = "com.thread.automation.stepDefinitions",
        format = {"pretty","html:target/cucumber-html-report","json:target/cucumber.json"}
        )

public class TestRunner extends AbstractTestNGCucumberTests  {
}
