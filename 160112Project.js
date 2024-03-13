/* Part One: Create a class for vehicle. Each vehicle instance should have the following properties:
- make
- model
- year
Each vehicle instance should have access to a method called ***honk***, which returns the string “Beep.”*/

class Vehicle{
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        return 'Beep';
    }
    toString(){
        return `The vehicle is a ${a} ${b} from ${c}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

/*Part Two: Create a class for a car. The Car class should inherit from Vehicle and each car instance should have 
a property called numWheels which has a value of 4.*/

class Car extends Vehicle{
    constructor(a,b,c){
        super(a,b,c);
    }
    numWheels(){
        return 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;

/*Part Three: Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle 
instance should have a property called numWheels which has a value of 2. It should also have a revEngine 
method which returns “VROOM!!!”*/

class Motorcycle extends Vehicle{
    constructor(a,b,c){
        super(a,b,c);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return "VROOOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "NightHawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels();

/*Part Four: Create a class for a Garage. It should have a property called ***vehicles*** which will store 
an array of vehicles, and a property called ***capacity*** which is a number indicating how many vehicles 
will fit in the garage. When you create a garage, ***vehicles*** will always be empty; you only need to 
provide the ***capacity***.

A garage should also have an ***add*** method, which attempts to add a vehicle to the array of vehicles. 
However, if you try to add something which is *not* a vehicle, the garage should return the message “Only 
vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”*/

class Garage{
    constructor(a){
        this.capacity = a;
        this.vehicles = [];
    }
    add(addVehicle){
        if(!(addVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(addVehicle);
        return "Vehicle added!";
    }
}

let garage = new Garage(2);
garage.vehicles;
garage.add(new Car("hyundai", "Elantra", 2015));
garage.vehicles;
garage.add("Taco");
garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage.vehicles;
gagage.add(new Motorcycle("Honda", "Nighthawk", 2001));

