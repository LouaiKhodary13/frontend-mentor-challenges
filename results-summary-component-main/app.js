// Array of data objects, each representing a category with its score, icon, and background color
const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
    background: '#fff6f5',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
    background: '#fffbf2',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
    background: '#f2fbfa',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
    background: '#f3f3fd',
  },
];

// Select the parent container in the DOM
const dataContainer = document.querySelector('.data-container');

// Iterate over each item in the data array
data.forEach((item) => {
  // Create a new article element for each item
  const dataInfo = document.createElement('article');

  // Add the 'data' class to the new article element
  dataInfo.classList.add('data');

  // Set the inner HTML of the new article element, using the properties of the current item
  dataInfo.innerHTML = ` 
   <div class="text-icon-container" style="background-color:${item.background} ;">
     <span class="icon"><img src="${item.icon}" alt="${item.category} icon"/> ${item.category}</span>     <div><span>${item.score}/100</span></div>  
   </div>
  `;

  // Append the new article element to the parent container
  dataContainer.appendChild(dataInfo);
});
