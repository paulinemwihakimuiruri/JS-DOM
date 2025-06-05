document.body.style.backgroundColor = "silver";

//change color of h1 element to green
const heading = document.getElementById('title');
title.style.color = 'green';


//insert an image after h1
const img = document.createElement('img');
img.src = 'Images/green kiosk.jpg';
img.alt = 'Kiosk image';
img.style.display = 'block';
img.style.marginTop = '10px';
img.style.width = '350px';

heading.insertAdjacentElement('afterend', img);



//change font case for h3 title tags to uppercase
document.querySelectorAll('h3').forEach(h3 =>{
    h3.textContent = h3.textContent.toUpperCase();
});

const paragraph = document.querySelector("p")
paragraph.style.fontSize = "20px"

// Image sources for fruits and vegetables
const fruitImages = {
  Mangoes: 'Images/maembe.jpg',
  Bananas: 'Images/mandizi.jpg',
  'Water Melons': 'Images/melon.jpg'
};

const vegImages = {
  Onions: 'Images/kitunguu.jpg',
  Tomatoes: 'Images/nyanya.jpg',
  Kales: 'Images/kales.jpg'
};

// Style for both lists
function styleList(ul) {
ul.style.display = 'flex';
ul.style.flexWrap = 'wrap';
ul.style.gap = '20px';
ul.style.padding = '0';
ul.style.listStyle = 'none';
}

function createListItem(name, imageSrc) {
const li = document.createElement('li');

Object.assign(li.style, {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
width: '160px',
padding: '12px',
borderRadius: '10px',
boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
backgroundColor: '#fff',
cursor: 'pointer',
fontFamily: 'Arial, sans-serif',
});

const img = document.createElement('img');
img.src = imageSrc || 'Images/placeholder.jpg';
img.alt = name;
Object.assign(img.style, {
width: '120px',
height: '120px',
objectFit: 'cover',
borderRadius: '8px',
marginBottom: '10px',
});

const span = document.createElement('span');
span.textContent = name;
Object.assign(span.style, {
fontWeight: 'bold',
fontSize: '1.1em',
color: '#333',
textAlign: 'center',
});

li.appendChild(img);
li.appendChild(span);

return li;
}

function enhanceList(listId, images) {
const ul = document.getElementById(listId);
styleList(ul);

const names = Array.from(ul.children).map(li => li.textContent.trim());

ul.innerHTML = '';

names.forEach(name => {
ul.appendChild(createListItem(name, images[name]));
});
}

enhanceList('fruList', fruitImages);
enhanceList('vegList', vegImages);

// Function to append a new fruit item
function addFruit(name, imageSrc) {
fruitImages[name] = imageSrc;
const fruitList = document.getElementById('fruList');
const newFruit = createListItem(name, imageSrc);
fruitList.appendChild(newFruit);
}

// Function to append a new vegetable item
function addVegetable(name, imageSrc) {
vegImages[name] = imageSrc;
const vegList = document.getElementById('vegList');
const newVeg = createListItem(name, imageSrc);
vegList.appendChild(newVeg);
}

//Add the new items to list
addFruit('Pineapples', 'Images/mananasi.jpg');
addFruit('Oranges', 'Images/machungwa.jpg');
addFruit('Grapes', 'Images/grape.jpg');
addVegetable('Green Pepper', 'Images/hoho.jpg');
addVegetable('Brocolli', 'Images/brocolli.jpg');
addVegetable('Spinach', 'Images/spinach.jpg');


//To search for a fruit or vegetable
const searchInput = document.querySelector('#searchInput');
const fruitList = document.querySelector('#fruList');
const vegList = document.querySelector('#vegList');

function filterList(ul, searchTerm) {
  const items = Array.from(ul.children);
  items.forEach(li => {
    const name = li.querySelector('span').textContent.toLowerCase();
    li.style.display = name.includes(searchTerm) ? 'flex' : 'none';
  });
}

searchInput.addEventListener('input', () => {
const query = searchInput.value.trim().toLowerCase();

filterList(fruitList, query);
filterList(vegList, query);
});
