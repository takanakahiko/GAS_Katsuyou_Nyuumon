function myFunction(){
  //議事録を作成します
  url = makeMinutes();

  //議事録のURLを表示します
  Logger.log(url);
}
function makeMinutes() {
  //テンプレートのファイルを取得する
  var tempFile = DriveApp.getFileById("さっき覚えておいたID");

  //日付取得
  var dt = new Date();
  var year = dt.getFullYear();
  var month = (("0"+(dt.getMonth()+1)).slice(-2)); //2桁表示へ変換
  var day = (("0"+dt.getDate()).slice(-2)); //同上

  //新しいファイルを日付の名前で作成
  var newfile = tempFile.makeCopy(year+month+day);
  var newfile_id = newfile.getId();

  //dateと書いてある部分を日付に置き換え
  var dateText = year+"/"+month+"/"+day;
  var body = DocumentApp.openById(newfile_id).getBody();
  body.replaceText("date",dateText);

  //urlを返します
  return newfile.getUrl();
}
