function capitalizeText(string: string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}

export default capitalizeText;
