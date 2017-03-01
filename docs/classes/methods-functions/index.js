class Animal{
    constructor(voice, speed){
        this._voice = voice;
        this._speed = speed;

    }
    get speak(){
        return this._voice;
    }
    get speed(){
        return this._speed;
    }
    set speed(speed){
        this._speed = speed;
    }
}

class Dog extends Animal{
    constructor(speed){
        super("bow wow", speed);
    }
    bark(){
        return this._voice;
    }
    fight(){
        return 'STOP MICHAEL VICK!!!!';
    }
    taunt(){
        return 'I am gonna get your ass mr. postman!';
    }
}
class Cat extends Animal{
    constructor(speed) {
        super("meow", speed);
    }
    meow() {
        return this._voice;
    }
    fight(){
        return 'YOU BETTER RUN JERRY TOM IS COMING!!!!';
    }
}
const Lassy = new Dog(100);
const GrummpyCat = new Cat(200);

console.log(Lassy);
console.log(Lassy.bark());
console.log(GrummpyCat.speed);
console.log(GrummpyCat.meow());
console.log(Lassy.fight());
console.log(GrummpyCat.fight());
console.log(Lassy.taunt());
