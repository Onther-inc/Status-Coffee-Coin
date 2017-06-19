var COFFEE_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];

var COFFEE_BYTECODE =  '0x6060604052604060405190810160405280600981526020017f546f6b656e20302e310000000000000000000000000000000000000000000000815250600090805190602001906200005292919062000139565b5034156200005c57fe5b604051620013eb380380620013eb833981016040528080519060200190919080518201919060200180519060200190919080518201919050505b83600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836004819055508260019080519060200190620000f992919062000139565b5080600290805190602001906200011292919062000139565b5081600360006101000a81548160ff021916908360ff1602179055505b50505050620001e8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017c57805160ff1916838001178555620001ad565b82800160010185558215620001ad579182015b82811115620001ac5782518255916020019190600101906200018f565b5b509050620001bc9190620001c0565b5090565b620001e591905b80821115620001e1576000816000905550600101620001c7565b5090565b90565b6111f380620001f86000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100c5578063095ea7b31461015e57806318160ddd146101b557806323b872dd146101db578063313ce5671461025157806342966c681461027d5780635a3b7e42146102b557806370a082311461034e57806379cc67901461039857806395d89b41146103ef578063a9059cbb14610488578063cae9ca51146104c7578063dd62ed3e14610561575bfe5b34156100cd57fe5b6100d56105ca565b6040518080602001828103825283818151815260200191508051906020019080838360008314610124575b80518252602083111561012457602082019150602081019050602083039250610100565b505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016657fe5b61019b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610668565b604051808215151515815260200191505060405180910390f35b34156101bd57fe5b6101c56106f6565b6040518082815260200191505060405180910390f35b34156101e357fe5b610237600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106fc565b604051808215151515815260200191505060405180910390f35b341561025957fe5b610261610a1d565b604051808260ff1660ff16815260200191505060405180910390f35b341561028557fe5b61029b6004808035906020019091905050610a30565b604051808215151515815260200191505060405180910390f35b34156102bd57fe5b6102c5610b34565b6040518080602001828103825283818151815260200191508051906020019080838360008314610314575b805182526020831115610314576020820191506020810190506020830392506102f0565b505050905090810190601f1680156103405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561035657fe5b610382600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bd2565b6040518082815260200191505060405180910390f35b34156103a057fe5b6103d5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bea565b604051808215151515815260200191505060405180910390f35b34156103f757fe5b6103ff610d79565b604051808060200182810382528381815181526020019150805190602001908083836000831461044e575b80518252602083111561044e5760208201915060208101905060208303925061042a565b505050905090810190601f16801561047a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049057fe5b6104c5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e17565b005b34156104cf57fe5b610547600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061101b565b604051808215151515815260200191505060405180910390f35b341561056957fe5b6105b4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111a2565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106605780601f1061063557610100808354040283529160200191610660565b820191906000526020600020905b81548152906001019060200180831161064357829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190505b92915050565b60045481565b600060008373ffffffffffffffffffffffffffffffffffffffff1614156107235760006000fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107705760006000fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540110156107fe5760006000fd5b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156108885760006000fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b9392505050565b600360009054906101000a900460ff1681565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610a7f5760006000fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a2600190505b919050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b505050505081565b60056020528060005260406000206000915090505481565b600081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610c395760006000fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610cc35760006000fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816004600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a2600190505b92915050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e0f5780601f10610de457610100808354040283529160200191610e0f565b820191906000526020600020905b815481529060010190602001808311610df257829003601f168201915b505050505081565b60008273ffffffffffffffffffffffffffffffffffffffff161415610e3c5760006000fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610e895760006000fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054011015610f175760006000fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b6000600084905061102c8585610668565b15611199578073ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338630876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360008314611135575b80518252602083111561113557602082019150602081019050602083039250611111565b505050905090810190601f1680156111615780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561117f57fe5b6102c65a03f1151561118d57fe5b5050506001915061119a565b5b509392505050565b60066020528160005260406000206020528060005260406000206000915091505054815600a165627a7a72305820f9db5a2d6f8466bfc6aa648c8b868c3bb3a85880aa3baeeae515f031cb3cd9540029';

var COIN = web3.eth.contract(COFFEE_ABI);

var COLORS = {
  DEFAULT_COMMAND: '#333FFF',
  BALANCE_POSITIVE: 'green',
  BALANCE_NEGATIVE: 'red',
  BALANCE_NEUTRAL: 'black',
  BORDER: '#0000001f'
};

var generate = {
  name: 'generate',
  title: 'Generate',
  description: 'Generate your own CoffeeToken',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [{
    name: 'name',
    placeholder: 'Give it a Token name',
    type: status.types.TEXT,
    suggestions: Suggestions
  }, {
    name: 'amounts',
    placeholder: 'amounts of generating token ',
    type: status.types.NUMBER,
    suggestions: Suggestions
  },{
    name: 'symbol',
    placeholder: 'Give it a Token symbol name',
    type: status.types.TEXT,
    suggestions: Suggestions
  }],
  validator: function(params) {
    var error;
    if (web3.fromWei(web3.eth.getBalance(), 'ether') < 0.001) {
      error = status.components.validationMessage(
        'Not enough ETH'
      );
      return {markup: error};
    }
  },
  preview: function(params, context) {
    var message = 'Name: ' + params.name + '. Amounts of Generated Token: ' + params.amounts + ' ' +params.name;
    return {markup: status.components.text({}, message)};
  },
  handler: function(params, context) {
    status.sendMessage('Ok, we just need you to confirm that, one sec...');
    var coin = COIN.new(params.amounts, params.name, 0, params.symbol, {
      from: web3.eth.accounts[0],
      data: COFFIIE_BYTECODE
    });
    status.sendMessage('This bit might take a little while...');
    var receipt = waitForMining(coin.transactionHash);
    status.sendMessage('Done!');
    status.sendMessage(receipt.contractAddress);
  }
};

var burn = {
  name: 'burn',
  title: 'burn',
  description: 'Burn your own CoffeeToken',
  color: COLORS.DEFAULT_COMMAND,
  sequentialParams: true,
  params: [{
    name: 'amounts',
    placeholder: 'amounts of token to burn ',
    type: status.types.NUMBER,
    suggestions: Suggestions
  }],
  validator: function(params) {
    var error;
    if (web3.fromWei(web3.eth.getBalance(), 'ether') < 0.001) {
      error = status.components.validationMessage(
        'Not enough ETH'
      );
      return {markup: error};
    }
  },
  preview: function(params, context) {
    var message = 'Amounts of Burned Token:' + params.amounts;
    return {markup: status.components.text({}, message)};
  },
  handler: function(params, context) {
    status.sendMessage('Ok, we just need you to confirm that, one sec...');
    var coin = COIN.at('0x514ff1e18407cb3142a281e58a6c3990924bf9bc').burn(params.amounts,{
      from:web3.eth.accounts[0]
    });
  }
};

var getTokenInfo = {
     name: "getTokenInfo",
     title: "getTokenInfo",
     description: "Get your Token",
     color: "#CCCCCC",
     preview: function (params) {
             var message = 'Name: ' + COIN.at('0x514ff1e18407cb3142a281e58a6c3990924bf9bc').name.call() + '. Amounts of Generated Token: '+COIN.at('0x514ff1e18407cb3142a281e58a6c3990924bf9bc').totalSupply.call();
             var text = status.components.text(
                 {
                     style: {
                         marginTop: 5,
                         marginHorizontal: 0,
                         fontSize: 14,
                         fontFamily: "font",
                         color: "black"
                     }
                 }, message);
             return {markup: status.components.view({}, [text])};
         }
 };


function Suggestions() {
  var Suggestions = status.components.view({style: {margin: 10}}, [
    status.components.text({style: {fontWeight: 'bold'}}, 'Generate your Own Token')
  ]);
  return {markup: Suggestions};
}
function waitForMining(txHash) {
  var mined = false;
  var receipt;
  while (!mined) {
    receipt = web3.eth.getTransactionReceipt(txHash);
    if (!receipt) continue;
    if (receipt.contractAddress || receipt.gasUsed) mined = true;
  }
  return receipt;
}

function saveTostorage(CoffeeToken){
  localstorage.setItem('CoffeeToken',JSON.stringify(CoffeeToken));
}
function getFromDb(CoffeeToken) {
  return localStorage.getItem('CoffeeToken');
}
function getAllToken() {
  return JSON.parse(getFromDb('CoffeeToken'));
}

status.response(generate);
status.response(burn);
status.command(generate);
status.command(getTokenInfo);
status.command(burn);
