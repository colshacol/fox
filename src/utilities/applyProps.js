import { applyHandler } from 'utilities/dom/applyHandler'
import { isHandler } from "utilities/isHandler";
import { entriesOf } from "utilities/entriesOf";
import { fileArray } from 'utilities/fileArray';
import { handlerName } from 'utilities/dom/handlerName';

export const applyProps = ({$element, props = {}, _fid}) => {
	props = props || {};
	console.log({ $element,  props })
	entriesOf(props).forEach(applyPropTo($element))
};

const applyPropTo = (element) => ([ name, value ]) => {
	isHandler(name) && applyHandler(element, handlerName(name), value)

	if (name === 'className') {
		const unique = []
		return (element[name] = value.split(' ').filter(cn => {
			return unique.includes(cn)
				? false
				: unique.push(cn), true;
		}).join(' '));
	}

	element[name] = value;
}