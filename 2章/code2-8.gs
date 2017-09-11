function doGet(e) { //アクセスが来たら実行されます
  var num1_str = e.parameter.num1; //文字列型
  var num1 = Number(num1_str); //数値型に変換
  var num2_str = e.parameter.num2; //文字列型
  var num2 = Number(num2_str); //数値型に変換
  var ret = num1 + num2;
  var returnData = { result: ret };
  var json = createJSON(returnData);
  return json;
}

function createJSON( data ) { //JavaScriptオブジェクトをJSONに変換します
  var jsonString = JSON.stringify(data);
  var mimeType = ContentService.MimeType.JSON
  var content = ContentService.createTextOutput(jsonString);
  return content.setMimeType(mimeType);
}
