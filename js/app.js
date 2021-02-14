'use strict';

let randomNom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let Seattle = {
    min: 23,
    max: 65,
    avegCookies: 6.3,
    avegCustomer: 0,
    cookiesHour: [],
    gotcookiesNum: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer = (randomNom((this.min), (this.max)));

            this.cookiesHour[i] = (this.avegCookies * this.avegCustomer);
            console.log(this.cookiesHour);
        }
    }
}
Seattle.gotcookiesNum();
// console.log(Seattle.getNomerofCustomer)


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "seattle stor";
child.appendChild(underedList);


let randomNom2 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let Tokyo = {
    min: 3,
    max: 24,
    avegCookies: 1.2,
    avegCustomer: 0,
    cookiesHour: [],
    gotcookiesNum: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer = (randomNom((this.min), (this.max)));

            this.cookiesHour[i] = (this.avegCookies * this.avegCustomer);
            console.log(this.cookiesHour);
        }
    }
}
Tokyo.gotcookiesNum();


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "Tokyo stor";
child.appendChild(underedList);


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "seattle stor";
child.appendChild(underedList);


let randomNom3 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let Dubai = {
    min: 11,
    max: 38,
    avegCookies: 3.7,
    avegCustomer: 0,
    cookiesHour: [],
    gotcookiesNum: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer = (randomNom((this.min), (this.max)));

            this.cookiesHour[i] = (this.avegCookies * this.avegCustomer);
            console.log(this.cookiesHour);
        }
    }
}
Dubai.gotcookiesNum();


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "Dubai stor";
child.appendChild(underedList);



let randomNom4 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let Paris = {
    min: 20,
    max: 38,
    avegCookies: 2.3,
    avegCustomer: 0,
    cookiesHour: [],
    gotcookiesNum: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer = (randomNom((this.min), (this.max)));

            this.cookiesHour[i] = (this.avegCookies * this.avegCustomer);
            console.log(this.cookiesHour);
        }
    }
}
Paris.gotcookiesNum();


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "Paris stor";
child.appendChild(underedList);


let randomNom5 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let Lima = {
    min: 2,
    max: 16,
    avegCookies: 4.6,
    avegCustomer: 0,
    cookiesHour: [],
    gotcookiesNum: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer = (randomNom((this.min), (this.max)));

            this.cookiesHour[i] = (this.avegCookies * this.avegCustomer);
            console.log(this.cookiesHour);
        }
    }
}
Lima.gotcookiesNum();


let parent = document.getElementById("Storslocation");
let child = document.createElement("ul");
parent.appendChild(child);
let underedList = document.createElement("li");
underedList.textContent = "Lima stor";
child.appendChild(underedList);