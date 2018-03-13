import { handleNode } from "core/handleNode";
import { isString } from 'utilities/isString'
import { isArray } from 'utilities/isArray'
// import { isFalsey } from 'utilities/isFalsey'
import { firstTruthy } from "utilities/firstTruthy";

const isFalsey = (target) => {
	return !target;
}

const isTruthy = (target) => {
	return !!target;
}

export const createChildren = (children) => {
	console.log({ children })
	if (children) {
		if (isString(children)) return document.createTextNode(children);
		if (isArray(children)) return children.forEach(c => createChildren(c));

		const _children = handleNode(children)
		return _children;
	}

	return [];
};
