const {
  generateKeyPairSync
} = require('crypto')

const keyEncoding = {
  type: 'pkcs1',
  format: 'pem'
}
const generationParameters = {
  modulusLength: 1024,
  publicExponent: 3,
  publicKeyEncoding: keyEncoding,
  privateKeyEncoding: keyEncoding
}

const alice = generateKeyPairSync('rsa', generationParameters)
const bob = generateKeyPairSync('rsa', generationParameters)

console.log('ALICE\'S PUBLIC KEY')
console.log('===================')
console.log(alice.publicKey)

console.log('BOB\'S PUBLIC KEY')
console.log('=================')
console.log(bob.publicKey)
