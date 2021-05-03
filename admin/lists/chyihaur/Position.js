// const { access } = require('./Permission.js');
const { Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      label: "職位中文名稱",
      type: Text,
      isRequired: true,
    },
    engName: {
      label: "職位英文名稱",
      type: Text,
      isRequired: true,
    },
  },
};
