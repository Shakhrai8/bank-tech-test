const cardAccount = require("../models/cardAccount");

class cardOperations {
  constructor(account) {
    this.account = account;
  }

  deposit(amount, date) {
    this.account.balance += amount;
    this.account.transactions.push({
      date: date,
      credit: amount,
      debit: 0,
      balance: this.account.balance,
    });
  }

  withdraw(amount, date) {
    if (this.account.balance >= amount) {
      this.account.balance -= amount;
      this.account.transactions.push({
        date: date,
        credit: 0,
        debit: amount,
        balance: this.account.balance,
      });
    } else {
      console.log("Insufficient balance");
    }
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    for (let i = this.account.transactions.length - 1; i >= 0; i--) {
      let transaction = this.account.transactions[i];
      console.log(
        `${transaction.date} || ${transaction.credit.toFixed(
          2
        )} || ${transaction.debit.toFixed(2)} || ${transaction.balance.toFixed(
          2
        )}`
      );
    }
  }
}

module.exports = cardOperations;
