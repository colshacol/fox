export const remove = (vdom) => (oldNode, parent) => {
	return parent.removeChild(parent.childNodes[0]);
};