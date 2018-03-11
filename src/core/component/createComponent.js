import { appendChildren } from "utilities/dom/appendChildren";
import { applyProps } from 'utilities/dom/applyProps'
import { createChildElements } from "element/createChildElements";
import { isFunction } from "utilities/isFunction";

export const createComponent = (component, props, children) => {
  return (
    isFunction(component) &&
    appendChildren(
      applyProps(component(props), props),
      createChildElements(children)
    )
  );
};
