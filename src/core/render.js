import { removeChildren } from 'utilities/dom/removeChildren'

export const render = (element, node) => {
  removeChildren(node) && node.appendChild(element);
}