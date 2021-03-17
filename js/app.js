'use strict';

const openTimes = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

//define a city with a Constructor Function
function CityProfile(city, avgSale, minCust, maxCust) {
  this.city = city;
  this.avgSale = avgSale;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.sales = [];
}

function rowHeader() {
  const profileContainer = document.getElementById('store-container');
  const headerRow = createChild('tr', profileContainer);
  createChild('th', headerRow, '');
  for (let i = 0; i < openTimes.length; i += 1) {
    createChild('th', headerRow, openTimes[i]);
  }
  createChild('th', headerRow, 'Daily Location Total');
}

CityProfile.prototype.render = function () {

  const profileContainer = document.getElementById('store-container');

  let total = 0;

  const cityRow = createChild('tr', profileContainer);

  createChild('td', cityRow, this.city);

  for (let i = 0; i < openTimes.length; i += 1) {
    let randomInt = parseInt(getRandomInt(this.maxCust, this.minCust) * this.avgSale);
    this.sales.push(randomInt);
    createChild('td', cityRow, randomInt);

    total += randomInt;
  }
  createChild('td', cityRow, total);
};

//   //table footer
//   createChild('td', totalRow, 'Totals');
//   for (let i = 0; i < this.hours.length; i += 1) {
//     createChild('td', totalRow,)
//   }
//   createChild('td', totalRow, total);
// };


function createChild(tag, parent, text) {

  const child = document.createElement(tag);
  parent.appendChild(child);

  if (text !== undefined) {
    child.textContent = text;
  }

  return child;
}

//create random int
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let seattle = new CityProfile('Seattle', 6.3, 23, 65);
let tokyo = new CityProfile('Tokyo', 1.2, 3, 24);
let dubai = new CityProfile('Dubai', 3.7, 11, 38);
let paris = new CityProfile('Paris', 2.3, 20,30);
let lima = new CityProfile('Lima', 4.6, 2, 16);

rowHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
