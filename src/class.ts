abstract class Customer {
   public CustomerName:string;
    public Age: number;
   public Address: string;
    public ContactNumber: number;
    
    
    constructor(CustomerName: string, Age: number, Address: string, ContactNumber: number) {
        this.CustomerName = CustomerName
        this.Age = Age
        this.Address = Address
        this.ContactNumber = ContactNumber
    }
    public abstract Display(): any
}
class Loan extends Customer {
   
    LoanAccountNo: number
    LoanType: String
    LoanAmount: number
    Duration: number
    InterestRate: number
    constructor(CustomerName: string, Age: number, Address: string, ContactNumber: number, LoanAccountNo: number, LoanType: string, LoanAmount: number, Duration: number
        , InterestRate: number) {
        super(CustomerName, Age, Address, ContactNumber);
        this.LoanAccountNo = LoanAccountNo
        this.LoanType = LoanType
        this.LoanAmount = LoanAmount
        this.Duration = Duration
        this.InterestRate = InterestRate

    }
     interestcalc(Duration:number,InterestRate:number,LoanAmount:number):void
     {
         LoanAmount=LoanAmount+(Duration*InterestRate);
        
        console.log(LoanAmount);
    }
     public Display():any {
       
         console.log('Customer Name:'+this.CustomerName+' Age:'+this.Age+'Amount:'+this.LoanAmount)
         this.interestcalc(3,7,40000)
     }
  
}
var call=new Loan("Srikanth",20,"cbe",9952410021,1200,'Personal',40000,3,7)
call.Display()
// call.interestcalc()
