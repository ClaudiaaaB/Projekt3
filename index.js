let iterator = 0;
let sumRevenue = 0;
let sumExpenses = 0;
let sumBudget = 0;
const totalRevenue = document.getElementById("total-revenue");
const totalExpenses = document.getElementById("total-expenses");

totalRevenue.innerText = sumRevenue;
totalExpenses.innerText = sumExpenses;

const buttonRevenue = document.getElementById("button-revenue");
buttonRevenue.addEventListener("click", () => {
  addNewElement();
  updateTotalBudget();
});
const amountRevenue = document.getElementById("amount-revenue");
amountRevenue.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("wpisz wartość większą niż 0");
  }
});

const updateTotalBudget = () => {
  const totalBudget = document.getElementById("total-budget");
  sumBudget = sumRevenue - sumExpenses;
  totalBudget.innerHTML = sumBudget;
};

const addNewElement = () => {
  const revenueContainer = document.getElementById("revenue-items");
  const nameOfRevenue = document.getElementById("new-revenue");

  const p = document.createElement("p");
  p.innerHTML =
    nameOfRevenue.value +
    " " +
    "<span class='amountrev'>" +
    amountRevenue.value +
    "</span>";
  p.className = "paragraf";
  sumRevenue = sumRevenue + Number(amountRevenue.value);
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
    if (inputAmount.value <= 0) {
      alert("wpisz wartość większą od 0");
      return;
    }

    buttonSave.hidden = true;
    inputValue.hidden = true;
    inputAmount.hidden = true;
    p.hidden = false;
    p.innerText = inputValue.value + inputAmount.value;

    buttonEdit.hidden = false;
    sumRevenue = sumRevenue + (inputAmount.value - amountRevenue.value);
    totalRevenue.innerText = sumRevenue;
    updateTotalBudget();
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
    document.getElementById(div.id).remove();
    sumRevenue = sumRevenue - Number(div.querySelector(".amountrev").innerText);
    totalRevenue.innerText = sumRevenue;
    updateTotalBudget();
  });

  iterator = iterator + 1;
};

const buttonExpenses = document.getElementById("button-expenses");
buttonExpenses.addEventListener("click", () => {
  addNewExpensesElement();
  updateTotalBudget();
});

const amountExpenses = document.getElementById("amount-expenses");
amountExpenses.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("wpisz wartość większą niż 0");
  }
});

const addNewExpensesElement = () => {
  const ExpensesContainer = document.getElementById("expenses-items");
  const nameOfExpenses = document.getElementById("new-expenses");

  const p = document.createElement("p");
  p.innerHTML =
    nameOfExpenses.value +
    " " +
    "<span class='amount'>" +
    // "<span id='expensesamount" +
    // iterator +
    // "'" +
    // ">" +
    amountExpenses.value +
    "</span>";
  p.className = "paragraf";
  sumExpenses = sumExpenses + Number(amountExpenses.value);
  totalExpenses.innerText = sumExpenses;

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
    if (inputAmountExpenses.value <= 0) {
      alert("wpisz wartość większą od 0");
      return;
    }

    buttonSaveExpenses.hidden = true;
    inputValueExpenses.hidden = true;
    inputAmountExpenses.hidden = true;
    p.hidden = false;
    p.innerText = inputValueExpenses.value + inputAmountExpenses.value;

    buttonEditExpenses.hidden = false;
    sumExpenses =
      sumExpenses + (inputAmountExpenses.value - amountExpenses.value);
    totalExpenses.innerText = sumExpenses;
    updateTotalBudget();
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
    document.getElementById(div.id).remove();
    sumExpenses = sumExpenses - Number(div.querySelector(".amount").innerText);
    totalExpenses.innerText = sumExpenses;
    updateTotalBudget();
  });

  iterator = iterator + 1;
};
