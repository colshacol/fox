import fox from 'fox'

const builtIns = {
	timmy(props, children) {
		console.log({ props })
		return <img src={props.src} alt="timmy rocks" />
	}
}

export const createBuiltIn = (tag, props, children) => {
	return tag in builtIns && builtIns[tag](props, children);
}