import { builtIn } from "builtIn";

export const createNode = (tag, props, ...children) => {
	props = props || {}

	return {
		tag: prepareTag(tag),
		props: prepareProps(props),
		children: prepareChildren(children)
	};
};

const prepareTag = (tag) => {
	return builtIn._match(tag) || tag;
}

// NOTE: Placeholder for processing.
const prepareProps = (props) => {
	return props;
}

// NOTE: Placeholder for processing.
const prepareChildren = (children) => {
	return children;
}