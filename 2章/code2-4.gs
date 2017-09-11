function myFunction() {
  //ドキュメントから得た情報をもとにURLに必要な情報を用意する
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var id = "130010";

  //jsonのデータを取得する
  var json = getJson(endPoint + id);

  //JSONをログに出力する
  Logger.log(json)
}

function getJson(url){
  var resource = getResource(url);
  return JSON.parse(resource); //ここがポイント
}

//前回ソースの使いまわし
function getResource(url) {
  var response = UrlFetchApp.fetch(url);
  var contentText = response.getContentText();
  return contentText;
}
