import { isHandler } from "utilities/isHandler";
import { entriesOf } from "utilities/entriesOf";
import { handlerName } from "./handlerName";

export const applyAttributes = (element, props) => {
  entriesOf(props).forEach(prop => {
    isHandler(prop[0])
      ? element.setAttribute(handlerName(prop[0]), prop[1])
      : element.setAttribute(prop[0], prop[1]);
  });

  return element;
};
