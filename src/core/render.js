import { removeChildren } from "utilities/dom/removeChildren";
import { handleNode } from "core/handleNode";

import { VDOM } from './vdom';

export const render = (node, parent) => {
	VDOM.render.introduce({ node, parent })
};