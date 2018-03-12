import { builtIn } from 'builtIn';

// TODO: Handle custom components.
export const component = data => {
	return element({
		tag: data.tag({ props, children }),
		props: data.props,
		children: data.children
	});
};