`use strict`;


function getRandomCustomer(minCustomersHour, maxCustomerHour) {
    minCustomersHour = Math.ceil(minCustomersHour);
    maxCustomerHour = Math.floor(maxCustomerHour);
    return Math.floor(Math.random() * (maxCustomerHour - minCustomersHour)) + minCustomersHour; //The maximum is exclusive and the minimum is inclusive
}

var workingHours = ['6 am ', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm',];
var locations = [];


function Location(name, minCustomersHour, maxCustomerHour, avgCookiesDay) {
    this.name = name;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomerHour = maxCustomerHour;
    this.avgCookiesDay = avgCookiesDay;
    this.random = [];
    this.amount = [];
    this.total = 0;
    locations.push(this);
    this.randomCustomer();
    this.cookiesAmountHour();

    }



Location.prototype.randomCustomer = function (minCustomersHour, maxCustomerHour) {
    for (var i = 0; i < workingHours.length; i++) {
        this.random[i] = getRandomCustomer(this.minCustomersHour, this.maxCustomerHour);
    }
};
Location.prototype.cookiesAmountHour = function () {
    for (var i = 0; i < workingHours.length; i++) {
        this.amount[i] = this.avgCookiesDay * this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);
        console.table(`${workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
    }
};
Location.prototype.render = function () {
    var container = document.getElementById('salmon-cookies');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    console.log(articleEl);


    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;


    var pEl = document.createElement('p');
    articleEl.appendChild(pEl);

    var ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);

    for (var i = 0; i < workingHours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${workingHours[i]} : ${this.amount[i]} cookies`;
        ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('p');
    articleEl.appendChild(totalEl);
    totalEl.textContent = ` Total= ${this.total}`

};


// Table 
var container = document.getElementById('salmon-cookies');
var tableEl = document.createElement('table');
container.appendChild(tableEl);

//header tree table
function renderTableHeader() {
 
    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);
    var th1El = document.createElement('th');
    th1El.textContent = ' ';
    tr1El.appendChild(th1El);
    for (var i = 0; i < workingHours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = workingHours[i];
        tr1El.appendChild(thEl);
    }
    var th2El = document.createElement('th');
    th2El.textContent = 'Daily Location Total';
    tr1El.appendChild(th2El);
}

//body tree table

Location.prototype.renderTableBody = function () {
    
    var tr2El = document.createElement('tr');
    tableEl.appendChild(tr2El);
    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    tr2El.appendChild(thEl);
    for (var i = 0; i < workingHours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.amount[i];
        tr2El.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.total;
    tr2El.appendChild(tdEl);
};

 
// footer tree table
function renderTableFooter() {
    
    var tr7El = document.createElement('tr');
    tableEl.appendChild(tr7El);
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    tr7El.appendChild(thEl);
    
    var sumTotal;
        for (var i = 0; i < workingHours.length; i++) {
             sumTotal = 0;
            for (var j = 0; j < locations.length; j++) {  
            sumTotal += locations[j].amount[i];
        }
        var tdEl = document.createElement('td'); 
        tdEl.textContent = sumTotal; 
        tr7El.appendChild(tdEl);
    }

    var sumTotal2 = 0;
        for (var j = 0; j < locations.length; j++) {
        var tdEl = document.createElement('td');
        sumTotal2 += locations[j].total;
        tdEl.textContent = sumTotal2;
        }
        tr7El.appendChild(tdEl);
    
}


var locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit' , function(event){
        event.preventDefault();
        console.log(event.target);
        var locationName = event.target.name.value;
        var locationMin = event.target.minCustomersHour.value;
        var locationMax = event.target.maxCustomersHour.value;
        var avgCookies = event.target.avgCookiesDay.value;
        var newLocation = new Location(locationName , locationMin , locationMax , avgCookies);
        console.log(locations);

        newLocation.renderTableBody();

        var table = document.getElementsByTagName('table')[0];
        table.deleteRow(table.rows.length-2);

        renderTableFooter();
        document.getElementById('name').value ="";
        document.getElementById('minCustomersHour').value ="";
        document.getElementById('maxCustomersHour').value ="";
        document.getElementById('avgCookiesDay').value ="";

    });




new Location('seattle', 23, 65, 6.3);

new Location('Tokyo', 3, 24, 1.2);

new Location('Dubai', 11, 38, 3.7);

new Location('Paris', 20, 38, 2.3);

new Location('Lima', 2, 16, 4.6);



renderTableHeader();

for (var j = 0; j < locations.length; j++){
    locations[j].renderTableBody();
    }

renderTableFooter();
