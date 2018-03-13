import { builtIn } from "builtIn";
import { fid } from 'utilities/fid'

export const createNode = (tag, props, ...children) => {
	props = props || {}

	return {
		tag: prepareTag(tag),
		props: prepareProps(props),
		children: prepareChildren(children),
		fid: fid(),
		parent: null
	};
};

const prepareTag = (tag) => {
	return tag;
}

// NOTE: Placeholder for processing.
const prepareProps = (props) => {
	return props;
}

// NOTE: Placeholder for processing.
const prepareChildren = (children) => {
	return children || [];
}