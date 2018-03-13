import fox from 'fox';
import { applyProps } from "utilities/applyProps";
import { removeChildren } from "utilities/dom/removeChildren";
import { mount } from './mount'

export const element = ({ _element, $parent }) => {
	const element = _element.$element = document.createElement(_element.tag);

	_element.children && _element.children.forEach(child => {
		mount(child, element);
	})

	applyProps(_element)
	
	return element;
};