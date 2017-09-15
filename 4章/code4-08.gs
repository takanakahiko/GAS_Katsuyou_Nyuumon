function doPost(e){
  var username = e.parameter.user_name;
  var url = makeMinutes();
  postSlack("@" + username + " さんの指示で議事録を作りました!\n" + url);
}

function postSlack(message){
  var url = "先ほど控えたURL";
  var payload = { "text": message };
  sendHttpPost(url, "payload=" + JSON.stringify(payload));
}

function sendHttpPost(url,payload){
  var options =　{"method" : "post", "payload" : payload};
  UrlFetchApp.fetch(url, options);
}

function makeMinutes() {
  var tempFile = DriveApp.getFileById("さっき覚えておいたID");
  var dt = new Date();
  var year = dt.getFullYear();
  var month = (("0"+(dt.getMonth()+1)).slice(-2));
  var day = (("0"+dt.getDate()).slice(-2));
  var newfile = tempFile.makeCopy(year+month+day);
  var newfile_id = newfile.getId();
  var dateText = year+"/"+month+"/"+day;
  var body = DocumentApp.openById(newfile_id).getBody();
  body.replaceText("date",dateText);
  return newfile.getUrl();
}
