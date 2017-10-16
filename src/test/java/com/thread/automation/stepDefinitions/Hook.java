
package com.thread.automation.stepDefinitions;

import com.thread.automation.framework.BaseClass;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Hook extends BaseClass{

    private BaseClass baseClass;

    public Hook(BaseClass baseClass) {
        this.baseClass = baseClass;
    }

    @Before(order=1)
    public void setUp(){
        System.out.println("Initializing the browser:" );

       System.setProperty("webdriver.gecko.driver", "src/main/resources/inputs/geckodriver.exe");
        //System.out.println(baseClass.hashCode());
        baseClass.driver = new FirefoxDriver();
        System.out.println("The browser launched is  ************* ");
        baseClass.driver.manage().window().maximize();
    }

    @After(order=1)
    public void tearDown(){
       //baseClass.driver.close();
        baseClass.driver.quit();
    }


   @Before(order=0)
    public void beforeScenarioStart(){
        System.out.println("-----------------Start of Scenario-----------------");
    }

    @After(order=0)
    public void afterScenarioFinish(){
        System.out.println("-----------------End of Scenario-----------------");
    }
}

