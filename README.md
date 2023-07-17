# Bank Tech Test

A basic banking system that allows for deposits, withdrawals, and printing a bank statement. The system is created with Node.js and tested with Jest.

## Project Structure

The project is structured as follows:

- `src/` - The source code of the project.
  - `run.js` - The main entry point of the project with a small test already written.
  - `models/`
    - `cardAccount.js` - Defines the Account class that handles the account creation and management.
  - `controllers/`
    - `cardOperations.js` - Contains the operations that can be performed on an account, like deposit, withdrawal, and printing a bank statement.
- `spec/` - The tests for the project.
  - `cardAccount.test.js` - Tests for the cardAccount model.
  - `cardOperations.test.js` - Tests for the card operations controller.

## How to Run

First, clone the repository to your local machine:

```bash
git clone https://github.com/Shakhrai8/bank-tech-test.git
cd bank-tech-test
```

Then, install the dependencies:

```bash
npm install
```

To run the small visual test on project:

```bash
node src/run.js
```

This will perform some operations on an account and print the bank statement.

## Testing

The tests are written using Jest. To run the tests, use the following command:

```bash
jest
```

in order to see the coverage of the tests, please run:

```bash
jest --coverage
```


## Example Usage

Here's an example of how you can use the banking system:

```javascript
const cardAccount = require("./models/cardAccount");
const cardOperations = require("./controllers/cardOperations");

let acc = new cardAccount("12345678", "1234");
let operations = new cardOperations(acc);

operations.deposit(1000, "10/01/2023");
operations.deposit(2000, "13/01/2023");
operations.withdraw(500, "14/01/2023");

operations.printStatement();
```

This will output:

```
date       || credit || debit || balance
14/01/2023 || 0.00   || 500.00|| 2500.00
13/01/2023 || 2000.00|| 0.00  || 3000.00
10/01/2023 || 1000.00|| 0.00  || 1000.00
```
