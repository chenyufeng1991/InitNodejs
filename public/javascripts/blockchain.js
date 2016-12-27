var Web3 = require('web3');
var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var BigNumber = require('bignumber.js'); //导入模块，注意要去package.json中注册

//web3初始化
var web3;
if(typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

fs.readFile("../../contract/MetaCoin.sol",function (error, result) {
    //从文件中读取合约
    console.log(result.toString());

    //编译合约，获得其abi
    console.log(web3.eth.compile.solidity(result.toString()));
    //console.log(web3.eth.compile.solidity(result.toString()).info.abiDefinition); //注意观察这里打印出的编译后的代码，testrpc和go-ethereum打印出不同的结果，所以点操作解析也会不同

    //把JSON转化为String：使用JSON.stringify()，这里geth和testrpc获得abi的方式有所不同
    var abiString = JSON.stringify(web3.eth.compile.solidity(result.toString()).info.abiDefinition);

    //把该abi写入文件中
    fs.writeFile("../../contract/abi/abi.txt", abiString, function (err, data) {
        if(err) {
            console.log("ERROR:" + err);
        }
    });

    //在geth上部署一个合约，获得txHash和合约地址
    //new方法会执行两次，第一次时获得交易hash，第二次是获得合约地址
    //以下方法在geth上测试通过，参数不需要加gas值
    /*
     var MyContract = web3.eth.contract(web3.eth.compile.solidity(result.toString()).MetaCoin.info.abiDefinition);
     MyContract.new({data: web3.eth.compile.solidity(result.toString()).MetaCoin.code, from:web3.eth.accounts[0]}, function (error, myContract) {
     if(!myContract.address) {
     console.log(myContract.transactionHash);

     } else {
     console.log(myContract.address);
     console.log(myContract.getCoin({from:web3.eth.accounts[0]}).toString());
     }
     });
    */

    //以下方法在testrpc上测试通过，testrpc可以实时响应，执行方法不需要等待；
    var MyContract = web3.eth.contract(web3.eth.compile.solidity(result.toString()).info.abiDefinition);
    MyContract.new({data: web3.eth.compile.solidity(result.toString()).code, from:web3.eth.accounts[0]}, function (error, myContract) {
        if(!myContract.address) {
            console.log(myContract.transactionHash);

        } else {
            console.log(myContract.address);
            myContract.sendCoin(88, {from: web3.eth.accounts[0]});
            console.log(myContract.getCoin({from:web3.eth.accounts[0]}).toString());
        }
    });


});


//web3默认接入了BigNumber模块，实现对大整数的处理
var balance = new BigNumber('131242344353464564564574574567456');
console.log(balance.plus(21).toString(10));

console.log("web3版本：" + web3.version.api);
console.log("节点版本：" + web3.version.node);
console.log("网络协议版本：" + web3.version.network);
// console.log("以太坊协议版本：" + web3.version.ethereum); //该方法只能在开启以太坊客户端后才能调用，使用testrpc则调用异常

console.log("所有账户：" + web3.eth.accounts);
web3.eth.defaultAccount = web3.eth.accounts[0];
console.log("默认账户：" + web3.eth.defaultAccount); //手动设置默认账户

console.log("基地址：" + web3.eth.coinbase);
console.log("是否挖矿：" + web3.eth.mining);
console.log("gasprice：" + web3.eth.gasPrice);
console.log("区块数量：" + web3.eth.blockNumber);
console.log("以太币数量：" + web3.eth.getBalance(web3.eth.accounts[0]));
// console.log("以太坊编译器：" + web3.eth.getCompilers()); //该方法只能在开启以太坊客户端后才能调用，使用testrpc则调用异常

