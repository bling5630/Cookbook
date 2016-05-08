var winston = require('winston');
              require('winston-logstash');

var logger = new (winston.Logger)({
  transports: [
       new (winston.transports.Logstash)({
           port: 10514,
           name: 'info-file',
           filename: 'filelog-info.log',
           level: 'info',
           host: 'afternoon-stream-64564.herokuapp.com',
           node_name: 'my node name',
       })
  ]
});

logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue', geo: {country:'France',city: "Paris"} });
