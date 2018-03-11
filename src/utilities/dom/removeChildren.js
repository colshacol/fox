import { removeNode } from 'utilities/dom/removeNode'

// Remove all children from a node.
export const removeChildren = node => {
  Array.from(node.childNodes).forEach(removeNode);
  return node;
};