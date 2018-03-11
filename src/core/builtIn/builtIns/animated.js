import fox from "fox";

export const animated = (props, children, _fid) => {
	return <div data-foxy-bi className="animated rollIn">{children}</div>
}