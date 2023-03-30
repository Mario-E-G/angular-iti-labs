"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_json_1 = __importDefault(require("./users.json"));
//1
users_json_1.default
    .sort((curr, next) => curr.username.localeCompare(next.username))
    .forEach((user) => console.log(user.username));
// console.log(users);
//2
const locate = () => users_json_1.default.filter((user) => user.address.geo.lat <= "-37.1496" &&
    user.address.geo.lat >= "-68.6102" &&
    user.address.geo.lng <= "81.1496" &&
    user.address.geo.lng >= "62.5342");
let x = "5";
let y = 5;
console.log(x == y);
let arrOfUsers = locate();
// console.log(arrOfUsers);
// console.log(parseFloat(users[0].address.geo.lat));
//3
function getUrl2(usrArr) {
    return usrArr.map((user) => `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`);
}
function getUrl(usersArr) {
    let usersUrls = [];
    for (const user of usersArr) {
        let usr = Object.assign({}, user.address.geo);
        usersUrls.push(`https://maps.google.com/?q=${usr.lat},${usr.lng}`);
    }
    return usersUrls;
}
let urls = getUrl(users_json_1.default);
console.log(urls);
class Person {
    constructor(name, address, pNumber, email) {
        this.toString = () => {
            return `Person ${this._name}`;
        };
        this.name = name;
        this.address = address;
        this.pNumber = pNumber;
        this.email = email;
    }
    set name(name) {
        if (name == "Ahmed")
            throw new Error("this name is invalid");
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Student extends Person {
    constructor(stat, name, address, pNumber, email) {
        super(name, address, pNumber, email);
        this.toString = () => {
            return `Student ${this.name}`;
        };
        this.stat = stat;
        // this.stat = Status.JONIUR;
    }
}
class Employee extends Person {
    constructor(office, salary, date, name, address, pNumber, email) {
        super(name, address, pNumber, email);
        this.toString = () => {
            return `Employee ${this.name}`;
        };
        this.office = office;
        this.salary = salary;
        this.dateHiring = date;
    }
}
class Faculty extends Employee {
    constructor(office_hour, rank, office, salary, date, name, address, pNumber, email) {
        super(office, salary, date, name, address, pNumber, email);
        this.toString = () => {
            return `Faculty ${this.name}`;
        };
        this.office_hour = office_hour;
        this.rank = rank;
    }
}
class Staff extends Employee {
    constructor(title, office, salary, date, name, address, pNumber, email) {
        super(office, salary, date, name, address, pNumber, email);
        this.title = title;
    }
}
const p1 = new Person("Mario", "Assiut", 120254, "mario@gmail.com");
console.log(p1.toString());
const s1 = new Student(1, "Ali", "Cairo", 1236514, "mario@gmail.com");
console.log(s1.toString());
const e1 = new Employee("mktb", 2000, "12-06-2011", "Omar", "Alex", 25394, "omar@gmail.com");
console.log(e1.toString());
const f1 = new Faculty(13, "intermediate", "mktb2", 5000, "16-9-2005", "Assiut", "Aswan", 361144, "mark@gmail.com");
console.log(f1.toString());
const st1 = new Staff("Senior", "mktb3", 6000, "14-5-1998", "islam", "mansoura", 12562145, "islam@gmail.com");
console.log(st1.toString());
class GeometricObject {
    // GeometricObject();
    constructor(color, filled) {
        this.color = "white";
        this.filled = false;
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    toString() {
        return `GeometricObject default color is ${this.color}`;
    }
}
class Circle extends GeometricObject {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    printCirlce() {
        console.log("Circle");
    }
}
class Rectangle extends GeometricObject {
    constructor(width, height, color, filled) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getheight() {
        return this.height;
    }
    setheight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * this.height * this.width;
    }
}
