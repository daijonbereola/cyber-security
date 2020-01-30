const{
  createDiffieHellman
} = require('crypto')

const assert = require('assert')

const alice = createDiffieHellman(1024)
const aliceKey = alice.generateKeys()

const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator())
const bobKey = bob.generateKeys()

const aliceSecret = alice.computeSecret(bobKey)
const bobSecret = bob.computeSecret(aliceKey)

try{
  assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'))
  console.log('Alice and Bob computed the same secret! They can symmetrically encrypt messages now.')
} 
catch (e){
  console.error('Oh no! Alice and Bob computed different secrets!')
}
