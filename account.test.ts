import { expect, test, describe } from 'vitest';
import { Account } from './src/account';

describe('Deposit testcases', () => {

    test('Deposit', () :void =>{
        let account:Account = new Account('checking');

        account.deposit(10);

        expect(account.balance).toEqual(10);
    });

    test('Create savings account and deposit money into account', () :void =>{
        let account:Account = new Account('savings');

        account.deposit(10);
        account.withdraw(5);

        expect(account.balance).toEqual(5);
    });
    
    test('Deposit negative value to savings account throws error', () :void =>{
        let account:Account = new Account('savings');

        expect(()=>account.deposit(-5)).toThrowError('Please supply a positive, non-zero amount');
        // tijdens het aanroepen van de method wordt het error object geretourneerd/
        // als je het als volgt zou noteren: expect(account.deposit(-5)).toThrowError('Please supply a positive, non-zero amount'); 
        // voert TS de functie direct uit en wordt een null waarde geretourneerd omdat ik heb aangegeven dat de method een void teruglevert in account.ts.
    });

});