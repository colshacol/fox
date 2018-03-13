import { fid } from 'utilities/fid'
import { isString } from 'utilities/isString'

// sitrep
const setFoxyId = (node) => {
	!isString(node) && (node.fid = node.fid || fid());
	return node;
}

export { setFoxyId }