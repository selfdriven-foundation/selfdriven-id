// src/cardanoKeyManager.js
//
// Example helpers to:
// - create a KERI-style AID + inception event
// - bind a Cardano Ed25519 key as an operational key
// - rotate that Cardano key
//
// Uses tweetnacl for Ed25519 keypairs.
// Events are written to a JSON file by keriStore.

const crypto = require('crypto');
const nacl = require('tweetnacl');
const { appendEvent, loadKel } = require('./keriStore');

/**
 * Generate a pseudo-random AID string.
 * In a real KERI system this would be derived from the key material.
 */
function generateAid() {
  const randomBytes = crypto.randomBytes(16).toString('hex');
  return `aid-keri-${randomBytes}`;
}

/**
 * Utility: get current ISO timestamp.
 */
function nowIso() {
  return new Date().toISOString();
}

/**
 * Create a KERI-style AID with an inception event.
 * Returns a Promise that resolves to { aid, controllerKeys }.
 */
function createKeriAid() {
  return new Promise((resolve, reject) => {
    try {
      // For demo: single Ed25519 controller key.
      const controllerKeyPair = nacl.sign.keyPair();
      const controllerPubKey = Buffer.from(controllerKeyPair.publicKey).toString('hex');

      const aid = generateAid();

      const inceptionEvent = {
        type: 'inception',
        aid,
        controller_keys: [
          {
            pubkey: controllerPubKey,
            curve: 'ed25519',
          },
        ],
        threshold: 1,
        timestamp: nowIso(),
      };

      appendEvent(aid, inceptionEvent);

      resolve({
        aid,
        controllerKeys: {
          publicKey: controllerKeyPair.publicKey,
          secretKey: controllerKeyPair.secretKey,
        },
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Generate a Cardano Ed25519 keypair.
 * Note: this is a generic Ed25519 keypair. Real Cardano wallets
 * use structured derivation (CIP-1852). This is for demo purposes only.
 */
function generateCardanoKeyPair() {
  const keyPair = nacl.sign.keyPair();
  return {
    publicKey: keyPair.publicKey,
    secretKey: keyPair.secretKey,
  };
}

/**
 * Bind a Cardano public key to the AID via an interaction event.
 * Returns a Promise that resolves to the updated KEL.
 */
function bindCardanoKey(aid, cardanoPubKey) {
  return new Promise((resolve, reject) => {
    try {
      const pubHex = Buffer.from(cardanoPubKey).toString('hex');

      const interactionEvent = {
        type: 'interaction',
        aid,
        purpose: 'cardano/tx-signing',
        key_binding: {
          pubkey: pubHex,
          curve: 'ed25519',
          network: 'cardano-mainnet',
          role: 'transaction-signer',
        },
        timestamp: nowIso(),
      };

      const events = appendEvent(aid, interactionEvent);
      resolve(events);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Rotate a Cardano key for a given AID.
 * oldCardanoPubKey and newCardanoPubKey are Uint8Array or Buffer for the pubkeys.
 * Returns a Promise that resolves to the updated KEL.
 */
function rotateCardanoKey(aid, oldCardanoPubKey, newCardanoPubKey, reason) {
  return new Promise((resolve, reject) => {
    try {
      const oldHex = Buffer.from(oldCardanoPubKey).toString('hex');
      const newHex = Buffer.from(newCardanoPubKey).toString('hex');

      const rotationEvent = {
        type: 'rotation',
        aid,
        old_key: oldHex,
        new_key: newHex,
        reason: reason || 'key-rotation',
        timestamp: nowIso(),
      };

      const events = appendEvent(aid, rotationEvent);
      resolve(events);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Helper: read the KEL for an AID.
 */
function getKel(aid) {
  return new Promise((resolve, reject) => {
    try {
      const events = loadKel(aid);
      resolve(events);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  createKeriAid,
  generateCardanoKeyPair,
  bindCardanoKey,
  rotateCardanoKey,
  getKel,
};
