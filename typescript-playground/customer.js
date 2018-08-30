"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id, bar) {
        this.id = id;
        this.bar = bar;
    }
    Customer.prototype.myMethod = function (arg) {
        if (typeof arg === 'number') {
            return arg;
        }
        return arg;
    };
    Customer.prototype.foo = function () {
        var _this_1 = this;
        var _this = this;
        var callback = function () {
            return _this.id * 10;
        };
        var callback2 = function () { return _this_1.id * 20; };
        debugger;
        var city = 'Düsseldorf';
        var text = "Hallo in\n" + city + "!";
        console.log(text);
        console.log(callback2());
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map