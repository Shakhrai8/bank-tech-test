const cardAccount = require("../src/models/cardAccount");

describe("cardAccount model", () => {
  it("creates a new account", () => {
    let account = new cardAccount("1234567890123456", "1234");

    expect(account).toBeInstanceOf(cardAccount);
    expect(account.cardNumber).toEqual("1234567890123456");
    expect(account.pin).toEqual("1234");
    expect(account.balance).toEqual(0);
    expect(account.transactions).toEqual([]);
  });

  it("should be able to modify the properties", () => {
    let account = new cardAccount("1234567890123456", "1234");

    account.balance = 1000;
    account.transactions.push({
      date: "10/01/2023",
      credit: 1000,
      debit: 0,
      balance: 1000,
    });

    expect(account.balance).toEqual(1000);
    expect(account.transactions).toEqual([
      { date: "10/01/2023", credit: 1000, debit: 0, balance: 1000 },
    ]);
  });
});
