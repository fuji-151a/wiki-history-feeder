/*
kafka-nodeのsample code
Dateがcount分produceされるcode.
詳しくは本家へ.
https://github.com/SOHU-Co/kafka-node
*/
var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    zkhost = 'localhost:2181',
    client = new kafka.Client(zkhost),
    topic = "topic",
    count = 10, rets = 0,
    producer = new HighLevelProducer(client);

producer.on('ready', function () {
    setInterval(send, 1000);
});

producer.on('error', function (err) {
    console.log('error', err);
});

function send() {
    var message = new Date().toString();
    producer.send([
      {topic: topic, messages: [message] }
    ], function (err, data) {
        if (err) console.log(err);
        else console.log('send %d messages', ++rets);
        if (rets === count) process.exit();
    });
}