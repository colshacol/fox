import fox from 'fox';
import { applyProps } from "utilities/applyProps";
import { removeChildren } from "utilities/dom/removeChildren";
import { mount } from './mount'

export const component = ({ _element, $parent }) => {	
	const $newElement = _element._createdElement = _element.tag(_element);
	const element = document.createElement($newElement.tag);
	
	$newElement.children && $newElement.children.forEach(child => {
		mount(child, element);
	})
	
	return element;
};