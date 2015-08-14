var _ = require("lodash");

var template = function (inputvar) {
    _.forEach(inputvar, function (item, key) {
        inputvar[key] = _.sortBy(item, "date");
    });


    var checkdate = function (date) {
        return (new Date(date) - new Date()) < 24 * 60 * 60 * 1000 * 2;
    };

    var mytemplate = '<ul>\n' +
        '<% _.forEach(input, function(todos, name){ %>' +
            '<li><%= name %>\n' +
            '<ul>' +
            '<% _.forEach(todos, function(todo_item){ %>' +
                '<li>' +
                '<% if(checkdate(todo_item.date)) { %><b>URGENT</b> <% } %>' +
                '<%= todo_item.todo %>' +
                '</li>\n' +
            '<% }); %>' +
            '</ul>\n' +
            '</li>\n' +
        '<% }); %>' +
        '</ul>';

    return _.template(mytemplate, {input: inputvar}, { 'imports': { 'checkdate': checkdate } });
};

module.exports = template;