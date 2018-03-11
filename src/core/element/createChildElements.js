import { isString } from 'utilities/isString'

// Generate a new array of child nodes with
// string children being converted to text nodes.
export const createChildElements = (children) => {
  children = children || [];

  return children.map(child => {
    return isString(child) ? document.createTextNode(child) : child;
  });
};