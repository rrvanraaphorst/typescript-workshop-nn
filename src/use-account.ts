import { Account } from "./account";

let account = new Account('savings');

console.log(`Account type: ${account.type}`);
console.log(`Account balance: ${account.balance}`);

try {
    account.deposit(0);
    console.log(`Account balance after deposit: ${account.balance}`);
} catch (error) {
    console.log(error.message);
}

try {
    account.withdraw(0);
    console.log(`Account balance after withdrawal: ${account.balance}`);
} catch (error) {
    console.log(error.message);
}



