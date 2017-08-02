var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nonEnumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this.fullName; },
        set: function (val) {
            this.fullName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return 20;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        nonEnumerable
    ], Person.prototype, "name");
    return Person;
}());
var p = new Person();
for (var prop in p) {
    console.log(prop);
}
