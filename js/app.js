'use strict';

let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let randomNom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const Seattle = {
    locationsName: 'Seatel',
    min: 23,
    max: 65,
    avegCookies: 6.3,
    avegCustomer: [],
    cookiesHour: [],
    avegCustomer: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push(randomNom(this.min, this.max));

        }
    },
    cookiesHour: function () {
        for (let i = 0; hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor.this.avegCustomer[i] * this.avegCookies)
        }

    },
    rendar: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');
        parent.appendChild(underedList);
        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Seattle.avegCustomer();
Seattle, cookiesHour();
Seattle.random();
console.log(Seattle);


// let parent = document.getElementById("Storslocation");
// let child = document.createElement("ul");
// parent.appendChild(child);
// let underedList = document.createElement("li");
// underedList.textContent = "seattle stor";
// child.appendChild(underedList);


const Tokyo = {
    locationsName: 'Tokyo',
    min: 3,
    max: 24,
    avegCookies: 1.2,
    avegCustomer: [],
    cookiesHour: [],
    avegCustomer: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push(randomNom(this.min, this.max));

        }
    },
    cookiesHour: function () {
        for (let i = 0; hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor.this.avegCustomer[i] * this.avegCookies)
        }

    },
    rendar: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');
        parent.appendChild(underedList);
        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Tokyo.avegCustomer();
Tokyo, cookiesHour();
Tokyo.random();
console.log(Tokyo);
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

const Dubai = {
    locationsName: 'Dubai',
    min: 11,
    max: 38,
    avegCookies: 3.7,
    avegCustomer: [],
    cookiesHour: [],
    avegCustomer: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push(randomNom(this.min, this.max));

        }
    },
    cookiesHour: function () {
        for (let i = 0; hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor.this.avegCustomer[i] * this.avegCookies)
        }

    },
    rendar: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');
        parent.appendChild(underedList);
        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Dubai.avegCustomer();
Dubai, cookiesHour();
Dubai.random();
console.log(Dubai);
let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

const Paris = {
    locationsName: 'Paris',
    min: 20,
    max: 16,
    avegCookies: 2.3,
    avegCustomer: [],
    cookiesHour: [],
    avegCustomer: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push(randomNom(this.min, this.max));

        }
    },
    cookiesHour: function () {
        for (let i = 0; hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor.this.avegCustomer[i] * this.avegCookies)
        }

    },
    rendar: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');
        parent.appendChild(underedList);
        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Paris.avegCustomer();
Paris, cookiesHour();
Paris.random();
console.log(Paris);


let hoursArry = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

const Lima = {
    locationsName: 'Lima',
    min: 2,
    max: 16,
    avegCookies: 4.6,
    avegCustomer: [],
    cookiesHour: [],
    avegCustomer: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push(randomNom(this.min, this.max));

        }
    },
    cookiesHour: function () {
        for (let i = 0; hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor.this.avegCustomer[i] * this.avegCookies)
        }

    },
    rendar: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');
        parent.appendChild(underedList);
        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Lima.avegCustomer();
Lima, cookiesHour();
Lima.random();
console.log(Lima);