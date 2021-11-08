import {Client} from './Client';

class RuralClient extends Client
{
    villageName :string;

    constructor(clientName:string,clientId:number,balance:number,villageName:string)
 {
    super(clientName,clientId,balance);
    this.villageName = villageName;
    
 }
  fundTransfer():number
  {
    
     let fund :number;
     fund = this.Balance*0.1;
     this.Balance-=fund;
    return fund;

  }

}

let rural1 = new RuralClient("Mayank",101,100000,"muradnagar");
let rural2 = new RuralClient("Abhay",102,50000,"meerut");

var fund = rural1.fundTransfer();
console.log("Fund Successfully Tranfered : "+fund+" reamining balance : "+rural1.Balance);
fund = rural2.fundTransfer();
console.log("Fund Successfully Tranfered : "+fund+" reamining balance : "+rural2.Balance);