import fox from 'fox';

export const builtIns = {
	animated: ({ props, children }) => {
		return (
			<div data-foxy-builtIn className="animated rollIn">
				{children.map(c => c)}
			</div>
		)
	}
}

