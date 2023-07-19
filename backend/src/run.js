const cardAccount = require("./models/cardAccount");
const cardOperations = require("./controllers/cardOperations");

let acc = new cardAccount("12345678", "1234");
let operations = new cardOperations(acc);

operations.deposit(1000, "10/01/2023");
operations.deposit(2000, "13/01/2023");
operations.withdraw(500, "14/01/2023");

operations.printStatement();
