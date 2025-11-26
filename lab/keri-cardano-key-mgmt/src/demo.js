// src/demo.js
//
// Demo script showing:
// - create a KERI-style AID (inception)
// - generate a Cardano Ed25519 keypair
// - bind that key to the AID (interaction)
// - rotate the Cardano key (rotation)
//
// Everything uses Promise + .then() style.

const {
  createKeriAid,
  generateCardanoKeyPair,
  bindCardanoKey,
  rotateCardanoKey,
  getKel,
} = require('./cardanoKeyManager');

console.log('--- KERI + Cardano Ed25519 key management demo ---');

let aid;
let cardanoKeyPair1;
let cardanoKeyPair2;

createKeriAid()
  .then((res) => {
    aid = res.aid;
    console.log('\n[1] KERI AID created:');
    console.log('AID:', aid);
    console.log('Controller pubkey (hex):', Buffer.from(res.controllerKeys.publicKey).toString('hex'));

    // Generate first Cardano keypair
    cardanoKeyPair1 = generateCardanoKeyPair();
    console.log('\n[2] Generated first Cardano Ed25519 keypair:');
    console.log('Pub (hex):', Buffer.from(cardanoKeyPair1.publicKey).toString('hex'));

    // Bind the Cardano key to the AID
    return bindCardanoKey(aid, cardanoKeyPair1.publicKey);
  })
  .then((kelAfterBind) => {
    console.log('\n[3] Bound Cardano key to AID via interaction event.');
    console.log('Current KEL length:', kelAfterBind.length);

    // Rotate to a new Cardano keypair
    cardanoKeyPair2 = generateCardanoKeyPair();
    console.log('\n[4] Generated second Cardano Ed25519 keypair:');
    console.log('New pub (hex):', Buffer.from(cardanoKeyPair2.publicKey).toString('hex'));

    return rotateCardanoKey(
      aid,
      cardanoKeyPair1.publicKey,
      cardanoKeyPair2.publicKey,
      'demo: hardware wallet replacement'
    );
  })
  .then((kelAfterRotate) => {
    console.log('\n[5] Rotated Cardano key. KEL length:', kelAfterRotate.length);

    // Show final KEL
    return getKel(aid);
  })
  .then((finalKel) => {
    console.log('\n[6] Final KEL for AID:', aid);
    console.log(JSON.stringify(finalKel, null, 2));
    console.log('\nDemo complete.');
  })
  .catch((err) => {
    console.error('Error during demo:', err);
    process.exitCode = 1;
  });
