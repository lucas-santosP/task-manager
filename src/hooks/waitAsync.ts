function waitAsync(time = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default waitAsync;
