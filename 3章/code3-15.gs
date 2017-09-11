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
