var Square = (function () {
    function Square(length) {
        this.length = length;
    }
    Object.defineProperty(Square.prototype, "Length", {
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    Square.prototype.area = function () {
        return this.length * this.length;
    };
    return Square;
}());
var Rectangle = (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var square = new Square(10);
var rectangle = new Rectangle(10, 20);
console.log(square.area());
console.log(rectangle.area());
var squareObj = square;
console.log(squareObj.Length);
