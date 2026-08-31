function clearMemory() {
  const gcFn = globalThis.gc || global.gc;

  if (typeof gcFn === 'function') {
    gcFn();
    return true;
  }

  return false;
}

module.exports = {
  clearMemory,
};
