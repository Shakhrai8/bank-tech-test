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
});
