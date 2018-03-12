import { removeChildren } from "utilities/dom/removeChildren";
import { handleNode } from "core/handleNode";

export const introduce = ({ node, parent }) => {
	return removeChildren(parent) && parent.appendChild(handleNode(node()));
};