/* interface User {
    name: string;
    age: number;
    email?: string;
}   

const yarik: User = {
    name: 'Yarik',
    age: 25
}

const printName = (user: User): void => {
    console.log(user.name);
}

printName(yarik); */

/* interface MailRecipient {
    email: string;
    displayName?: string;
    message: string;
}

const sendEmail = (email: MailRecipient): void => {
    console.log(`Hello, ${email.displayName}! Sending email to ${email.email}...`);
    console.log(email.message);
}

const mail: MailRecipient = {
    email: "adasdasd@gmail.com",
    displayName: "Yarik",
    message: "Hello, this is a test email!"
} 

sendEmail(mail);
 */

/* interface ServerConfig {
    readonly host: string;
    readonly port: number;
    status: 'active' | 'inactive';
}

const config: ServerConfig = {
    port: 3000,
    host: 'localhost',
    status: 'active'
}

config.status = 'inactive'; // Error: Type '"stopped"' is not assignable to type '"active" | "inactive"'. */

/* type Status = 'sucess' | 'error' | 'loading';

const status: Status = 'sucess'; // Valid */

/* interface Vehicle {
    brand: string;
    speed: number;
    isSupercar?: boolean;
}

interface Car extends Vehicle {
    isCabriolet: boolean;
}

interface Truck extends Vehicle {
    cargoCapacity: number;
}

const test1: Truck = {
    brand: 'Audi',
    speed: 300,
    isSupercar: false,
    cargoCapacity: 2000,
}
 */

/* type UserName = string | null

interface UserInDb {
    name: UserName;
}

const user: UserInDb = {
    name: "Yarik"
};

user.name = null */