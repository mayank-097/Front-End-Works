export class Client{
    ClientName : string;
    ClientID : number;
    Balance : number;

    constructor(ClientName:string,ClientId:number,Balance:number)
    {
        this.ClientName=ClientName;
        this.ClientID=ClientId;
        this.Balance=Balance;

    }

    getCashback():number
    {
        let cashback:number;

        if(this.Balance>15000)
        {
            cashback=this.Balance*0.1;
            this.Balance-=cashback;
        }

        return cashback;
    }
}// end of class

let client1 = new Client('Amit',101,6850);
let client2 = new Client('Ramesh',101,15850);

var cashback = client1.getCashback();
console.log("Cash Back earned :- Client Name "+client1.ClientName+" - "+cashback);
cashback = client2.getCashback();
console.log("Cash Back earned :- Client Name "+client2.ClientName+" - "+cashback);
