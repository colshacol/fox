export const firstTruthy = (values = []) => {
  return values.find(value => !!value);
}