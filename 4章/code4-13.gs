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

//エンドポイント共通のURL部分を指定
var twitter_base_url = 'https://api.twitter.com/1.1/';

//twitterAPIにPOSTアクセスをする関数
function postAccessTwitter(endPoint, payload){
  var service = getTwitterService();
  var payload_str = payloadToString(payload);
  var options = {method:'post', escaping:false, payload:payload_str};
  var url = twitter_base_url+endPoint+'.json';
  return service.fetch(url, options)
};

//twitterAPIにGETアクセスをする関数
function getAccessTwitter(endPoint, payload){
  var service = getTwitterService();
  var payload_str = payloadToString(payload);
  var options = { method:'get', escaping:false};
  var url = twitter_base_url+endPoint+'.json';
  if( payload_str.length>0 ) url += '?'+payload_str;
  return service.fetch(url, options)
};

//payloadのデータを送信用の文字列にする関数
function payloadToString(payload){
  return Object.keys(payload).map(function(key) {
    return encodeToRfc3986(key)+'='+encodeToRfc3986(payload[key]);
  }).join('&');
}

//Rfc3986という形式に変換する関数
function encodeToRfc3986(str) {
  return encodeURIComponent(str).replace(/[!'()]/g, function(char) {
    return escape(char);
  }).replace(/\*/g, "%2A");
}
