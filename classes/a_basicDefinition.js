//Constructor: A special method for creating and initializing objects created with a class.
//Methods: Actions that can be performed on objects.
//Inheritance: Allows you to create a class as a "child" of another class.
//Static Methods: Methods that are called on the class itself, not on instances of the class.


class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`This is a ${this.brand} ${this.model}.`);
    }
  }
  
  const myCar = new Car("Tesla", "Model S");
  myCar.displayInfo(); // Output: This is a Tesla Model S.