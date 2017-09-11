function myFunction() {
  var id = "130010";

  //天気概況文を取得する
  var text = getWeatherDescription(id);

  //天気概況文をログに出力する
  Logger.log(text)
}

function getWeatherDescription(id){
  var endPoint = "http://weather.livedoor.com/forecast/webservice/json/v1?city=";
  var json = getJson(endPoint + id);
  var discriptionText = json.description.text;
  return discriptionText;
}

//以下省略
//function getJson(url){}
//function getResource(url) {}
