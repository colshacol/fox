export const appendChildren = (element, children = []) => {
  children.forEach(child => {
    child && element.appendChild(child);
  });

  return element;
};