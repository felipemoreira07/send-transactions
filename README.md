# send-transactions

tutorial for sending transactions using eb3.js

here we gonna send some transactions and see how web3.js can handle different cenarios

create a new project directory for the project, navigate into it and initialize a new Node.js:

```
npm init -y
```

run this setup and initialize a hardhat project:

```
npm i web3 hardhat ts-node
npx hardhat init
```

to start the hardhat development network:

```
npm init -y
```

now experiment some transactions by running some transaction files, for example:

```
ts-node transaction-receipt.ts
```

## transaction's lifecycle stages, which Web3.js supports subscriptions e create custom handlers

- Sending - Web3.js is preparing to send the transaction to the network
- Sent - the transaction has been sent to the network
- Transaction hash - a hash of the transaction has been generated
- Receipt - the transaction has been included in a block
- Confirmation - the block in which the transaction was included has been finalized
- Error - a problem with the transaction was encountered
