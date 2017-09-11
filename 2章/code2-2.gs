function myFunction(){
  //2017年10月22日に"技術書典3"というイベントを登録
  createCalender( "技術書典3", 2017, 10, 22 );
}
function createCalender(title,year,month,day) {
  //カレンダーID(詳細下記)からカレンダーを取得します
  var calendar = CalendarApp.getCalendarById("xxxxxxx@gmail.com");

  //日付をDateクラスにします(月の計算は注意)
  var date = Date(year,month-1,day);

  //カレンダー内に終日の予定を作成します
  calendar.createAllDayEvent(title,date);
}
