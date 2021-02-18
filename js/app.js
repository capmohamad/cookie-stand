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
    total:0,
    
    avegCustomerinhr: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push (randomNom(this.min, this.max));

        }
    },
    cookiesinHour: function () {
        for (let i = 0;i< hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor(this.avegCustomer[i] * this.avegCookies));
            this.total+=this.cookiesHour[i]

        }

    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);
        let underedList = document.createElement('ul');

        parent.appendChild(underedList)

        let shopNames = document.createElement('li');
        underedList.appendChild(shopNames);
        shopNames.textContent = this.locationsName;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);

        for (let i = 0; i < hoursArry.length; i++) {

            let listItem = document.createElement('li');

            listItem.textContent = `${hoursArry[i]}: ${this.cookiesHour[i]} cookies`
            unorderedList.appendChild(listItem);

        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
Seattle.avegCustomerinhr();
Seattle.cookiesinHour();
Seattle.render();
console.log(Seattle);


// let parent = document.getElementById("Storslocation");
// let child = document.createElement("ul");
// parent.appendChild(child);
// let underedList = document.createElement("li");
// underedList.textContent = "seattle stor";
// child.appendChild(underedList);





const tokyo = {
    locationsName: 'Tokyo',
    min: 3,
    max: 24,
    avegCookies: 1.2,
    avegCustomer: [],
    cookiesHour: [],
    total:0,
    
    avegCustomerinhr: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push (randomNom(this.min, this.max));

        }
    },
    cookiesinHour: function () {
        for (let i = 0;i< hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor(this.avegCustomer[i] * this.avegCookies));
            this.total+=this.cookiesHour[i]

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

        for (let i = 0; i < hoursArry.length; i++) {

            let listItem = document.createElement('li');

            listItem.textContent = `${hoursArry[i]}: ${this.cookiesHour[i]} cookies`
            unorderedList.appendChild(listItem);

        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
tokyo.avegCustomerinhr();
tokyo.cookiesinHour();
tokyo.rendar();
console.log(tokyo);




const dubai = {
    locationsName: 'Dubai',
    min: 11,
    max: 38,
    avegCookies: 2.3,
    avegCustomer: [],
    cookiesHour: [],
    total:0,
    
    avegCustomerinhr: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push (randomNom(this.min, this.max));

        }
    },
    cookiesinHour: function () {
        for (let i = 0;i< hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor(this.avegCustomer[i] * this.avegCookies));
            this.total+=this.cookiesHour[i]

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

        for (let i = 0; i < hoursArry.length; i++) {

            let listItem = document.createElement('li');

            listItem.textContent = `${hoursArry[i]}: ${this.cookiesHour[i]} cookies`
            unorderedList.appendChild(listItem);

        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
dubai.avegCustomerinhr();
dubai.cookiesinHour();
dubai.rendar();
console.log(dubai);



const paris = {
    locationsName: 'Paris',
    min: 20,
    max: 38,
    avegCookies: 2.3,
    avegCustomer: [],
    cookiesHour: [],
    total:0,
    
    avegCustomerinhr: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push (randomNom(this.min, this.max));

        }
    },
    cookiesinHour: function () {
        for (let i = 0;i< hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor(this.avegCustomer[i] * this.avegCookies));
            this.total+=this.cookiesHour[i]

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

        for (let i = 0; i < hoursArry.length; i++) {

            let listItem = document.createElement('li');

            listItem.textContent = `${hoursArry[i]}: ${this.cookiesHour[i]} cookies`
            unorderedList.appendChild(listItem);

        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
paris.avegCustomerinhr();
paris.cookiesinHour();
paris.rendar();
console.log(paris);





const lima = {
    locationsName: 'Lima',
    min: 2,
    max: 16,
    avegCookies: 4.6,
    avegCustomer: [],
    cookiesHour: [],
    total:0,
    
    avegCustomerinhr: function () {
        for (let i = 0; i < hoursArry.length; i++) {
            this.avegCustomer.push (randomNom(this.min, this.max));

        }
    },
    cookiesinHour: function () {
        for (let i = 0;i< hoursArry.length; i++) {
            // console.log(this.avegCustomer[i]);
            this.cookiesHour.push(Math.floor(this.avegCustomer[i] * this.avegCookies));
            this.total+=this.cookiesHour[i]

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

        for (let i = 0; i < hoursArry.length; i++) {

            let listItem = document.createElement('li');

            listItem.textContent = `${hoursArry[i]}: ${this.cookiesHour[i]} cookies`
            unorderedList.appendChild(listItem);

        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;
    }

}
lima.avegCustomerinhr();
lima.cookiesinHour();
lima.rendar();
console.log(lima);


