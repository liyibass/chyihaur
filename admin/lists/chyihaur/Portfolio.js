// const { access } = require('./Permission.js');
const { Text, CalendarDay } = require('@keystonejs/fields')
const ImageRelationship = require('../../fields/ImageRelationship')
const HTML = require('../../fields/HTML')

module.exports = {
  fields: {
    name: {
      label: '標題',
      type: Text,
      isRequired: true,
    },
    date: {
      label: '日期',
      type: CalendarDay,
    },
    coverPhoto: {
      label: '封面',
      type: ImageRelationship,
      ref: 'Image',
      many: false,
    },
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
