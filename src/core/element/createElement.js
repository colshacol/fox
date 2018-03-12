import { builtIns } from "builtIn/builtIns";
import { Wrapper } from '../Wrapper';

export const createElement = (tag, props, children) => {
	switch (typeof tag) {
		case 'string':
			return builtIns._exists(tag)
				? builtIns[tag](props, children)
				: document.createElement(tag);

		case 'function':
			return tag instanceof Wrapper
				? (new tag(props, children)).render()
				: tag(props, children);
	}
};