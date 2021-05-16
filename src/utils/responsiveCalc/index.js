export default (value) => {
  if (isNaN(value)) return value;

  return `${value * 100}%`;
};
