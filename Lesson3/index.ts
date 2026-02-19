/* class User {
    name: string;
    age: number;

    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    greet() {
        console.log(`Привет, я ${this.name}, мне ${this.age} лет.`);
    }
}

const alex = new User('Alex', 25);
const vika = new User('Vika', 19);

alex.greet();
vika.greet();   */

/* class BankAccount { 
    private balance: number;
    private owner: string;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log('Недостаточно средств на счете.');
        } else {
            this.balance -= amount;
        }
    }
}

const myAccount = new BankAccount('Yarik', 1000);
console.log(myAccount.getBalance());
myAccount.deposit(500);
console.log(myAccount.getBalance());
myAccount.withdraw(200);
console.log(myAccount.getBalance());
myAccount.withdraw(1500);
console.log(myAccount.getBalance());


class BankAccount {
    private balance: number;
    private owner: string;  

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }
    getBalance(): number {
        return this.balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }   
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log('Недостаточно средств на счете.');
        } else {
            this.balance -= amount;
        }
    }
} */