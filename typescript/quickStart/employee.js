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
    return Employee;
}());

var emp = new Employee("E001", "Alex", 10000);
emp.Name = "Alisa";

console.log(emp.getDetails());
console.log(emp.Bonus);
