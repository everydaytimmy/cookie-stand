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

//define a city
function CityProfile(city, hours, avgSale, minCust, maxCust) {
  this.city = city;
  this.hours = hours;
  this.avgSale = avgSale;
  this.minCust = minCust;
  this.maxCust = maxCust;
}

CityProfile.prototype.render = function () {

  const profileContainer = document.getElementById('store-container');
  const article = createChild('article', profileContainer);

  // createChild('h2', article, this.city);

  const table = createChild('table', article);
  const headerRow = createChild('tr', table);
  const dataRow = createChild('td', table);

  // table headers
  createChild('th', headerRow, '');
  for (let i = 0; i < this.hours.length; i += 1) {
    createChild('th', headerRow, this.hours[i]);
  }
  createChild('th', headerRow, 'Daily Location Total');

  let total = 0;

  //table data sales
  createChild('td', dataRow, this.city);
  for (let i = 0; i < this.hours.length; i += 1) {
    createChild('td', dataRow, parseInt(getRandomInt(this.maxCust, this.minCust) * this.avgSale));
    total += parseInt(getRandomInt(this.maxCust, this.minCust) * this.avgSale);
  }
  createChild('td', dataRow, total);
};

//   //table footer
//   createChild('td', totalRow, 'Totals');
//   for (let i = 0; i < this.hours.length; i += 1) {
//     createChild('td', totalRow,)
//   }
//   createChild('td', totalRow, total);
// };

//create createChild function
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

let seattle = new CityProfile('Seattle', openTimes, 6.3, 23, 65);
let tokyo = new CityProfile('Tokyo', openTimes, 1.2, 3, 24);

seattle.render();
tokyo.render();
