var url = "先ほど控えたURL";
var payload = { "text": message };
var options =　{
  "method" : "post",
  "payload" :　"payload=" + JSON.stringify(payload)
};
UrlFetchApp.fetch(url, options);
