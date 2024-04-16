/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35; // Default cost per full day
let dayCounter = 0; // Counter for selected days
let totalCost = 0; // Total cost

const dayButtons = document.querySelectorAll(".day-selector li");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCostElement = document.getElementById("calculated-cost");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayButtonClick() {
  let button = this;
  if (button.classList.contains('clicked')) {
      button.classList.remove('clicked');
      dayCounter--;
  } else {
      button.classList.add('clicked');
      dayCounter++;
  }
  // Update the total cost
  totalCost = dayCounter * costPerDay;
  updateCalculatedCost();
}

for (let i = 0; i < dayButtons.length; i++) {
  dayButtons[i].addEventListener('click', handleDayButtonClick);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearSelectedDays() {
  for (let i = 0; i < dayButtons.length; i++) {
      let dayButton = dayButtons[i];
      if (dayButton.classList.contains("clicked")) {
          dayButton.classList.remove("clicked");
      }
  }
  dayCounter = 0;
  totalCost = 0;
  updateCalculatedCost();
}

clearButton.addEventListener("click", clearSelectedDays);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function halfDayButtonClick() {
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotalCost();
}
halfDayButton.addEventListener("click", halfDayButtonClick);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayButtonClick() {
  costPerDay = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotalCost();
}

fullDayButton.addEventListener("click", fullDayButtonClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  totalCost = costPerDay * dayCounter;
  updateCalculatedCost();
}

function updateCalculatedCost() {
  calculatedCostElement.innerHTML = totalCost;
}
