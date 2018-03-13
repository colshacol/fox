import { builtIn } from 'builtIn'
import { isString } from 'utilities/isString'

export const _exists = (tag, cb) => {
	return isString(tag) && tag in builtIn.elements;
}