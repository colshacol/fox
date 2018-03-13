import { removeChildren } from "utilities/dom/removeChildren";
import { handleNode } from "core/handleNode";

import { introduce } from "./introduce";
import { remove } from "./remove";
import { register } from "./register";
import { firstTruthy } from 'utilities/firstTruthy'

let i = 0;

const findVirtualTreeInChildren = (node, children) => {
	if (!children) return [];
	console.log('checking children', children)
	let it = null;
	let i = 0;

	for (const child of children) {
		i++;
		if (it) console.log('it is here!', it)
		if (it) return it;
		if (child.fid === node.fid) console.log('its this kid!', i, child);
		if (child.fid === node.fid) return [i, child, child.parent];
		if (typeof child !== 'object') return;
		// return findVirtualTreeInChildren(node, child.children);
	}
}
const findVirtualTree = self => (node, children) => {
	console.log('checking root');
	return !(self.virtualTree.fid === node.fid)
	? findVirtualTreeInChildren(node, self.virtualTree.children)
	: [ 0, self.virtualTree ]
	// let it = null;

	// self.virtualTree.fid === node.fid && (it = self.virtualTree)

	// if (it) return it;
	// console.log('nope...', i++)



	// if (children) {
	// 	let it = null;
	// 	children.forEach(child => {
	// 		if (it) return it;
	// 		return !(child.fid === node.fid)
	// 		? self.findVirtualTree(node, child.children)
	// 		: node;
	// 	})

	// 	console.log(it)
	// 	return it;
	// }




}

const update = (self) => (node) => {
	const newNode = node.__update();
	const xx = handleNode(newNode);
	const oldNode = self.vmap.get(node.node.fid);
	const [ iterations, _child, pid ] = self.findVirtualTree(oldNode);
	// xx.parentNode = oldNode.parentNode
	// console.log(node.node.fid, { self, node, xx, oldNode, newNode })
	// oldNode.parent.replaceChild(newNode, oldNode.element)
	
	// console.log(pid, x, o === oldNode, { oldNode, o })
	// let parent = o.parent
	
	// console.log(parent);
	// console.log({ it })
	// const lll = {it,
	// 	o,
	// 	newNode,
	// 	oldNode}
	const parent = document.querySelector('[data-foxy-id="' + pid + '"]')
	console.log()
	
	let foo;
	for (let c of parent.children) { console.log(c === oldNode); c === oldNode && (foo = c) }
	console.log({ iterations, _child, pid, oldNode, newNode, xx, parent, foo })

		return firstTruthy([
			() => !parent.lastChild && parent.appendChild(handleNode(newNode)),
			() => parent.replaceChild(handleNode(newNode), parent.children[iterations - 1])
		])
}

const render = (self) => {
	return {
		remove: remove(self),
		introduce: introduce(self),
		update: update(self)
	};
}

const joinTree = (self) => (node) => {
	self.vmap.set(node.fid, node);
}

class VD {
	vmap = new Map();
	virtualTree;
	mountPoint;

	setVirtualTree = (tree) => this.virtualTree = tree;
	setMountPoint = (node) => this.mountPoint = node;

	render = render(this);
	update = update(this);
	register = register(this);
	joinTree = joinTree(this);
	findVirtualTree = findVirtualTree(this);
}

export const VDOM = window.VDOM = new VD();
// console.warn('FOX VIRTUAL DOM > ', VDOM)
