/*
wikichangesのSample
https://github.com/edsu/wikichanges
Wikipediaの日本語版の編集履歴を取得し出力.
*/

var wikichanges = require("wikichanges");

w = new wikichanges.WikiChanges({
  ircNickname: 'wikidatachangestest',
  wikipedias: ["#ja.wikipedia"]
});
w.listen(function(change) {
  console.log(JSON.stringify(change));
});
