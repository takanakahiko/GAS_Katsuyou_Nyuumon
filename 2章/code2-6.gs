function myFunction(){

  //送信先のメールアドレスを指定します
  var recipient = "xxxxxxx@xxxxx.xxxx";

  //題名を指定します
  var subject = "テストメールです";

  //本文を指定します(改行は\nで行います)
  var body = "こんにちは！\n現在の時刻は" + new Date() + "です";

  //メールを送信します
  GmailApp.sendEmail(recipient, subject, body);
}
