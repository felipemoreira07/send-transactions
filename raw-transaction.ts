import { Web3 } from "web3";

async function main() {
  const web3 = new Web3("http://127.0.0.1:8545/");
  const privateKey =
    "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba";
  const sender = web3.eth.accounts.privateKeyToAccount(privateKey);
  const receiver = web3.eth.accounts.create();
  const block = await web3.eth.getBlock();

  const transaction = {
    from: sender.address,
    to: receiver.address,
    value: 100,
    // the following two properties must be included in raw transactions
    ...(block.baseFeePerGas
      ? {
          maxFeePerGas: block.baseFeePerGas * 2n,
          maxPriorityFeePerGas: 100000,
        }
      : {
          gasPrice: await web3.eth.getGasPrice(),
        }),
  };

  const signedTransaction = await web3.eth.accounts.signTransaction(
    transaction,
    sender.privateKey
  );
  const receipt = await web3.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );
  console.log(receipt);
}

main();
