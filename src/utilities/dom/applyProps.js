import { applyHandler } from 'utilities/dom/applyHandler'
import { isHandler } from "utilities/isHandler";
import { entriesOf } from "utilities/entriesOf";
import { fileArray } from 'utilities/fileArray'
import { handlerName } from "./handlerName";

export const applyProps = (element, props, _fid) => {
	entriesOf(props).forEach(applyPropTo(element))

	// element._fid = _fid;
  return element;
};

const applyPropTo = (element) => ([ name, value ]) => {
	isHandler(name)
		? applyHandler(element, handlerName(name), value)
		: element[name] = value
}