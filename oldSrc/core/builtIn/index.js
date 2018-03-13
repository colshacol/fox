import { isString } from "utilities/isString";
import { handleNode } from "core/handleNode";
import { animated } from "./builtIns/animated";
import { _exists } from "./utilities/_exists";
import { _match } from "./utilities/_match";
import { _parse, _update } from "./utilities/_parse";
import { VDOM } from 'vdom'

const _builtIn = {
	_exists,
	_match,

	elements: {
		animated
	}
};

const _mergeProps = (builtInProps = {}, nodeProps = {}) => {
	const unique = []

	console.log(builtInProps, nodeProps);

	const bi = typeof builtInProps.className === 'string' && builtInProps.className.split(' ').map(cn => {
		console.log(cn);
		!unique.includes(cn) && unique.push(cn);
		console.log(unique)
	});

	const n = typeof nodeProps.className === 'string' && nodeProps.className.split(' ').map(cn => {
		console.log(cn);
		!unique.includes(cn) && unique.push(cn);
		console.log(unique)
	});

	const className = unique.join(' ')
	console.log(className)

	// debugger;


	const x = {
		...builtInProps,
		...nodeProps,
		className
	};

	// debugger;

	return x;
};

const _mergeState = (a, b) => {
	return b;
}

class BuiltIn {
	updateCount = 0;

	state = {
		name: 'TommyBoy'
	}

	get __origin() {
		this.node.state = this.state;
		const origin = 
		origin.parent = this.node.parent;
		origin.fid = this.node.fid;
		origin.props = _mergeProps(origin.props, this.node.props);
		return origin;
	}

	constructor(node) {
		this.node = node;

		this.node.props.onClick = () => {
			this.setState()
		}

		return this.render(this);
	}

	__update = () => {
		console.log('__update')
		this.updateCount++;
		return this.__origin;
	}

	setState(newState) {
		console.log('__setState')
		Object.assign(this.state, {
			name: this.state.name = this.state.name.split('').reverse().join('')
		})

		VDOM.update(this);
	}

	render(self) {
		console.log('__render', self)
		return handleNode(self.__origin);
	}
}

const state = {
	name: 'poopey eater'
}

const __builtIn = (node) => {
	const b = _match(node.tag)(node, state);
	b.parent = node.parent;
	b.fid = node.fid;
	b.props = _mergeProps(b.props, node.props);
	return b;
}

export const builtIn = new Proxy(BuiltIn, {
	get(target, prop, receiver) {
		return _builtIn[prop];
	},

	apply: function(target, thisArg, [node]) {
		return __builtIn(node);
	}
});
