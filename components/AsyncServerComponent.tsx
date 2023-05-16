function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function AsyncServerComponent() {
  await wait(2000);
  console.log('I am AsyncServerComponent, and I am being rendered');
  return <div>AsyncServerComponent</div>;
}
