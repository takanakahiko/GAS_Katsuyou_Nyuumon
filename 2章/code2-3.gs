function myFunction(){
  //URLからリソースを受け取ります
  var html = getResource("http://takanakahiko.me/test.html");

  //取得した内容をログに出します。
  Logger.log(html);
}

function getResource(url) {
  //urlにアクセスした結果をresponseに格納します。
  var response = UrlFetchApp.fetch(url);
  //response内にあるcontentTextを文字列型で取り出します。
  var contentText = response.getContentText();
  //結果を返します
  return contentText;
}
