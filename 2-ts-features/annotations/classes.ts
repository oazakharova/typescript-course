class Car {
  // color: string = 'green'; // green color by default

  constructor(public color: string) {}; // сокращенная инициализация поля

  // полная версия
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // };

  // drive(): void {
  //   console.log('Car is driving...');
  // }

  protected beep() {
    console.log('Beep beep!');
  };

  stop(): void {
    console.log('Car is stopping...');
  };
};

class Auto extends Car {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('This is an auto and it is driving...');
  };

  startDrivingProccess(): void {
    this.drive();
    this.beep();
  };
};

const car = new Auto(4, 'orange');
// car.drive();
// car.startDrivingProccess();
// car.stop();