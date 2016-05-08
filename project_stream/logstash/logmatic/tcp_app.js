var winston = require('winston');
              require('winston-logstash');

var logger = new (winston.Logger)({
  transports: [
       new (winston.transports.Logstash)({
           port: 10514,
           host: 'api.logmatic.io',
           max_connect_retries: 1,
           meta: {logmaticKey:""},
           node_name: 'my node name',
       })
  ]
});

logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue', geo: {country:'France',city: "Paris"} });
