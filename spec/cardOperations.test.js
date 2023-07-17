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

  it("should make a withdrawal", () => {
    account.balance = 1500; // Set an initial balance

    operations.withdraw(500, "14/01/2023");

    expect(account.balance).toEqual(1000);
    expect(account.transactions).toEqual([
      { date: "14/01/2023", credit: 0, debit: 500, balance: 1000 },
    ]);
  });

  it("should not allow withdrawal if balance is insufficient", () => {
    console.log = jest.fn(); // Mock console.log
    operations.withdraw(1500, "14/01/2023");

    expect(account.balance).toEqual(0);
    expect(account.transactions.length).toEqual(0);
    expect(console.log).toHaveBeenCalledWith("Insufficient balance");
  });

  it("should print the statement", () => {
    // Mock console.log
    console.log = jest.fn();

    operations.deposit(1000, "10/01/2023");
    operations.deposit(2000, "13/01/2023");
    operations.withdraw(500, "14/01/2023");

    operations.printStatement();

    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "14/01/2023 || 0.00 || 500.00 || 2500.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "13/01/2023 || 2000.00 || 0.00 || 3000.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "10/01/2023 || 1000.00 || 0.00 || 1000.00"
    );
  });
});
