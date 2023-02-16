/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
console.log(numberOfPeople)
const perPersonTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div
  let numberOfPeopleValue = Number(numberOfPeople.innerText);  
console.log(numberOfPeopleValue);  

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billTotalInput.value);  

  // get the tip from user & convert it into a percentage (divide by 100)
  let tipPercent = Number(tipInput.value) / 100;

  // get the total tip amount
  let tipAmount = tipPercent * bill;

  // calculate the total (tip amount + bill)
  let total =  tipAmount + bill;
  // calculate the per person total (total divided by number of people)
let totalPerPerson = total / numberOfPeopleValue;

  // update the perPersonTotal on DOM & show it to user
perPersonTotal.innerText = `$${totalPerPerson.toFixed(2)}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeopleValue++;

  // update the DOM with the new number of people
numberOfPeople.textContent = numberOfPeopleValue;    

  // calculate the bill based on the new number of people
calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
if (numberOfPeopleValue <= 1) {
  return;
}
  
  // decrement the amount of people

numberOfPeopleValue--;
  // update the DOM with the new number of people

numberOfPeople.textContent = numberOfPeopleValue;
  // calculate the bill based on the new number of people
calculateBill()
}

const resetBtn = () => {
  // reset the number of people
  numberOfPeople.innerText = 1;
  // reset the perPeValuersonTotal
  let totalReset = 0
  perPersonTotal.innerHTML =  `$${totalReset.toFixed(2)}`;
  // reset the bill total
  billTotalInput.value = '';
  // reset the tip input
  tipInput.value = '';
}