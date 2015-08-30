require('date-utils');
var opts = require('opts');
opts.parse([
    {
        'short': 'zk',
        'long': 'zookeeper',
        'description': 'zookeeper host and port',
        'value': true,
        'required': true
    },
    {
        'short': 't',
        'long': 'topic',
        'description': 'kafka topic name',
        'value': true,
        'required': true
    }
]);

// コマンドライン引数受け取り.
var zkhost = opts.get('zookeeper');
var topic = opts.get('topic');

// kafka producerの設定.
var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(zkhost),
    producer = new HighLevelProducer(client);

// wikichangesの読み込み.
var wikichanges = require("wikichanges");

// Dateフォーマットの指定.
var dt = new Date();
var formatted = dt.toFormat("YYYY-MM-DDTHH24:MI:SS");

w = new wikichanges.WikiChanges({
  ircNickname: 'wiki_history_feeder',
  wikipedias: ["#ja.wikipedia"]
});
w.listen(function(change) {
    change["serverCreateAt"] = formatted;
    var json_data = JSON.stringify(change);
    send(json_data);
});

/**
 * Producer:MessageをBrokerに送信する関数.
 * @param msg:送信したいMessage.
 */
function send(msg) {
    producer.send([
      {topic: topic, messages: [msg] }
    ], function (err, data) {
        if (err) {
            console.log(err);
            process.exit();
        }
    });
}