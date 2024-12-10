import { Web3 } from "web3";

const web3 = new Web3("http://127.0.0.1:8545/");
const sender = web3.eth.accounts.wallet.create(1)[0]; // random account
const receiver = web3.eth.accounts.create();

web3.eth
  .sendTransaction({
    from: sender.address,
    to: receiver.address,
    value: 100,
  })
  .on("error", (error) => {
    console.log("Error:", error); // "Sender doesn't have enough funds to send tx. The max upfront cost is: 89254250000100 and the sender's balance is: 0."
    process.exit(1);
  });
