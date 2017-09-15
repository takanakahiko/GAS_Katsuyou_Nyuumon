function myFunction() {
  //変換前と変換後の画像フォルダをそれぞれ取得します。
  var in_folder = DriveApp.getFolderById("XXXXX"); //フォルダAのIDを調べて差し替えてください
  var out_folder = DriveApp.getFolderById("YYYYY"); //フォルダBのIDを調べて差し替えてください

  //変換前の画像を取得します
  var files = in_folder.getFiles();

  //繰り返しで画像を1枚づつ処理します
  while (files.hasNext()) { //まだ処理してない画像があれば繰り返す
    var file = files.next(); //まだ処理してない画像を一枚取得
    var jpeg = file.getAs("image/jpeg").copyBlob(); //画像をjpegへ変換してコピーする
    out_folder.createFile(jpeg); //画像を変換後フォルダーに保存する
 }
}
