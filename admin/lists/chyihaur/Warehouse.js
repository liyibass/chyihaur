const { Text } = require('@keystonejs/fields')
const HTML = require('../../fields/HTML')
module.exports = {
  fields: {
    description: {
      label: '內文',
      type: HTML,
    },
    descriptionApiData: {
      type: Text,
      default: '',
      adminConfig: {
        isReadOnly: true,
      },
    },
  },
  hooks: {
    resolveInput: async ({
      existingItem,
      originalInput,
      resolvedData,
      context,
      operation,
    }) => {
      if (resolvedData && resolvedData.description) {
        const draftData = JSON.parse(resolvedData.description)

        resolvedData.descriptionApiData = JSON.stringify(draftData.apiData)
      }

      return resolvedData
    },
  },
}
