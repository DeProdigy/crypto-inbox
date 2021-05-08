const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'shiver mandate timber square wealth aunt penalty dust heart vivid impose purchase',
  'https://rinkeby.infura.io/v3/e4bd15e45d0c47a6b572061a2bb397de',
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['This is a contract from Alex'],
    })
    .send({
      from: accounts[0],
      gas: '1000000',
    });

    console.log('Contract deployed to: ', contract.options.address);
};

deploy();

// Attempting to deploy from account 0x088D05858766DcdFc4bfA95E73f0f0c1aE356Af1
// Contract deployed to:  0x821f0d5412a8196262FF26B1f0e0B8a8c7C209d3
