import { animated } from './animated'
import { isString } from 'utilities/isString'

const _exists = (tag, cb) => {
	return isString(tag) && tag in builtIns;
	// return isString(tag) && tag in builtIns && cb();
}

export const builtIns = {
	animated,
	_exists
}