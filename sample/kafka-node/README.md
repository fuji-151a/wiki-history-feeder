## kafka-nodeのサンプル
Producer Only  
#### 準備
事前にZookeeperのホストとProduce先のTopic名をコードに記述
```
var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    zkhost = 'localhost:2181', # ここにZookeeperのホストとPortを記述
    client = new kafka.Client(zkhost),
    topic = "topic",           # ここにProduce先のTopic名を記述
    count = 10, rets = 0,
    producer = new HighLevelProducer(client);
```
#### 実行方法  
```
node example.js
```
#### 出力結果
これはKafkaを立てて下記のコマンドを実行.
```
$ $KAFKA_HOME/bin/kafka-console-consumer.sh --topic=topic --zookeeper=$ZK
```
以下の出力結果
```
Sun Aug 30 2015 12:48:50 GMT+0900 (WIT)
Sun Aug 30 2015 12:49:58 GMT+0900 (WIT)
Sun Aug 30 2015 12:49:59 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:00 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:01 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:02 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:03 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:04 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:05 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:06 GMT+0900 (WIT)
Sun Aug 30 2015 12:50:07 GMT+0900 (WIT)
```
みたいな感じで情報が出力される．

もっと詳しい情報は本家[kafka-node](https://github.com/SOHU-Co/kafka-node)を参照
