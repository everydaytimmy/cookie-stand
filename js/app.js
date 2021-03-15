let seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlySales: [5,8,6,9,9,4,6,12,10,9,12,7,6,3],
};

let tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.3
};

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


const storeContainerElem = document.getElementById('store-container');

const sectionElem = document.createElement('section');
storeContainerElem.appendChild(sectionElem);


//heading item
const locationElem = document.createElement('h2');
sectionElem.appendChild(locationElem);
locationElem.textContent = 'Seattle';


//list items
const hourListElem = document.createElement('ul');
sectionElem.appendChild(hourListElem);

const hourItemElem = document.createElement('li');
hourListElem.appendChild(hourItemElem);
hourItemElem.textContent = '6am: 16';

const totalItemElem = document.createElement('li');
hourListElem.appendChild(totalItemElem);
totalItemElem.textContent = 'Total = 69';









// <section>
// <h2>Seattle</h2>
// <ul>
//   <li>6am: 16 cookies</li>
//   <li>7am: 18 cookies</li>
//   <li>8am: 26 cookies</li>
// </ul>
// </section>
