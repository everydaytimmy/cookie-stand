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

let cookieObjects = [];

//define a city with a Constructor Function
function CityProfile(city, avgSale, minCust, maxCust) {
  this.city = city;
  this.avgSale = avgSale;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.sales = [];
  cookieObjects.push(this);

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

function rowFooter() {
  const profileContainer = document.getElementById('store-container');
  const footerRow = createChild('tr', profileContainer);
  createChild('td', footerRow, '');
  for (let i = 0; i < openTimes.length + 1; i += 1) {
    createChild('td', footerRow, salesTallyAcrossHours);
  }
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

//create Child function
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

let salesTallyAcrossHours = 0;

//TOTAL SALES
function getHourlyTotals(cookieObjects) {

  let totalHourlySales = [];

  const len = cookieObjects[0].hourlySales.length;

  // i equals posiion in hourlySales array
  for (let i = 0; i < len; i++) { // loop through for each hourly slot

    const dailySales = GlobalSalesGivenHour(cookieObjects, i);

    totalHourlySales.push(dailySales);
  }
  return totalHourlySales;
}

function GlobalSalesGivenHour(cookieObjects, index) {
  // loop through cookieStand objects
  let salesTallyAcrossHours = 0;

  for (let k = 0; k < cookieObjects.length; k++) {

    // now go through each cookie stand gethering info

    const currentCookieStand = cookieObjects[k];

    const salesForHour = currentCookieStand.hourlySales[index];

    salesTallyAcrossHours += salesForHour;

  }

  return salesTallyAcrossHours;
}


new CityProfile('Seattle', 6.3, 23, 65);
new CityProfile('Tokyo', 1.2, 3, 24);
new CityProfile('Dubai', 3.7, 11, 38);
new CityProfile('Paris', 2.3, 20, 30);
new CityProfile('Lima', 4.6, 2, 16);

function renderStores() {
  for (let i = 0; i < cookieObjects.length; i++) {
    cookieObjects[i].render();
  }
}

rowHeader();
renderStores();
rowFooter();

console.log(cookieObjects);

// new store
const newForm = document.getElementById('newStore');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('submit', addStoreHandler);


function addStoreHandler(event) {
  event.preventDefault();
console.log(event);
  const name = event.target.name.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookie = event.target.avgCookie.value;

  const newStore = new CityProfile(name, minCust, maxCust, avgCookie);

  table.innerHTML = '';

  renderTable();

  event.target.reset();

}

function renderTable() {

  rowHeader();

  renderStores();

  rowFooter();
}


