var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = (function () {
    function Employee(empNo, name, salary) {
        this.empNo = empNo;
        this.name = name;
        this.salary = salary;
        this.bonus = this.salary * 0.1;
    }
    Employee.prototype.getDetails = function () {
        return "Employee number is " + this.empNo + " and name is " + this.name;
    };
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Bonus", {
        get: function () {
            return this.bonus;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(empNo, name, salary, noOfReportees) {
        var _this = _super.call(this, empNo, name, salary) || this;
        _this.noOfReportees = noOfReportees;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        var details = _super.prototype.getDetails.call(this);
        return details + " and has " + this.noOfReportees + " reportees.";
    };
    return Manager;
}(Employee));
