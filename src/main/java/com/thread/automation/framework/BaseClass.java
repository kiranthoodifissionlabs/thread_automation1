package com.thread.automation.framework;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

/**
 * Created by THOODI on 1/24/2017.
 */
public class BaseClass {
    protected WebDriver driver;

    protected String EXCEL_LOCATION = ConfigData.EXCEL_LOCATION;

  /*  protected LandingPage landingPage;
    protected LoginPage login;
    protected HomePage homePage;
    protected SubmitAppealPage submitPage;
    protected TownShipPage townPage;
    protected AppellantInformationPage  appellantPage;
    protected NotesPage notePage;
    protected ConfirmationPage confirmationPage;
    protected UploadPage uploadPage;
    protected MyAppealPage myAppealPage;
    protected MyAppealsResultsPage myAppealsResultsPage;
    protected ViewAppealPage viewAppealPage;*/
    protected Properties props = new Properties();

    @BeforeTest
    public void setUp(String browser,String url){
       /* driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(props.getProperty("THREAD_URL"));*/
        switch (browser) {
            case "firefox":
                //Note: Use firefox version 45.0. Please Don't upgrade to latest version. (webdriver.gecko.driver, webdriver.firefox.marionette)
                System.setProperty("webdriver.gecko.driver", filePathLoader("geckodriver.exe"));
                this.driver = new FirefoxDriver();

                break;
            case "chrome":
                System.setProperty("webdriver.chrome.driver", filePathLoader("chromedriver.exe"));
                this.driver = new ChromeDriver();
                break;
        /*    case "ie":
                System.setProperty("webdriver.ie.driver", filePathLoader("IEDriverServer.exe"));
                this.driver = new InternetExplorerDriver();
            case "htmlunitdriver":
                this.driver = new HtmlUnitDriver(true);
                break;
            case "edgedriver":
                System.setProperty("webdriver.edge.driver", filePathLoader("MicrosoftWebDriver.exe"));
                DesiredCapabilities capabilities = DesiredCapabilities.edge();
                driver = new EdgeDriver(capabilities);
                this.driver = new EdgeDriver();
                break;*/
            default:
                System.out.println("browser : " + browser + " is invalid");
                driver = new FirefoxDriver();
        }
        System.out.println("The browser launched is  ************* " + browser + " ********************");
        driver.manage().window().maximize();
        driver.navigate().to(url);
        driver.manage().timeouts().implicitlyWait(90000,TimeUnit.MILLISECONDS);
    }

    @AfterTest
    public void tearDown(){
        driver.quit();
    }


    public void GlobalData() throws IOException {
        final String LOCATORS_FILE_LOCATION = ConfigData.LOCATORS_FILE_LOCATION;
        File file = new File(LOCATORS_FILE_LOCATION);
        FileInputStream fis = new FileInputStream(file);
        System.out.println("The Repository properties path is:" + fis);
        Properties prop = new Properties();
        prop.load(fis);
    }

    public String filePathLoader(String filename) {
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource(filename).getFile());
        try {
            Runtime.getRuntime().exec(file.getAbsolutePath());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file.getAbsolutePath();
    }


    public void sendTextToElementById(String id,String text){
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].setAttribute(arguments[1], arguments[2])", driver.findElement(By.id(id)), "style", "border: 2px solid yellow; color: green; font-weight: bold;");
        driver.findElement(By.id(id)).sendKeys(text);
    }
}
