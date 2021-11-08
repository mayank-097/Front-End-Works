"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.arr = [];
    }
    // to communicate with Spring boot Rest Web Service (API)
    ProductService.prototype.getAllProducts = function () {
        // REST API 
        return this.arr;
    };
    // ...../{gender}
    ProductService.prototype.getProductsBasedOnCost = function () {
        var spearr = [];
        for (var i in this.arr) {
            if (this.arr[i].cost > 10000) {
                spearr.push(this.arr[i]);
            }
        }
        return spearr;
    };
    //  post api
    ProductService.prototype.addProduct = function (product) {
        console.log("adding");
        this.arr.push(product);
        console.log(this.arr);
    };
    return ProductService;
}());
exports.ProductService = ProductService;
