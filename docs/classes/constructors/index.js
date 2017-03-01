export class Vehicle {
    constructor(engineType, numberOfDoors, make) {
        this._engineType = engineType;
        this._numberOfDoors = numberOfDoors;
        this._make = make;
    }
    get engineType() {
        return this._engineType;
    }
    get numberOfDoors() {
        return this._numberOfDoors;
    }
    get make() {
        return this._make;
    }
    set engineType(enginetype) {
        this._engineType = engineType;
    }
    set numberOfDoors(numberOfDoors) {
        this._numberOfDoors = numberOfDoors;
    }
    set make(make) {
        this._make = make;
    }
}

export class Truck extends Vehicle {
    constructor(make) {
        super('V8', 2, make);
    }
}

export class Car extends Vehicle {
    constructor(make) {
        super('V4', 4, make);
    }
}

export const F150 = new Truck('Ford');
export const Prius = new Car('Toyota');

