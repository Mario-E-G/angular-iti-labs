import users from "./users.json";
import { User } from "./user";
//1
users
  .sort((curr, next) => curr.username.localeCompare(next.username))
  .forEach((user) => console.log(user.username));
// console.log(users);

//2
const locate = () =>
  users.filter(
    (user) =>
      user.address.geo.lat <= "-37.1496" &&
      user.address.geo.lat >= "-68.6102" &&
      user.address.geo.lng <= "81.1496" &&
      user.address.geo.lng >= "62.5342"
  );

// let x: any = "5";
// let y: any = 5;
// console.log(x == y);

let arrOfUsers = locate();
// console.log(arrOfUsers);
// console.log(parseFloat(users[0].address.geo.lat));

//3
function getUrl2(usrArr: User[]): string[] {
  return usrArr.map(
    (user) =>
      `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`
  );
}

function getUrl(usersArr: any): string[] {
  let usersUrls = [];
  for (const user of usersArr) {
    let usr = { ...user.address.geo };
    usersUrls.push(`https://maps.google.com/?q=${usr.lat},${usr.lng}`);
  }
  return usersUrls;
}
let urls = getUrl(users);
console.log(urls);

class Person {
  private _name!: string;
  address: string;
  pNumber: number | undefined;
  email: string;

  constructor(name: string, address: string, pNumber: number, email: string) {
    this.name = name;
    this.address = address;
    this.pNumber = pNumber;
    this.email = email;
  }
  set name(name: string) {
    if (name == "Ahmed") throw new Error("this name is invalid");
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  public toString = (): string => {
    return `Person ${this._name}`;
  };
}

const enum Status {
  FRESHMAN,
  SOPHOMORE,
  JONIUR,
  SENIOR,
}

class Student extends Person {
  stat: Status;
  constructor(
    stat: Status,
    name: string,
    address: string,
    pNumber: number,
    email: string
  ) {
    super(name, address, pNumber, email);
    this.stat = stat;
    // this.stat = Status.JONIUR;
  }

  public toString = (): string => {
    return `Student ${this.name}`;
  };
}

class Employee extends Person {
  office: string;
  salary: number;
  dateHiring: string;

  constructor(
    office: string,
    salary: number,
    date: string,
    name: string,
    address: string,
    pNumber: number,
    email: string
  ) {
    super(name, address, pNumber, email);
    this.office = office;
    this.salary = salary;
    this.dateHiring = date;
  }
  public toString = (): string => {
    return `Employee ${this.name}`;
  };
}

class Faculty extends Employee {
  office_hour: number;
  rank: string;
  constructor(
    office_hour: number,
    rank: string,
    office: string,
    salary: number,
    date: string,
    name: string,
    address: string,
    pNumber: number,
    email: string
  ) {
    super(office, salary, date, name, address, pNumber, email);
    this.office_hour = office_hour;
    this.rank = rank;
  }
  public toString = (): string => {
    return `Faculty ${this.name}`;
  };
}

class Staff extends Employee {
  title?: string;

  constructor(
    title: string,
    office: string,
    salary: number,
    date: string,
    name: string,
    address: string,
    pNumber: number,
    email: string
  ) {
    super(office, salary, date, name, address, pNumber, email);
    this.title = title;
  }
}

const p1 = new Person("Mario", "Assiut", 120254, "mario@gmail.com");
console.log(p1.toString());

const s1 = new Student(1, "Ali", "Cairo", 1236514, "mario@gmail.com");
console.log(s1.toString());

const e1 = new Employee(
  "mktb",
  2000,
  "12-06-2011",
  "Omar",
  "Alex",
  25394,
  "omar@gmail.com"
);
console.log(e1.toString());

const f1 = new Faculty(
  13,
  "intermediate",
  "mktb2",
  5000,
  "16-9-2005",
  "Assiut",
  "Aswan",
  361144,
  "mark@gmail.com"
);
console.log(f1.toString());

const st1 = new Staff(
  "Senior",
  "mktb3",
  6000,
  "14-5-1998",
  "islam",
  "mansoura",
  12562145,
  "islam@gmail.com"
);
console.log(st1.toString());

class GeometricObject {
  color: string = "white";
  filled: boolean = false;
  dateCreated!: Date;
  // GeometricObject();

  constructor(color: string, filled: boolean) {
    this.color = color;
    this.filled = filled;
  }
  getColor(): string {
    return this.color;
  }
  setColor(color: string): void {
    this.color = color;
  }
  isFilled(): boolean {
    return this.filled;
  }

  setFilled(filled: boolean): void {
    this.filled = filled;
  }
  getDateCreated(): Date {
    return this.dateCreated;
  }
  toString(): string {
    return `GeometricObject default color is ${this.color}`;
  }
}

class Circle extends GeometricObject {
  radius!: number;

  constructor(radius: number, color: string, filled: boolean) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  getDiameter(): number {
    return 2 * this.radius;
  }
  printCirlce(): void {
    console.log("Circle");
  }
}

class Rectangle extends GeometricObject {
  width: number;
  height: number;

  constructor(width: number, height: number, color: string, filled: boolean) {
    super(color, filled);
    this.width = width;
    this.height = height;
  }
  getWidth(): number {
    return this.width;
  }
  setWidth(width: number): void {
    this.width = width;
  }
  getheight(): number {
    return this.height;
  }
  setheight(height: number): void {
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * this.height * this.width;
  }
}
