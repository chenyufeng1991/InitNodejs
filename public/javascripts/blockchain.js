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
    console.log(web3.eth.compile.solidity(result.toString()).info.abiDefinition);


});

//web3默认接入了BigNumber模块，实现对大整数的处理
var balance = new BigNumber('131242344353464564564574574567456');
console.log(balance.plus(21).toString(10));

console.log("web3版本：" + web3.version.api);
console.log("节点版本：" + web3.version.node);
console.log("网络协议版本：" + web3.version.network);
console.log("以太坊协议版本：" + web3.version.ethereum);
