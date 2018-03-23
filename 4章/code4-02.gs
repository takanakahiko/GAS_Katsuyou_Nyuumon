function myFunction() {
  var id = "130010";　//東京のID

  //メール本文を取得する
  var text = generateWeatherMail(id);

  //天気概況文をログに出力する
  Logger.log(text)
}

//IDから天気概況文を取得する
function getWeatherDescription(id){
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);
  var discriptionText = json.description.text;
  return discriptionText;
}

//外部のJSONを取得する
function getJson(url){
  var resource = getResource(url);
  return JSON.parse(resource);
}

//外部のリソースを取得する
function getResource(url) {
  var response = UrlFetchApp.fetch(url);
  var contentText = response.getContentText();
  return contentText;
}

//IDから天気予報メールを生成
function generateWeatherMail(id){
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);

  var todayData = json.forecasts[0]; //本日のデータを取り出す

  var mailText = "おはようございます！本日の天気をお知らせします\n\n"

  var weather = todayData.telop; //天気を取り出す
  mailText += "天気:" + weather + "\n";

  if(todayData.temperature.min !== null){ //温度のデータが取得できた場合は
    var tempMin = todayData.temperature.min.celsius; //最低温度を取り出す
    var tempMax = todayData.temperature.max.celsius; //最高温度を取り出す
    mailText += "温度:" + tempMin + "~" + tempMax + "\n";
  }

  mailText += "\n";
  mailText += "以下詳細な予報です。" + "\n";

  var discriptionText = json.description.text; //天気概況文を取り出す
  mailText += discriptionText;

  return mailText;
}
