"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(ClientName, ClientId, Balance) {
        this.ClientName = ClientName;
        this.ClientID = ClientId;
        this.Balance = Balance;
    }
    Client.prototype.getCashback = function () {
        var cashback;
        if (this.Balance > 15000) {
            cashback = this.Balance * 0.1;
            this.Balance -= cashback;
        }
        return cashback;
    };
    return Client;
}()); // end of class
exports.Client = Client;
var client1 = new Client('Amit', 101, 6850);
var client2 = new Client('Ramesh', 101, 15850);
var cashback = client1.getCashback();
console.log("Cash Back earned :- Client Name " + client1.ClientName + " - " + cashback);
cashback = client2.getCashback();
console.log("Cash Back earned :- Client Name " + client2.ClientName + " - " + cashback);
