import React from "react";
import Bar from "./components/Bar";

var regComps = {
  bar: Bar
};

export const registerComponent = (name, component) => {
  regComps[name] = component;
};

export const Components = (block) => {
  if (typeof regComps[block.component] !== "undefined") {
    return React.createElement(regComps[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => (
      <div>
        The component {block.component} can't be found or has not been created
        yet.
      </div>
    ),
    { key: block._uid }
  );
};
