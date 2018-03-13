import { removeChildren } from "utilities/dom/removeChildren";
import { firstTruthy } from "utilities/firstTruthy";
import { isString } from "utilities/isString";
import { isFunction } from "utilities/isFunction";
import { textNode } from "utilities/textNode";
import { component } from 'component';
import { element } from 'element';
import { VDOM } from "vdom";
import { fid } from 'utilities/fid'
import { builtIn } from 'builtIn'
import { setFoxyId } from 'utilities/setFoxyId'

export const handleNode = (node) => {
	VDOM.register(node);

	return firstTruthy([
		() => builtIn._exists(node.tag) && builtIn(node),
		() => isString(node) && textNode(node),
		() => isString(node.tag) && element(node),
		() => isFunction(node.tag) && component(node),
		() => isFunction(node) && handleNode({ })
	]);
};