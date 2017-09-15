function myFunction() {
  var id = "130010";　//東京のID

  //天気概況文を取得する
  var text = getWeatherDescription(id);

  //天気概況文をログに出力する
  Logger.log(text)
}

function getWeatherDescription(id){ //IDから天気概況文を取得する
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);
  var discriptionText = json.description.text;
  return discriptionText;
}

function getJson(url){ //外部のJSONを取得する
  var resource = getResource(url);
  return JSON.parse(resource);
}

function getResource(url) { //外部のリソースを取得する
  var response = UrlFetchApp.fetch(url);
  var contentText = response.getContentText();
  return contentText;
}
