import { builtIns } from "builtIn/builtIns";

// NOTE: Not implemented yet.
class Component {}

export const createElement = (tag, props, children) => {
	switch (typeof tag) {
		case 'string':
			return builtIns._exists(tag)
				? builtIns[tag](props, children)
				: document.createElement(tag);

		case 'function':
			return tag instanceof Component
				? new tag(props, children)
				: tag(props, children);
	}
};