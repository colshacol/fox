import fox from "fox";

export const animated = ({ props, children }, state) => {
	// console.log('state...', { state, props, children })
	return (
		<div data-foxy-builtIn className="animated rollIn">
			{children}
		</div>
	);
};
