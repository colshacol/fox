import fox from 'fox';
import { applyProps } from "utilities/applyProps";
import { removeChildren } from "utilities/dom/removeChildren";
import { builtIns } from "./builtIn";

export const create = (tag, props = {}, ...children) => {
	if (typeof tag === 'function') return tag({ props, children })
	if (typeof tag === 'string' && tag in builtIns) {
		const b = builtIns[tag]({ props, children })
		tag = b.tag;
		props = { ...props, ...b.props };
		children = b.children[0];
	}

	return {
		tag,
		props,
		children
	};
};