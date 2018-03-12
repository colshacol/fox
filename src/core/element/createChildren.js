import { handleNode } from "core/handleNode";
import { VDOM } from 'vdom'

export const createChildren = (children, parent) => {
	return children.map(node => {
		const element = handleNode(node, parent);
		VDOM.register({ element, parent, node })
		parent.appendChild(element);
		return element;
	})
}