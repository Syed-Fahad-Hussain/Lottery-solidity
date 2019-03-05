const HDWalletProvider = require('truffle-hdwallet-provider'),
    Web3 = require('web3');

const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'song rebel dinosaur march boring loyal unable wash pear term novel waste',
    'https://rinkeby.infura.io/v3/34fcb4be022a4ebcbba6f632e91bf962'

);

const web3 = new Web3(provider);

const deploy = async () => {

  const  accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy to ",accounts[0]);

    const result = await  new  web3.eth.Contract(JSON.parse(interface))
        .deploy({data :'0x'+ bytecode })
        .send({gas : '1000000' , from : accounts[0]});
    
    console.log(interface);

    console.log("Contract deployed to " ,result.options.address)

};

deploy();