function submitForm(e){ 
  //全設問一覧を取得
  var itemResponses = e.response.getItemResponses();
  //０個目の設問の回答の取得
  var itemResponse = itemResponses[0].getResponse();

  //ここで何かしらの処理
  //注意：Logger.log()は使えない
}
