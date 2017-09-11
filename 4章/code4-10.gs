var maxSize = 320000; //画像サイズの最大値を指定する

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
    var new_file = out_folder.createFile(jpeg); //画像を変換後フォルダーに保存する
    resizeImage(out_folder, new_file);
 }
}

function resizeImage(folder, file){
  //ファイルのBlobデータとID、名前を取得する
  var source_blob = file.getBlob();
  var source_id = file.getId();
  var source_name = file.getName();

  //サイズを取得して、ピクセル数を求める
  var size = ImgApp.getSize(source_blob);
  var pixel_number = size.width * size.height;

  //ピクセル数が一定値を超えていたらリサイズ
  if(pixel_number > maxSize){
    //リサイズする比率とリサイズ後の横幅を設定する
    var ratio = maxSize / pixel_number;
    var setting_width = parseInt(size.width * ratio)
    var result = ImgApp.doResize(source_id , setting_width);
    folder.createFile(result.blob.setName(source_name));
    folder.removeFile(file);
  }
}
