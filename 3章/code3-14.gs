var response = UrlFetchApp.fetch(url);
var context = response.getContentText();

var json = JSON.parse(context);
