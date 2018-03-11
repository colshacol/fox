let i = 0;

export const appendChildren = (element, children) => {
	// NOTE: builtIns (bi) handle their own children.
	if (element['data-foxy-bi']) return;

  children.forEach((child, ii) => {
		if (Array.isArray(child)) return appendChildren(element, child);
    child && element.appendChild(child);
  });

  return element;
};