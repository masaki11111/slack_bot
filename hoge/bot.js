var slack_token = 'xoxp-709026611472-709026612176-813226162231-79227b0bde3de51eaddbff11e8601715';
function test() {
  var slackApp = SlackApp.create(slack_token);
  // 対象チャンネル
  var channelId = "#random";
  // 投稿するメッセージ
  
  var message = getTasks();
　//リンクのプレビューを表示させる（これがないと，URLしか表示されない）
  //詳細は公式ドキュメントへ（https://api.slack.com/methods/chat.postMessage）
  var options = {"unfurl_links": true
  }
  slackApp.postMessage(channelId, message, options);
}

function getTasks(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  //2行目～最終行の間で、ランダムな行番号を算出する
  var row = Math.ceil(Math.random() * (lastRow));  
  //ランダムに算出したURLを取得
  return sheet.getRange(row,1).getDisplayValue();
  //return sheet.getRange(1,1,sheet.getLastRow()-1,1).getValues();
}
