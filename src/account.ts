export class Account {

    private _type: string;
    private _balance: number;

    constructor(_type: string) {
        this._type = _type;
        this._balance = 0; // we zetten de standaard waarde van de balance op 0
    }

    get type() {
        return this._type;
    }

    get balance() {
        return this._balance;
    }

    withdraw(minNumber: number) : void {
        // Guard classes => eerst alle foutieve mogelijkheden uitsluiten
        if(minNumber<=0){
            throw new Error("Please supply a positive, non-zero amount");
        }
        
        if(this._type=="savings" && minNumber > this._balance){
            throw new Error("You cannot have a amount lower than a zero balance");
        }

        this._balance -= minNumber;
    }

    deposit(plusNumber: number) : void {

        if(plusNumber<=0){
           throw new Error("Please supply a positive, non-zero amount");
        }

        this._balance += plusNumber;
    }
}