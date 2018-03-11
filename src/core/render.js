import { removeChildren } from 'utilities/dom/removeChildren'

// Remove all original children of the render target
// and mount the app in their place.
export const render = (element, node) => {
  removeChildren(node) && node.appendChild(element);
};