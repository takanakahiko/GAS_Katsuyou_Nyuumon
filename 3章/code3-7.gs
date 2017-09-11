var thds = GmailApp.getInboxThreads();
for(var i = 0; i < thds.length; i++){
  var thd = thds[i];
  var msgs = thd.getMessages();
  for(var j = 0; j < msgs.length; j++){
    var msg = msgs[m];
    var from = msg.getFrom();//送信元
    var to = msg.getTo();//送信先
    var date = msg.getDate();//日付
    var subject = msg.getSubject();//件名
    var body = msg.getBody();//本文
    Logger.log(from+':'+to+':'+date+':'+subject+':'+body);
  }
}
