var thds = GmailApp.search('検索ワード');
for(var i = 0; i < thds.length; i++){
  var thd = thds[i];
  var msgs = thd.getMessages();
  for(var j = 0; j < msgs.length; j++){
    var msg = msgs[j];
    var from = msg.getFrom();
    var to = msg.getTo();
    var date = msg.getDate();
    var subject = msg.getSubject();
    var body = msg.getBody();
    Logger.log(from+':'+to+':'+date+':'+subject+':'+body);
  }
}
