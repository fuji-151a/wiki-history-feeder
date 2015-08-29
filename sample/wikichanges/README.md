## wikichangesのサンプル
実行方法
```
node example.js
```
出力結果
```
{
    "anonymous": true, 
    "channel": "#ja.wikipedia", 
    "comment": "/* あ行 */", 
    "delta": 30, 
    "flag": "", 
    "namespace": "article", 
    "newPage": false, 
    "page": "言語学者の一覧", 
    "pageUrl": "http://ja.wikipedia.org/wiki/言語学者の一覧", 
    "robot": false, 
    "unpatrolled": false, 
    "url": "https://ja.wikipedia.org/w/index.php?diff=56673174&oldid=55571975", 
    "user": "182.164.9.64", 
    "userUrl": "http://ja.wikipedia.org/wiki/User:182.164.9.64", 
    "wikipedia": "Japanese Wikipedia", 
    "wikipediaLong": "Japanese Wikipedia", 
    "wikipediaShort": "ja", 
    "wikipediaUrl": "http://ja.wikipedia.org"
}
```
みたいな感じで情報がストリームで出力される．

もっと詳しい情報は本家[wikichanges](https://github.com/edsu/wikichanges)を参照
