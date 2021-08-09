// const { access } = require('./Permission.js');
const { Text } = require('@keystonejs/fields')

module.exports = {
  fields: {
    url: {
      label: 'YouTube網址',
      type: Text,
      isRequired: true,
    },
  },
}
