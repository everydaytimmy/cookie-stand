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
function CityProfile(city, hours) {
  this.city = city;
  // this.minCust = minCust;
  // this.avgSale = avgSale;
  // this.hourlySales = hourlySales;
  this.hours = hours;
}


//Constructor Function
CityProfile.prototype.render = function () {

  const profileContainer = document.getElementById('store-container');
  const article = createChild('article', profileContainer);

  createChild('h2', article, this.city);


  const table = createChild('table', article);
  const headerRow = createChild('tr', table);
  const dataRow = createChild('td', table);

  // table headers
  createChild('th', headerRow, '');
  for (let i = 0; i < this.hours.length; i += 1) {
    createChild('th', headerRow, this.hours[i]);
  }
  createChild('th', headerRow, 'Daily Location Total');

  //table data
  createChild('td', dataRow, this.city);
  for (let i = 0; i < this.hours.length; i += 1) {
    createChild('td', dataRow, this.hours[i]);
  }
  createChild('td', dataRow, 'Daily Location Total');

  // const dataRow = document.createElement('tr');
  // table.appendChild(dataRow);

  // createChild('td', dataRow, this.goodWithKids);
  // createChild('td', dataRow, this.goodWithDogs);
  // createChild('td', dataRow, this.goodWithOtherCats);

};
//create input function
function createChild(tag, parent, text) {

  const child = document.createElement(tag);
  parent.appendChild(child);

  if (text !== undefined) {
    child.textContent = text;
  }

  return child;

}

let seattle = new CityProfile('Seattle', openTimes);

seattle.render();




// const storeContainerElem = document.getElementById('store-container');


// const sectionElem = document.createElement('section');
// storeContainerElem.appendChild(sectionElem);

// createCookieStand(seattle);

// createCookieStand(tokyo);


// function createCookieStand(cookieStand) {

//   const locationElem = document.createElement('h2');
//   sectionElem.appendChild(locationElem);
//   locationElem.textContent = cookieStand.name

//   //list items

//   const hourListElem = document.createElement('ul');
//   sectionElem.appendChild(hourListElem);

//   for(let i = 0; i < openTimes.length; i += 1) {

//     const hourItemElem = document.createElement('li');
//     hourListElem.appendChild(hourItemElem);
//     let timeSales = cookieStand.hourlySales[i];
//     hourItemElem.textContent = `${openTimes[i]}: ${timeSales} cookies`;
//   };

//   let total = 0;

//   for(let i =0; i < cookieStand.hourlySales.length; i +=1 ){
//     const currentSales = cookieStand.hourlySales[i];
//     total += currentSales;
//   };

//   const totalItemElem = document.createElement('li');
//   hourListElem.appendChild(totalItemElem);
//   totalItemElem.textContent = `Total: ${total} cookies.`;
// };












// <section>
// <h2>Seattle</h2>
// <ul>
//   <li>6am: 16 cookies</li>
//   <li>7am: 18 cookies</li>
//   <li>8am: 26 cookies</li>
// </ul>
// </section>
