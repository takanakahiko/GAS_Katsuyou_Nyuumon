payload = { }; //今回は指定しない
var response = getAccessTwitter('statuses/user_timeline', payload);

//タイムラインのツイート一覧の取得ができる
var tweets = JSON.parse();

//for文で1つずつ取得する
for(var i = 0; i < tweets.length;i++){
  if(tweets[i].text.match(/中山/) ){
    var screen_name = tweets[i].user.screen_name;
    var id_str = tweets[i].id_str;
    var url = "https://twitter.com/"+screen_name+"/status/"+id_str;
    Logger.log(url);
  }
}
