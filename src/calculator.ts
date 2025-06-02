export class Calculator {


    private _total: number;

    constructor() {
        this._total = 0; // we zetten de standaard waarde van de calculator op 0
    }

    get total(){
        return this._total;
    }

    add(numberToAdd: number){
        this._total += numberToAdd;
    }

    divide(numberToDivedBy: number){
        if(numberToDivedBy == 0){
            "Geef een hoger getal op dan 0";
        }else{
            this._total /= numberToDivedBy;
        }
    }
}