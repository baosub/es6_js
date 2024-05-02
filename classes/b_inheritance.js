class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    honk() {
      console.log("Beep beep!");
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model) {
      super(brand); // Call the parent class constructor
      this.model = model;
    }
  
    displayInfo() {
      console.log(`This is a ${this.brand} ${this.model}.`);
    }
  }
  
  const myCar = new Car("Tesla", "Model X");
  myCar.honk();       // Output: Beep beep!
  myCar.displayInfo(); // Output: This is a Tesla Model X.
  