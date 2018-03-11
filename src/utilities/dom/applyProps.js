import { applyHandler } from 'utilities/dom/applyHandler'
import { isHandler } from "utilities/isHandler";
import { entriesOf } from "utilities/entriesOf";
import { fileArray } from 'utilities/fileArray'
import { handlerName } from "./handlerName";

export const applyProps = (element, props) => {
	// const [ handlers, values ] = fileArray(entriesOf(props), (item) => {
	// 	return isHandler(item);
	// })

	entriesOf(props).forEach(([ name, value ]) => {
		isHandler(name)
			? applyHandler(element, handlerName(name), value)
			: element[name] = value
	})



  // entriesOf(props).forEach(prop => {
  //   isHandler(name)
  //     ? element.setAttribute(handlerName(name), value)
  //     : element.setAttribute(name, value);
  // });

  return element;
};