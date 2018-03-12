import { isString } from 'utilities/isString'

import { animated } from './builtIns/animated'
import { _exists } from './utilities/_exists'
import { _match } from './utilities/_match'

export const builtIn = {
	elements: {
		animated
	},
	_match,
	_exists
}