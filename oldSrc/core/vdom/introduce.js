import { removeChildren } from "utilities/dom/removeChildren";
import { handleNode } from "core/handleNode";
import { setFoxyId } from "utilities/setFoxyId";
import { fid } from "utilities/fid";
import { VDOM } from 'vdom'
import { firstTruthy } from 'utilities/firstTruthy'

const foo = (tree) => {
	
}

export const introduce = vdom => ({ node, parent, root }) => {
	let _node = { ...node(), parent: setFoxyId(parent) };
	const finalNode = handleNode(_node);
	
	root && VDOM.setMountPoint(parent), VDOM.setVirtualTree(_node);

	console.log({ _node, parent, root, finalNode})
	
	return firstTruthy([
		() => !parent.lastChild && parent.appendChild(finalNode),
		() => removeChildren(parent) && parent.appendChild(finalNode)
	])
};
