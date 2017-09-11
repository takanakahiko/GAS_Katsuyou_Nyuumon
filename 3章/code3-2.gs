function addLog(text/*ログ内容*/) {
  var spreadsheetId = "シートのID";
  var sheetName = "シート1";
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  sheet.appendRow([new Date()/*タイムスタンプ*/,text]);
  return text;
}
