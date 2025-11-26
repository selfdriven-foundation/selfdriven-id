// src/keriStore.js
// Very simple JSON file-based KERI-style event log store.
// This is intentionally minimal and synchronous to keep it readable.

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Returns the file path for the KEL of a given AID.
 */
function kelPathForAid(aid) {
  ensureDataDir();
  // Replace characters that might be unsafe in filenames
  const safeAid = aid.replace(/[^a-zA-Z0-9_-]/g, '_');
  return path.join(DATA_DIR, `kel-${safeAid}.json`);
}

/**
 * Load the event log (KEL) for an AID.
 * If file does not exist, returns [].
 */
function loadKel(aid) {
  const filePath = kelPathForAid(aid);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse KEL JSON for AID:', aid, e);
    return [];
  }
}

/**
 * Save an array of events as the KEL for this AID.
 */
function saveKel(aid, events) {
  const filePath = kelPathForAid(aid);
  fs.writeFileSync(filePath, JSON.stringify(events, null, 2), 'utf8');
}

/**
 * Append a single event to the KEL for this AID.
 */
function appendEvent(aid, event) {
  const events = loadKel(aid);
  events.push(event);
  saveKel(aid, events);
  return events;
}

module.exports = {
  loadKel,
  saveKel,
  appendEvent,
};
