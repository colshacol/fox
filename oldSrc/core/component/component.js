import { builtIn } from "builtIn";
import { element } from "element";

class Component {
	constructor(props, children) {
		this.props = props;
		this.children = children;
		this.state = this.state || {};
	}

	setState(partialState) {
		this.state = Object.assign({}, this.state, partialState);
		updateInstance(this.__internalInstance);
	}
}

function updateInstance(internalInstance) {
	const parentDom = internalInstance.dom.parentNode;
	const element = internalInstance.element;
	reconcile(parentDom, internalInstance, element);
}

function createPublicInstance(element, internalInstance) {
	const { type, props } = element;
	const publicInstance = new type(props);
	publicInstance.__internalInstance = internalInstance;
	return publicInstance;
}

// TODO: Handle custom components.
export const component = node => {
	return element({
		tag: node.tag({ props: node.props, children: node.children }),
		props: node.props,
		children: node.children
	});
};
