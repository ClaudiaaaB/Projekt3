// class BudgetApp {
//   valueInput = null;
//   value2Input = null;
//   value3Input = null;
//   value4Input = null;
//   value5Input = null;
//   value6Input = null;
//   enterButton = null;
//   error = null;

//   numberOfItems = 0;

//   Selectors = {
//     valueInput: "value",
//     value2Input: "value2",
//     value3Input: "value3",
//     value4Input: "value4",
//     value5Input: "value5",
//     value6Input: "value6",
//     enterButton: "[data-enter-button]",
//     itemDescription: "[data-item-description]",
//     totalBudget: "[data-total-budget]",
//     error: "[data-error]",
//   };

//   initializeApp() {
//     this.enterButton = document.querySelector(this.Selectors.enterButton);
//     this.descriptionInput = document.getElementById(
//       this.Selectors.descriptionInput
//     );

//     this.valueInput = document.getElementById(this.Selectors.valueInput);
//     this.value2Input = document.getElementById(this.Selectors.value2Input);
//     this.value3Input = document.getElementById(this.Selectors.value3Input);
//     this.value4Input = document.getElementById(this.Selectors.value4Input);
//     this.value5Input = document.getElementById(this.Selectors.value5Input);
//     this.value6Input = document.getElementById(this.Selectors.value6Input);
//     this.totalBudget = document.querySelector(this.Selectors.totalBudget);
//     this.error = document.querySelector(this.Selectors.error);
//     this.addEventListeners;
//   }

//   addEventListeners() {
//     this.enterButton.addEventListeners("click", () => this.addItem());
//   }

//   addItem() {
//     const newItem = this.getInputValues();
//     if (!newItem) {
//       this.showError();
//     }
//   }

//   element.insertAdjacentHTML("beforeend", this.createItem(newItem.id, newItem.value, newItem.isEdit, newItem.description ));

//   this.numberOfItems++;

//   createItem(id,isPositive, description, price) {
//     retur;
//   }

//   getInputValues() {
//     const value = this.valueInput.value;
//     const descriptionInput = this.descriptionInput.value;
//     const isEdit = !this.inputInput.checked;

//     if (value > 0 && description) {
//       return {
//         id: this.numberOfItems,
//         isEdit,
//         value,
//         description,
//       };
//     }

//     return null;
//   }

//   showError() {
//     this.error.classList.remove("hide");
//   }
//   hideError() {
//     this.error.classList.add("hide");
//   }
// }

// function dodaj() {
//   var nazwaPrzychodu = parseInt(
//     document.getElementById("nazwaPrzychodu").value
//   );
//   var kwota = parseInt(document.getElementById("kwota").value);
//   var wynik1 = nazwaPrzychodu + kwota;
//   document.getElementById("wynik").innerHTML = wynik1;

//   console.log ("nazwaPrzychodu"+"kwota")
// }

let iterator = 0;
let sumRevenue = 0;
let sumExpenses = 0;
const totalRevenue = document.getElementById("total-revenue");
const totalExpenses = document.getElementById("total-expenses");
totalRevenue.innerText = sumRevenue;
totalExpenses.innerText = sumExpenses;

const buttonRevenue = document.getElementById("button-revenue");
buttonRevenue.addEventListener("click", () => {
  addNewElement();
});

const addNewElement = () => {
  const revenueContainer = document.getElementById("revenue-items");
  const nameOfRevenue = document.getElementById("new-revenue");
  const amountRevenue = document.getElementById("amount-revenue");
  const p = document.createElement("p");
  p.innerHTML = nameOfRevenue.value + amountRevenue.value;
  p.className = "paragraf";
  sumRevenue = sumRevenue + Number(amountRevenue.value);
  console.log(sumRevenue);
  totalRevenue.innerText = sumRevenue;

  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "Edycja";
  buttonEdit.id = "button-edit-" + iterator;

  const buttonSave = document.createElement("button");
  buttonSave.textContent = "Zapisz";
  buttonSave.id = "button-save-" + iterator;
  buttonSave.hidden = true;

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Usuń";
  buttonDelete.id = "button-delete-" + iterator;

  const inputValue = document.createElement("input");
  inputValue.value = nameOfRevenue.value;
  inputValue.hidden = true;

  const inputAmount = document.createElement("input");
  inputAmount.value = amountRevenue.value;
  inputAmount.hidden = true;

  buttonEdit.addEventListener("click", () => {
    buttonSave.hidden = false;
    inputValue.hidden = false;
    inputAmount.hidden = false;
    p.hidden = true;
    buttonEdit.hidden = true;
  });
  buttonSave.addEventListener("click", () => {
    buttonSave.hidden = true;
    inputValue.hidden = true;
    console.log(inputValue.value);
    inputAmount.hidden = true;
    p.hidden = false;
    p.innerText = inputValue.value + inputAmount.value;
    buttonEdit.hidden = false;
  });

  const div = document.createElement("div");
  div.appendChild(p);
  div.appendChild(inputValue);
  div.appendChild(inputAmount);
  div.appendChild(buttonEdit);
  div.appendChild(buttonDelete);
  div.appendChild(buttonSave);
  revenueContainer.appendChild(div);
  div.className = "revenu-item";
  div.id = "revenu-item-" + iterator;

  buttonDelete.addEventListener("click", () => {
    // const newIterator = buttonDelete.id.charAt(buttonDelete.id.length - 1);
    document.getElementById(div.id).remove();
    console.log(p);
    console.log(amountRevenue.value);
  });

  iterator = iterator + 1;
};

const buttonExpenses = document.getElementById("button-expenses");
buttonExpenses.addEventListener("click", () => {
  addNewExpensesElement();
});
const addNewExpensesElement = () => {
  const ExpensesContainer = document.getElementById("expenses-items");
  const nameOfExpenses = document.getElementById("new-expenses");
  const amountExpenses = document.getElementById("amount-expenses");

  const p = document.createElement("p");
  p.innerHTML = nameOfExpenses.value + amountExpenses.value;
  p.className = "paragraf";
  sumExpenses = sumExpenses + Number(amountExpenses.value);
  console.log(sumExpenses);
  totalExpenses.innerText = sumExpenses;

  p.innerHTML = nameOfExpenses.value + amountExpenses.value;

  const buttonEditExpenses = document.createElement("button");
  buttonEditExpenses.textContent = "Edycja";
  buttonEditExpenses.id = "button-edit-expenses-" + iterator;

  const buttonSaveExpenses = document.createElement("button");
  buttonSaveExpenses.textContent = "Zapisz";
  buttonSaveExpenses.id = "button-save-expenses-" + iterator;
  buttonSaveExpenses.hidden = true;

  const buttonDeleteExpenses = document.createElement("button");
  buttonDeleteExpenses.textContent = "Usuń";
  buttonDeleteExpenses.id = "button-delete-expenses-" + iterator;

  const inputValueExpenses = document.createElement("input");
  inputValueExpenses.value = nameOfExpenses.value;
  inputValueExpenses.hidden = true;

  const inputAmountExpenses = document.createElement("input");
  inputAmountExpenses.value = amountExpenses.value;
  inputAmountExpenses.hidden = true;

  buttonEditExpenses.addEventListener("click", () => {
    buttonSaveExpenses.hidden = false;
    inputValueExpenses.hidden = false;
    inputAmountExpenses.hidden = false;
    p.hidden = true;
    buttonEditExpenses.hidden = true;
  });
  buttonSaveExpenses.addEventListener("click", () => {
    buttonSaveExpenses.hidden = true;
    inputValueExpenses.hidden = true;
    console.log(inputValueExpenses.value);
    inputAmountExpenses.hidden = true;
    p.hidden = false;
    p.innerText = inputValueExpenses.value + inputAmountExpenses.value;
    buttonEditExpenses.hidden = false;
  });

  const div = document.createElement("div");
  div.appendChild(p);
  div.appendChild(inputValueExpenses);
  div.appendChild(inputAmountExpenses);
  div.appendChild(buttonEditExpenses);
  div.appendChild(buttonDeleteExpenses);
  div.appendChild(buttonSaveExpenses);
  ExpensesContainer.appendChild(div);
  div.className = "expenses-item";
  div.id = "expenses-item-" + iterator;

  buttonDeleteExpenses.addEventListener("click", () => {
    // const newIterator = buttonDelete.id.charAt(buttonDelete.id.length - 1);
    document.getElementById(div.id).remove();
    console.log(p);
    console.log(amountExpenses.value);
  });
  iterator = iterator + 1;
};
