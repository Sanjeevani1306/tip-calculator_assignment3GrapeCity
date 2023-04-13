class TipCalculator {
    constructor(billAmount, tipPercentage, numPeople) {
      this.billAmount = billAmount;
      this.tipPercentage = tipPercentage;
      this.numPeople = numPeople;
    }
  
    calculateTip() {
      const tipAmount = this.billAmount * (this.tipPercentage / 100);
      const tipPerPerson = tipAmount / this.numPeople;
      return tipPerPerson.toFixed(2);
    }
  
    calculateTotal() {
      const totalAmount = this.billAmount + (this.billAmount * (this.tipPercentage / 100));
      const totalPerPerson = totalAmount / this.numPeople;
      return totalPerPerson.toFixed(2);
    }
  }
  document.getElementById("calculate").addEventListener("click", () => {
    try {
      const billAmount = parseFloat(document.getElementById("bill-amount").value);
      const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
      const numPeople = parseInt(document.getElementById("num-people").value);
  
      if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople)) {
        throw new Error("Please enter valid values for all fields.");
      }
  
      const tipCalculator = new TipCalculator(billAmount, tipPercentage, numPeople);
  
      const tipPerPerson = tipCalculator.calculateTip();
      const totalPerPerson = tipCalculator.calculateTotal();
  
      document.getElementById("result").innerHTML = `
        <h3>OUTPUT</h3>
        <p>Tip per Person: $${tipPerPerson}</p>
        <p>Total per Person: $${totalPerPerson}</p>
      `;
    } catch (error) {
      document.getElementById("result").innerHTML = `
        <h2>Error</h2>
        <p>${error.message}</p>
      `;
    }
  });
  