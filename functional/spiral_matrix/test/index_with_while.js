var _ = require('ramda');

var BASE_RESULT = [];

function generateMatrix(n) {
var total = n*n;

    for(var i=0;i<n;i++) {
        _.reduce(BASE_RESULT.push([]));
    }

    var x=0;
    var y=0;
    var step = 0;

    for(var i=0;i<total;){
        while(y+step<n){
            i++;
            BASE_RESULT[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            BASE_RESULT[x][y]=i;
            x++;
        }
        x--;
        y--;

        while(y>=step){
            i++;
            BASE_RESULT[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            BASE_RESULT[x][y]=i;
            x--;
        }
        x++;
        y++;
    }

    return BASE_RESULT;
}

console.log(generateMatrix(5));
