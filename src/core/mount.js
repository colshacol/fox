import fox from 'fox';
import { applyProps } from "utilities/applyProps";
import { removeChildren } from "utilities/dom/removeChildren";
import { component } from './component'
import { element } from './element'
import { builtIn } from './builtIn'

export const textNode = ({ _element, $parent }) => {
	return document.createTextNode(_element);
}

export const mount = (_element, $parent, root) => {

	const $element = do {
		if (typeof _element === "string") {
			textNode({ _element, $parent });
		} else if (typeof _element.tag === "function") {
			component({ _element, $parent });
		} else {
			element({ _element, $parent });
		}
	};

	root
		? removeChildren($parent) && $parent.appendChild($element)
		: $parent.appendChild($element);
};