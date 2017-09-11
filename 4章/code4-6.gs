function myFunction(){
  postSlack("hello");
}

//Slackへ投稿する処理
function postSlack(message){
  var url = "先ほど控えたURL";
  var payload = { "text": message };
  sendHttpPost(url, "payload=" + JSON.stringify(payload));
}

//特定URLへPOSTする処理
function sendHttpPost(url,payload){
  var options =　{
    "method" : "post",
    "payload" : payload
  };
  Logger.log(payload);
  UrlFetchApp.fetch(url, options);
}

//議事録を作成する関数(コメント消去)
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
