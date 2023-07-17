class cardAccount {
  constructor(cardNumber, pin) {
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.balance = 0;
    this.transactions = [];
  }
}

module.exports = cardAccount;
