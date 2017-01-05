var crypto = require('crypto');
var secp256k1 = require('secp256k1');

//需要加密的消息
var msg = new Buffer(32);
msg.fill("消息");

//生成私钥
var privKey = crypto.randomBytes(32);
console.log(privKey.toString('hex'));

//生成公钥
var pubKey = secp256k1.publicKeyCreate(privKey);
console.log(pubKey.toString('hex'));

// 签名消息
var sigObj = secp256k1.sign(msg, privKey);

// 验证签名
console.log(secp256k1.verify(msg, sigObj.signature, pubKey));