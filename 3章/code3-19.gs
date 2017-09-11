var token = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";
var channel_id = "XXXXXXXXXX";
var text = "投稿したいテキスト";
var slackApp = SlackApp.create(token); 
slackApp.postMessage(channel_id, text, {
  username : _name,
  icon_url:_icon,
  "mrkdwn": true
});
