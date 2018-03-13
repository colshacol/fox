import { _match } from './_match'
// import { handleNode } from 'core/handleNode'

export const _parse = (self) => {
	const _builtIn = _match(self.tag)(self);

	_builtIn._update = (_self) => {
		const s = _self || self;
		return { ..._builtIn, ..._match(s.tag)(s) }
	}

	_builtIn.__isBuiltIn = true;
	return _builtIn
}
