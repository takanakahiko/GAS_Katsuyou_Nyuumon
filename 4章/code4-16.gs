function getTwitterService() {
  return OAuth1.createService('twitter')
  .setAccessTokenUrl('https://api.twitter.com/oauth/access_token')
  .setRequestTokenUrl('https://api.twitter.com/oauth/request_token')
  .setAuthorizationUrl('https://api.twitter.com/oauth/authorize')
  .setConsumerKey(CONSUMER_KEY)
  .setConsumerSecret(CONSUMER_SECRET)
  .setCallbackFunction('authCallback')
  .setPropertyStore(PropertiesService.getScriptProperties());
}

function authCallback(request) {
  var service = getTwitterService();
  var isAuth = service.handleCallback(request);
  if (isAuth)  return HtmlService.createHtmlOutput('OK');
  else return HtmlService.createHtmlOutput('NG');
}

function auth(){
    var service = getTwitterService();
    if (service.hasAccess()) return;
    var authorizationUrl = service.authorize();
    Logger.log(authorizationUrl);
}

var twitter_base_url = 'https://api.twitter.com/1.1/';

function postAccessTwitter(endPoint, payload){
  var service  = twitter.getService();
  var payload_str = payloadToString(payload);
  var options = {method:'post', escaping:false, payload:payload_str};
  var url = twitter_base_url+endPoint+'.json';
  return service.fetch(url, options)
};

function getAccessTwitter(endPoint, payload){
  var service  = twitter.getService();
  var payload_str = payloadToString(payload);
  var options = { method:'get', escaping:false};
  var url = twitter_base_url+endPoint+'.json?'+payload_str;
  return service.fetch(url, options)
};

function payloadToString(payload){
  return Object.keys(payload).map(function(key) {
    return encodeToRfc3986(key)+'='+encodeToRfc3986(payload[key]);
  }).join('&');
}

function encodeToRfc3986(str) {
  return encodeURIComponent(str).replace(/[!'()]/g, function(char) {
    return escape(char);
  }).replace(/\*/g, "%2A");
}

function getTimeline(){
    var response = getAccessTwitter('statuses/user_timeline', null);
    var tweets = JSON.parse(response.getContentText());
    for(var i = 0; i < tweets.length;i++){
        if(tweets[i].text.match(/中山/) ){
        var screen_name = tweets[i].user.screen_name;
        var id_str = tweets[i].id_str;
        var url = "https://twitter.com/"+screen_name+"/status/"+id_str;
        postSlack(url)
      }
    }
}

function postSlack(message){
  var url = "先ほど控えたURL";
  var payload = { "text": message };
  sendHttpPost(url, "payload=" + JSON.stringify(payload));
}
