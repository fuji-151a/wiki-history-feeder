# wiki-history-feeder
Wikipediaの編集履歴をKafkaにProduceするためのFeeder.

### 使用ツール
- node.js
- kafka-node
- wikichanges
- opts
- date-utils

### 実行方法
```
$ node wiki_history_feeder.js --topic <topic name> --zookeeper <zookeeper host and port>
```
オプションの--topicは-tに--zookeeperは-zkに省略可能．

Kafkaに以下のような情報がProduceされる．
```
{"channel":"#ja.wikipedia","flag":"","page":"パンドラの塔 君のもとへ帰るまで","pageUrl":"http://ja.wikipedia.org/wiki/パンドラの塔_君のもとへ帰るまで","url":"https://ja.wikipedia.org/w/index.php?diff=56682609&oldid=56523387","delta":0,"comment":"/* 登場人物 */","wikipedia":"Japanese Wikipedia","wikipediaUrl":"http://ja.wikipedia.org","wikipediaShort":"ja","wikipediaLong":"Japanese Wikipedia","user":"Yamayamada","userUrl":"http://ja.wikipedia.org/wiki/User:Yamayamada","unpatrolled":false,"newPage":false,"robot":false,"anonymous":false,"namespace":"article","serverCreateAt":"2015-08-30T21:33:02"}
...以下同様なJSON
```
なお独自にserverCreateAtという要素を追加している．　　
これはProduceする直前に作成されたDateTimeである．  
限りなく編集の変更時間に近いがwikchangesの情報が遅延する場合には頼りにならない情報であるため，あまりこれを用いてなにかシステムを作るのは良くない．
