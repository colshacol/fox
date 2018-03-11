import { appendChildren } from 'utilities/dom/appendChildren'
import { applyProps } from 'utilities/dom/applyProps'
import { createChildElements } from 'element/createChildElements'
import { isHandler } from 'utilities/isHandler'
import { isString } from 'utilities/isString'

const elementWithProps = (tag, props) => {
  const element = document.createElement(tag);
  
  return element;
}

// Created element and recurses on children.
export const createElement = (tag, props, children) => {
  return isString(tag) && appendChildren(
    applyProps(document.createElement(tag), props),
    createChildElements(children)
  );
};