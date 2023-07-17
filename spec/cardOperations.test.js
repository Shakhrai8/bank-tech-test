const cardOperations = require("../src/controllers/cardOperations");
const cardAccount = require("../src/models/cardAccount");

describe("cardOperations controller", () => {
  let account, operations;

  beforeEach(() => {
    account = new cardAccount("1234567890123456", "1234");
    operations = new cardOperations(account);
  });

  it("should make a deposit", () => {
    operations.deposit(1000, "10/01/2023");

    expect(account.balance).toEqual(1000);
    expect(account.transactions).toEqual([
      { date: "10/01/2023", credit: 1000, debit: 0, balance: 1000 },
    ]);
  });
});
