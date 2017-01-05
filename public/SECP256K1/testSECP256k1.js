var crypto = require('crypto');
var secp256k1 = require('secp256k1');
var ethereumjs_util = require('ethereumjs-util');

/**
 * 使用椭圆曲线加密算法生成公私钥(secp256k1)
 *
 * @type {Buffer}
 */
//需要加密的消息，用string初始化buffer
var msg = new Buffer(32);
msg.fill("消息");

//生成32字节私钥
var privKey = crypto.randomBytes(32);
console.log(privKey.toString('hex'));

//生成公钥，第二个参数表示是否使用压缩模式
var pubKey = secp256k1.publicKeyCreate(privKey, false);
console.log(pubKey.toString('hex'));

// 签名消息
var sigObj = secp256k1.sign(msg, privKey);

// 验证签名
console.log(secp256k1.verify(msg, sigObj.signature, pubKey));

console.log("公钥：" + ethereumjs_util.bufferToHex(pubKey));
console.log("私钥：" + ethereumjs_util.bufferToHex(privKey));