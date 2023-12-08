// Select the container element
const container = document.querySelector('.container');

// Select the thanks element
const thanks = document.querySelector('.thanks');

// Select the choose element
const choose = document.querySelector('.choose');

// Select all the button elements
let buttons = document.querySelectorAll('.btn');

// Loop over each button
buttons.forEach((button) => {
  // Add a click event listener to each button
  button.addEventListener('click', (e) => {
    // Prevent the default action of the event
    e.preventDefault();

    // Get the inner HTML of the clicked button
    let selectedValue = button.innerHTML;

    // If a value was selected
    if (selectedValue) {
      // Hide the container
      container.style.display = 'none';

      // Show the thanks message
      thanks.style.display = 'block';

      // Update the choose element with the selected value
      choose.innerHTML = `  <h2 class="choose">You selected ${selectedValue} out of 5</h2>`;
    }

    // Log the selected value to the console
    console.log(selectedValue);
  });
});

// Loop over each button
buttons.forEach((button) => {
  // Add a mouseover event listener to each button
  button.addEventListener('mouseover', () => button.classList.add('btn-out'));

  // Add a mouseout event listener to each button
  button.addEventListener('mouseout', () => {
    // Remove the 'btn-out' class from the button after 500ms
    setTimeout(() => button.classList.remove('btn-out'), 500);
  });
});

// Loop over each button
buttons.forEach((button) => {
  // Add a mouseover event listener to each button
  button.addEventListener('mouseover', () => button.classList.add('btn-out'));

  // Add a mouseout event listener to each button
  button.addEventListener('mouseout', () => {
    // Remove the 'btn-out' class from the button after 500ms
    setTimeout(() => button.classList.remove('btn-out'), 500);
  });
});
