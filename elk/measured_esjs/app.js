var elasticsearch = require('elasticsearch');
var client        = new elasticsearch.Client({ host : 'localhost:9200' });

var reporter   = require('measured-elasticsearch').forClient(client);
var measured   = require('measured');
var collection = measured.createCollection();

reporter.addCollection(collection);
reporter.start(60, measured.units.SECONDS);
