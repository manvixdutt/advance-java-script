class person{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname=lastname;

 }
}
let p=new person("pal")
console.log("hi",p.firstname

)
class person{
    #firstname
    #lastname
    constructor(firstname,lastname)
    this.#firstname= firstname;
    this.#lastname =lastname

}
onstructor(firstname, lastname)
if(firstname,

){
    this.#firstname = firstname
}
cclass Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    // Getter for firstname
    get firstname() {
        return this.#firstname;
    }

    // Setter for firstname
    set firstname(firstname) {
        this.#firstname = firstname;
    }

    // Getter for lastname
    get lastname() {
        return this.#lastname;
    }

    // Setter for lastname
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        if (firstname.startsWith("hi")) {
            this.#firstname = firstname;
        } else {
            this.#firstname = "hi" + firstname;
        }
        this.#lastname = lastname;
    }

    getFirstName() {
        return this.#firstname;
    }

    setFirstName(firstname) {
        this.#firstname = firstname;
    }

    getLastName() {
        return this.#lastname;
    }

    setLastName(lastname) {
        this.#lastname = lastname;
    }

    getFullName() {
        return ${this.#firstname} ${this.#lastname};
    }
}

let p = new Person("pal", "bhardwaj");

console.log(p.getFirstName());  // Output: "hipal"
console.log(p.getFullName());   // Output: "hipal bhardwaj"
//vehicle
class vehicle{
    constructor(color,currentspeed,maxspeed){
        this.color= color;
        this.currentspeed = currentspeed;
        this.maxspeed = maxspeed;

    }move(){
        console.log("moving at",this.currentspeed)

    }accelarate (amount)
    this.currentspeed += amount;
}class Motocycle extends Vehichle{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel=fuel;
    }
doWheelie(){
    console.log("driving on one wheelie!");
}let motor = new Motocycle("red",0,100,"petrol");
console.log(motor.color); 
console.log(motor.currentSpeed);
console.log(motor.maxSpeed);
console.log(motor.fuel);
motor.accelerate(20);
motor.move();
}
