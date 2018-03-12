import { removeChildren } from "utilities/dom/removeChildren";
import { firstTruthy } from "utilities/firstTruthy";
import { isString } from "utilities/isString";
import { isFunction } from "utilities/isFunction";
import { textNode } from "utilities/textNode";
import { component } from 'component';
import { element } from 'element';

export const handleNode = (data, parent) => {
	return firstTruthy([
		() => isString(data) && textNode(data),
		() => isString(data.tag) && element(data, parent),
		() => isFunction(data.tag) && component(data, parent),
		() => isFunction(data) && handleNode(data(), parent)
	]);
};