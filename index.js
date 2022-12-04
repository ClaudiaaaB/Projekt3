class BudgetApp {
  valueInput = null;
  value2Input = null;
  value3Input = null;
  value4Input = null;
  value5Input = null;
  value6Input = null;
  enterButton = null;
  error = null;

  Selectors = {
    valueInput: "value",
    value2Input: "value2",
    value3Input: "value3",
    value4Input: "value4",
    value5Input: "value5",
    value6Input: "value6",
    enterButton: "[data-enter-button]",
    itemDescription: "[data-item-description]",
    totalBudget: "[data-total-budget]",
    error: "[data-error]",
  };

  initializeApp() {
    this.enterButton = document.querySelector(this.Selectors.enterButton);
    this.descriptionInput = document.getElementById(
      this.Selectors.descriptionInput
    );

    this.valueInput = docuemnt.getElementById(this.Selectors.valueInput);
    this.value2Input = docuemnt.getElementById(this.Selectors.value2Input);
    this.value3Input = docuemnt.getElementById(this.Selectors.value3Input);
    this.value4Input = docuemnt.getElementById(this.Selectors.value4Input);
    this.value5Input = docuemnt.getElementById(this.Selectors.value5Input);
    this.value6Input = docuemnt.getElementById(this.Selectors.value6Input);
    this.totalBudget = document.querySelector(this.Selectors.totalBudget);
    this.error = document.querySelector(this.Selectors.error);
    this.addEventListeners;
  }

  addEventListeners() {
    this.enterButton.addEventListeners("click", () => this.addItem());
  }

  addItem() {
    const newItem = this.getInputValues();
    if (!newItem) {
      this.showError();
    }
  }

  getInputValues() {
    const value = this.valueInput.value;
    const descriptionInput = this.descriptionInput.value;
    const isEdit = !this.inputInput.checked;

    if (value > 0 && description) {
      return {
        isEdit,
        value,
        description,
      };
    }

    return null;
  }

  showError() {
    this.error.classList.remove("hide");
  }
  hideError() {
    this.error.classList.add("hide");
  }
}
