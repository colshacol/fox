import { createComponent } from "component/createComponent";
import { createElement } from "element/createElement";
import { createBuiltIn } from "builtIn/createBuiltIn";
import { isString } from "utilities/isString";
import { isFunction } from "utilities/isFunction";
import { firstTruthy } from "utilities/firstTruthy";

// Determine if it should create a regular DOM element
// or if the element is actually a component.
export const create = (tag, props, ...children) => {
  props = props || {};

  return firstTruthy([
    createBuiltIn(tag, props, children),
    createElement(tag, props, children),
    createComponent(tag, props, children),
    tag
  ]);
};
