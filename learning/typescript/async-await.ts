export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function example() {
  await wait(100);
  return 'done';
}
