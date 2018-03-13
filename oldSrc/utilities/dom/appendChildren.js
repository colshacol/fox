export const appendChildren = (element, children) => {
  children && children.forEach((child, ii) => {
		if (Array.isArray(child)) return appendChildren(element, child);
    child && element.appendChild(child);
  });

  return element;
};