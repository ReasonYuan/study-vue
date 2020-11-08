/*
 * @Author: reason
 * @Date: 2020-10-10 10:17:42
 * @LastEditTime: 2020-10-10 11:11:03
 * @FilePath: /study-vue/src/_study/react/react.js
 * @Descripttion: 手写react
 */


const React = {
  createElement(tag, attrs, ...children) {
    return {
      tag, attrs, children
    }
  }
}


const ReactDom = {
  render (vdom, container) {
    container.innerHTML = ""
    _render(vdom, container)
  }
}

function _render(vdom, container) {
  let node;
  if (typeof vdom === 'string') {
    node = document.createTextNode(vdom)
  } else if (typeof vdom === 'object') {
    node = document.createElement(vdom.tag);
    setAttribute(node, vdom.attrs);
    vdom.children.forEach((childVdom) => render(childVdom, node));
  }
  container.appendChild(node)
}

function etAttribute(node, attrs) {
  for (let key in attrs) {
    if (key.startsWith("on")) {
      node[key.toLocaleLowerCase()] = attrs[key]
    } else if (key === "style") {
      Object.assign(node.style, attrs[key]);
    } else {
      node[key] = attrs[key]
    }
  }
}

export default React