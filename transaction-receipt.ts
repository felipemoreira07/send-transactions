import { Web3 } from "web3";

async function main() {
  const web3 = new Web3("http://127.0.0.1:8545/");

  // create a new Web3.js account object with the private key of a Hardhat test account
  const privateKey =
    "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";
  // the account is created with a wallet, which makes it easier to use
  const sender = web3.eth.accounts.wallet.add(privateKey)[0];
  const senderBalanceBefore = await web3.eth.getBalance(sender.address);
  const value = 100n; // Ensure this is BigInt
  const receiver = web3.eth.accounts.create();

  // log initial balances
  console.log(
    "Initial sender balance:",
    // account balance in wei
    await web3.eth.getBalance(sender.address)
  );
  console.log(
    "Initial receiver balance:",
    // account balance in wei
    await web3.eth.getBalance(receiver.address)
  );

  // sign and send the transaction
  const receipt = await web3.eth.sendTransaction({
    from: sender.address,
    to: receiver.address,
    // amount in wei
    value,
  });

  // Log transaction receipt
  console.log(receipt);

  // Calculate the real transaction cost
  const gasUsed = BigInt(receipt.cumulativeGasUsed); // Convert to BigInt if not already
  const gasPrice = BigInt(receipt.effectiveGasPrice || 0n); // Convert to BigInt if not already
  const senderBalanceAfter = await web3.eth.getBalance(sender.address);

  const cost = value + gasUsed * gasPrice;
  const realCost = senderBalanceBefore - senderBalanceAfter;

  console.log("Transaction's cost:", cost);
  console.log("Transaction's real cost:", realCost);

  // log final balances
  console.log("Final sender balance:", senderBalanceAfter);
  console.log(
    "Final receiver balance:",
    await web3.eth.getBalance(receiver.address)
  );
}

main();
