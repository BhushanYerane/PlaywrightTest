export function clearMemory(): boolean {
  const gcFn = (globalThis as typeof globalThis & { gc?: () => void }).gc;

  if (typeof gcFn === 'function') {
    gcFn();
    return true;
  }

  return false;
}

export default { clearMemory };
