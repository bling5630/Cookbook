var _ = require('ramda');

/*
// version_1

const lineWidth = settings.lineWidth || 80;
*/

const lineWidth = defaultTo(80, settings.lineWidth);
