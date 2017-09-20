package com.thread.automation.framework;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;

public class ExcelUtil {
	public String getTestDataFromExcel(String sheetValue,String rowId,String columnHeader)   {
		int rowValue=0,colValue=0;
		String data = null;
		File f = new File(ConfigData.EXCEL_LOCATION);
		try( FileInputStream fis = new FileInputStream(f) )
		{
			XSSFWorkbook workbook ;
			if(sheetValue.isEmpty())
				throw new Exception("Sheet Should not Be Empty");
			workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheet(sheetValue);
			for (int rowIndex = 0; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
				XSSFRow row = sheet.getRow(rowIndex);
				if (row != null) {
					for (int colIndex = 0; colIndex < row.getPhysicalNumberOfCells(); colIndex++) {
						XSSFCell cell =row.getCell(colIndex);
						if(cell.getStringCellValue().trim().equals(rowId))
							rowValue=rowIndex;
						if(cell.getStringCellValue().trim().equals(columnHeader))
							colValue=colIndex;
					}
				}
			}
			XSSFRow r1= sheet.getRow(rowValue);
			XSSFCell c1 = r1.getCell(colValue);
			data=c1.getStringCellValue();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return data;
	}
}
