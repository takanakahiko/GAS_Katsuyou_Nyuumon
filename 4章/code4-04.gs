function myFunction() {
  var id = "130010";　//東京のID

  var recipient = "xxxxxxx@xxxxxxxx.xxx";　//携帯のメールアドレス
  var subject = "今日の天気予報";
  var body = generateWeatherMail(id);

  GmailApp.sendEmail(recipient, subject, body);
}

function getWeatherDescription(id){
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);
  var discriptionText = json.description.text;
  return discriptionText;
}

function getJson(url){
  var resource = getResource(url);
  return JSON.parse(resource);
}

function getResource(url) {
  var response = UrlFetchApp.fetch(url);
  var contentText = response.getContentText();
  return contentText;
}

function generateWeatherMail(id){
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);
  var todayData = json.forecasts[0]; 
  var mailText = "おはようございます！本日の天気をお知らせします\n\n"
  var weather = todayData.telop;
  mailText += "天気:" + weather + "\n";
  if(todayData.temperature.min !== null){
    var tempMin = todayData.temperature.min.celsius;
    var tempMax = todayData.temperature.min.celsius;
    mailText += "温度:" + tempMin + "~" + tempMax + "\n";
  }
  mailText += "\n";
  mailText += "以下詳細な予報です。" + "\n";
  var discriptionText = json.description.text;
  mailText += discriptionText;
  return mailText;
}
