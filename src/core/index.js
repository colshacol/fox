import fox from 'fox';
import { applyProps } from "utilities/applyProps";
import { removeChildren } from "utilities/dom/removeChildren";

const builtIns = {
	animated: ({ props, children }) => {
		console.group('animated()', { props, children })
		return (
			<div data-foxy-builtIn className="animated rollIn">
				{children.map(c => c)}
			</div>
		)
	}
}

export const create = (tag, props = {}, ...children) => {
	// const className = getClassNames(props.className);
	if (typeof tag === 'function') return tag({ props, children })
	if (typeof tag === 'string' && tag in builtIns) {
		console.log('BUILTIN', { tag, props, children })
		let b = builtIns[tag]({ props, children })
		tag = b.tag;
		props = { ...props, ...b.props };
		children = b.children[0];
	}

	// if (Array.isArray(children[0])) children = children[0]

	return {
		tag,
		props,
		children
	};
};

export const mount = (_element, $parent, root) => {
	// console.group("mount()", { _element, $parent });

	const $element = do {
		if (typeof _element === "string") {
			console.log("is textNode");
			textNode({ _element, $parent });
		} else if (typeof _element.tag === "function") {
			console.log("is component");
			component({ _element, $parent });
		} else {
			console.log("is element", { _element });
			element({ _element, $parent });
		}
	};

	console.log({ $element, _element })

	root
		? removeChildren($parent) && $parent.appendChild($element)
		: $parent.appendChild($element);
};

export const textNode = ({ _element, $parent }) => {
	// console.group("textNode()", { _element, $parent });

	return document.createTextNode(_element);
}

export const element = ({ _element, $parent }) => {
	// console.group("element()", { _element, $parent });

	const element = _element.$element = document.createElement(_element.tag);

	console.log({ _element, element })
	
	_element.children && _element.children.forEach(child => {
		mount(child, element);
	})

	applyProps(_element)
	
	return element;
};

export const component = ({ _element, $parent }) => {
	// console.group("component()", { _element, $parent });
	
	const $newElement = _element._createdElement = _element.tag(_element);
	const element = document.createElement($newElement.tag);

	console.log({ $newElement, element })
	
	$newElement.children && $newElement.children.forEach(child => {
		mount(child, element);
	})
	
	return element;
};
