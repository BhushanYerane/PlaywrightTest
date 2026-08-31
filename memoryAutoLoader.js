let gcTriggered = false;

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
function triggerGarbageCollection() {
  if (gcTriggered) {
    return;
  }
  gcTriggered = true;
  const before = process.memoryUsage().heapUsed;
  const gcFn = globalThis.gc || global.gc;
  if (typeof gcFn === 'function') {
    gcFn();
    const after = process.memoryUsage().heapUsed;
    const released = Math.max(0, before - after);
    console.log('[Auto GC] Before GC:', formatMB(before));
    console.log('[Auto GC] After GC :', formatMB(after));
    console.log('[Auto GC] Released  :', formatMB(released));
  } else {
    console.log('[Auto GC] gc is not exposed. Run Node with --expose-gc.');
  }
}
process.on('beforeExit', triggerGarbageCollection);
process.on('exit', triggerGarbageCollection);
