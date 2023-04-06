interface ISavingAccount{
    CustId:number
    Custname:string
    balance(amount?:number,interest?:number):void
}
interface ICurrentAccount{
    CustId:number
    Custname:string
    balance(amount?:number,interest?:number):void
}
class Account implements ISavingAccount,ICurrentAccount{
    CustId:number
    Custname:string
    constructor( CustId:number,Custname:string){
            this.CustId=CustId
            this.Custname=Custname
        }
    balance(amount?: number , interest?: number ): void {
        if(amount==0){
            console.log("Get a Job");
        }
        else
        {
            console.log("Do you want a loan");
        }
        
    }
}
var obj:ISavingAccount=new Account(7,'Srikanth');
obj.balance(0);
var obj1:ICurrentAccount=new Account(1,'Darshan');
obj1.balance(100);