var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
       new (winston.transports.File)({
           name: 'info-file',
           filename: 'filelog-info.log',
           level: 'info'
           })
    ]
});

logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue' });
