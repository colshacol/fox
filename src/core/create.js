import uuid from "uuid";

import { createElement } from "element/createElement";
import { applyProps } from "utilities/dom/applyProps";
import { appendChildren } from "utilities/dom/appendChildren";
import { createChildren } from "element/createChildren";
import { EMAP } from "store/EMAP";

export const create = (tag, props, ...children) => {
	props = props || {};
	const _fid = uuid();

	const _element = createElement(tag, props, children);
	const _children = createChildren(children);

	EMAP.set(_fid, { _element, tag, props, children });

	appendChildren(_element, _children);
	applyProps(_element, props, _fid);

	return _element;
}
