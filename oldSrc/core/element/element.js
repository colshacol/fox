
import bows from 'bows';

import { fid } from 'utilities/fid'
import { handleNode } from 'core/handleNode'
import { createElement } from './createElement'
import { createChildren } from './createChildren'
import { applyProps } from './applyProps'
import { isString } from 'utilities/isString'
import { VDOM } from 'vdom'

export const element = (node) => {
	const e = createElement(node.tag);
	node.children = node.children.map(c => { isString(c) && document.createTextNode(c) || (c.node = handleNode(c)) })
	node.children.forEach(c => c && e.appendChild(c.node))
	applyProps(e, node.props, node.fid)
	VDOM.joinTree(node);

	return e;
};