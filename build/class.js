"use strict";
class Customer {
    constructor(CustomerName, Age, Address, ContactNumber) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
}
class Loan extends Customer {
    constructor(CustomerName, Age, Address, ContactNumber, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        super(CustomerName, Age, Address, ContactNumber);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.InterestRate = InterestRate;
    }
    interestcalc(Duration, InterestRate, LoanAmount) {
        LoanAmount = LoanAmount + (Duration * InterestRate);
        console.log(LoanAmount);
    }
    Display() {
        console.log('Customer Name:' + this.CustomerName + ' Age:' + this.Age + 'Amount:' + this.LoanAmount);
        this.interestcalc(3, 7, 40000);
    }
}
var call = new Loan("Srikanth", 20, "cbe", 9952410021, 1200, 'Personal', 40000, 3, 7);
call.Display();
// call.interestcalc()
