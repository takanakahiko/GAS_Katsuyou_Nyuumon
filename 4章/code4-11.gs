var maxSize = 320000; //画像サイズの最大値を指定する

function myFunction() {
  var in_folder = DriveApp.getFolderById("XXXXX"); //フォルダAのID
  var out_folder = DriveApp.getFolderById("YYYYY"); //フォルダBのID

  var files = in_folder.getFiles();

  while (files.hasNext()) {
    var file = files.next();
    var jpeg = file.getAs("image/jpeg").copyBlob();
    var new_file = out_folder.createFile(jpeg);
    resizeImage(out_folder, new_file);
  }
}

function resizeImage(folder, file){
  var source_blob = file.getBlob();
  var source_id = file.getId();
  var source_name = file.getName();

  var size = ImgApp.getSize(source_blob);
  var pixel_number = size.width * size.height;

  if(pixel_number > maxSize){
    var ratio = maxSize / pixel_number;
    var setting_width = parseInt(size.width * ratio)
    var result = ImgApp.doResize(source_id , setting_width);
    folder.createFile(result.blob.setName(source_name));
    folder.removeFile(file);
  }
}
