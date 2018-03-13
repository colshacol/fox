export const applyHandler = (element, name, handler) => {
	element.addEventListener(name, handler);
	return element;
}