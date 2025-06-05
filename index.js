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

const images = document.querySelectorAll('#fruList img');
images.forEach(img => {
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
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

function enhanceListWithImages(listId, images) {
  const ul = document.getElementById(listId);
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.gap = '20px';
  ul.style.padding = '0';
  ul.style.listStyle = 'none';

  Array.from(ul.children).forEach(li => {
    const name = li.textContent.trim();
    li.style.display = 'flex';
    li.style.flexDirection = 'column';
    li.style.alignItems = 'center';
    li.style.width = '120px';

    const img = document.createElement('img');
    img.src = images[name] || 'images/placeholder.jpg';
    img.alt = name;
    img.style.width = '100%';
    img.style.height = '120px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '8px';
    li.appendChild(img);

  });
}

// Run on both lists
enhanceListWithImages('fruList', fruitImages);
enhanceListWithImages('vegList', vegImages);

//Add one more fruit to the fruit list
const fruitList = document.getElementById('fruList');
const newFruit = document.createElement('li');
//newFruit.innerHTML = '<img src="Images/mananasi.jpg"/><span>Pineapple</span>';
fruitList.appendChild(newFruit);


//add one more vegetable to the vegetables list
const vegetableList = document.getElementById('vegList');
const newVegetable = document.createElement('li');
//newVegetable.innerHTML = '<img src="Images/hoho.jpg"/><span>Green Pepper</span>';
vegetableList.appendChild(newVegetable);


