for (var i = 0; i < numRows; i++) {
  for (var j = 0; j < numColumns; j++) {
    var val = sheet.getRange(row+i, col+j).getValue(); //1マスのみの取得
    Logger.log(val);
  }
}
var val = sheet.getRange(0, 0, numRows, numColumns).getValues();
for (var i = 0; i < numRows; i++) {
  for (var j = 0; j < numColumns; j++) {
    Logger.log(val[i][j]);
  }
}
