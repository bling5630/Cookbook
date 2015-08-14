var _ = require("lodash");

var qcheck = function (orders) {

    var list = [],
        total = 0;

    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function (item, key) {

        key = parseInt(key);
        total = 0;

        if (item.length === 1) {
            total = item[0].quantity;

        } else {
            total = _.reduce(item, function(sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        list.push({
            article: key,
            total_orders: total
        });

    });

    list = _.sortBy(list, "total_orders").reverse();

    return list;
};

module.exports = qcheck;