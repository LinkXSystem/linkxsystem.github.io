import Box from './box';

const elements = {
  Box,
};

const install = function() {
  elements.forEach(element => {
    customElements.define(element.name, element);
  });
};

if (window !== undefined) {
  install();
}

module.exports = Box;
