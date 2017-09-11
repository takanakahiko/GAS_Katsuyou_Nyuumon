function doGet(e) { //アクセスが来たら実行されます
  //Gmailの未読件数を取得
  var unreadCount = GmailApp.getInboxUnreadCount();

  //JSONとして返すデータを作成
  var returnData = { count: unreadCount };

  //JavaScriptオブジェクトをJSONに変換
  var json = createJSON(returnData);

  //返り値にすることでJSONをレスポンスにできる
  return json;
}

function createJSON( data ) { //JavaScriptオブジェクトをJSONに変換します
  var jsonString = JSON.stringify(data);
  var mimeType = ContentService.MimeType.JSON;
  var json = ContentService.createTextOutput(jsonString).setMimeType(mimeType);
  return json;
}
