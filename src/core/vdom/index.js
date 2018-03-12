import { removeChildren } from "utilities/dom/removeChildren";
import { handleNode } from "core/handleNode";

import { introduce } from './introduce'
import { remove } from './remove'

const VMAP = new Map();

class VDOM {
	render = {
		remove,
		introduce
	}

	register = ({ element, parent, node }) => {
		VMAP.set(element, { parent, node })
		console.log(VMAP);
	}
}

const _Vdom = new VDOM()

export { _Vdom as VDOM }