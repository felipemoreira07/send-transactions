# send-transactions

tutorial for sending transactions using Web3.js

## transaction's lifecycle stages, which Web3.js supports subscriptions e create custom handlers

- Sending - Web3.js is preparing to send the transaction to the network
- Sent - the transaction has been sent to the network
- Transaction hash - a hash of the transaction has been generated
- Receipt - the transaction has been included in a block
- Confirmation - the block in which the transaction was included has been finalized
- Error - a problem with the transaction was encountered
