import uuid from 'uuid'

import { handleNode } from 'core/handleNode'
import { createElement } from './createElement'
import { createChildren } from './createChildren'
import { applyProps } from 'utilities/dom/applyProps'

export const element = (data, parent) => {
	const _element = createElement(data.tag);
	const _children = createChildren(data.children, _element);
	applyProps(_element, data.props)

	return _element;
};