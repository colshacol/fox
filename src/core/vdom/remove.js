export const remove = (oldNode, parent) => {
	return parent.removeChild(parent.childNodes[0]);
};