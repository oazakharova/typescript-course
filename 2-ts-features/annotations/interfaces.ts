interface Car {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // функция
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `This is a ${this.year} ${this.name}. It's ${this.broken? 'broken' : 'working fine'}`;
  },
};

const printCar = (car: { name: string; year: number; broken: boolean  }): void => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  car.broken ? console.log('This car is broken!') : console.log('This car is working fine!');
};

const printCar2 = (car: Car): void => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  car.broken ? console.log('This car is broken!') : console.log('This car is working fine!');
};

printCar(oldCivic);
printCar2(oldCivic);