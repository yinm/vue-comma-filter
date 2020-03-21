export const comma = (input: number) => {
  return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
