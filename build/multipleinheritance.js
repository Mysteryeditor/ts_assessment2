"use strict";
class Account {
    constructor(CustId, Custname) {
        this.CustId = CustId;
        this.Custname = Custname;
    }
    balance(amount, interest) {
        if (amount == 0) {
            console.log("Get a Job");
        }
        else {
            console.log("Do you want a loan");
        }
    }
}
var obj = new Account(7, 'Srikanth');
obj.balance(0);
var obj1 = new Account(1, 'Darshan');
obj1.balance(100);
