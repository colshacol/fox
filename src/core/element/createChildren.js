import { isString } from 'utilities/isString'

// NOTE: Mainly just handles text nodes.
export const createChildren = (children) => {
  children = children || [];

  return children.map(child => {
		if (Array.isArray(child)) return createChildren(child);
    return isString(child) ? document.createTextNode(child) : child;
  });
};