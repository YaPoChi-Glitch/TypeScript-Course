interface User {
    name: string;
    age: number;
    email?: string; 
}

const yarik: User = {
    name: 'Yarik',
    age: 25
};

interface ChangerRub {
    rate?: number;
    rubs: number;
}

const convertRubToUsd = (obj: ChangerRub): number | string => {
    if (!obj.rate) {
        return "Error: Нет курса валют!";
    }
    return obj.rubs / obj.rate;
};

interface Vehicle {
    brand: string;
    speed: number;
    isSupercar?: boolean;
}

interface Truck extends Vehicle {
    cargoCapacity: number;
}

const myTruck: Truck = {
    brand: 'Volvo',
    speed: 120,
    isSupercar: false,
    cargoCapacity: 5000
};