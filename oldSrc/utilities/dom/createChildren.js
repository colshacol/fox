import { isString } from 'utilities/isString'
import { firstTruthy } from 'utilities/firstTruthy'
import { isArray } from 'utilities/isArray'

// NOTE: Mainly just handles text nodes.
export const createChildren = (children) => {
	return firstTruthy([
		() => isString(children) && createTextNode(children),
		() => isArray(children) && children.map(createChildren),
	], children)
};

