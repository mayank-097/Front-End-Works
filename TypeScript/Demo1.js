"use strict";
exports.__esModule = true;
// let a="nikhil bhai";
// console.log("typeScript output is ..."+a);
var MyApp = /** @class */ (function () {
    function MyApp() {
    }
    MyApp.prototype.doThings = function (a, b) {
        console.log("sum is" + (a + b));
    };
    return MyApp;
}());
var obj = new MyApp();
obj.doThings(15, 83);
