class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  static isCar(obj) {
    return obj instanceof Car;
  }
}

const myCar = new Car("Tesla", "Model 3");
console.log(Car.isCar(myCar));  // Output: true
console.log(Car.isCar({}));     // Output: false
