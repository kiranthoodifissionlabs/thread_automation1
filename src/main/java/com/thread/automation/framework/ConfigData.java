package com.thread.automation.framework;

public class ConfigData {
	public static String SCREEN_PATH = "";
	//public static final String SCREENSHOT_PATH = "" + File.separator + "target" + File.separator + "screenshots";
	public static final String LOCATORS_FILE_LOCATION = "./src/main/resources/inputs/Repository.properties";
   // public static final String LOCAL_IE_DRIVER_PATH = "C:\\Work\\qa_automationcode\\IEDriverServer_x64_2.53.1\\IEDriverServer.exe";
  //  public static final String LOCAL_CHROME_DRIVER_PATH = "C:\\Work\\qa_automationcode\\chromedriver\\chromedriver.exe";
	public static final String EXCEL_LOCATION = "./src/main/resources/inputs/InPutTestData.xlsx";

	public static String REPORTS_PATH = "";
	public static String LOG_PATH = null;
	public static int MAX_WAIT = 13000;
	public static int minWait = 8000;
	public static int syncWait = 1000;
	

public String dynamicXpath(String xpath,String replacement){
		String newXpath= null;
		newXpath =xpath.replace("@text", replacement);
		return newXpath;
	}
	public void setScreenPath(String path){
		SCREEN_PATH =path;
	}

	public String getScreenPath(){
		return SCREEN_PATH;
	}

	public void setReportsPath(String path){
		REPORTS_PATH = path;
	}
	
	public void SetLogPath(String path){
		LOG_PATH =path;
	}

}
