import { builtIn } from 'builtIn'
import { isString } from 'utilities/isString'

export const _match = (tag) => {
	return isString(tag) && builtIn._exists(tag) && builtIn.elements[tag] || tag;
}