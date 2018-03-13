export const create = (tag, props = {}, ...children) => {
	// const className = getClassNames(props.className);

	return {
		tag,
		props,
		children
	};
};

export const mount = (_element, $parent) => {
	console.group("mount()", { _element, $parent });

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

	console.log({ $element })
	$parent.appendChild($element);
};

export const textNode = ({ _element, $parent }) => {
	console.group("textNode()", { _element, $parent });

	return document.createTextNode(_element);
}

export const element = ({ _element, $parent }) => {
	console.group("element()", { _element, $parent });

	const element = document.createElement(_element.tag);

	console.log({ _element, element })
	
	_element.children && _element.children.forEach(child => {
		mount(child, element);
	})
	
	return element;
};

export const component = ({ _element, $parent }) => {
	console.group("component()", { _element, $parent });
	
	const $newElement = _element.tag(_element);
	const element = document.createElement($newElement.tag);

	console.log({ $newElement, element })
	
	$newElement.children && $newElement.children.forEach(child => {
		mount(child, element);
	})
	
	return element;
};
