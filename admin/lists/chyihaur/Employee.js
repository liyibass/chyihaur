// const { access } = require('./Permission.js');
const { Text, Relationship } = require('@keystonejs/fields')
const ImageRelationship = require('../../fields/ImageRelationship')

module.exports = {
  fields: {
    name: {
      label: '名字',
      type: Text,
      isRequired: true,
    },
    engName: {
      label: '英文名字',
      type: Text,
    },
    position: {
      label: '職位',
      type: Relationship,
      ref: 'Position.employee',
      isRequired: true,
    },
    snapshotUrl: {
      label: '大頭照',
      type: ImageRelationship,
      ref: 'Image',
      many: false,
    },
    headerUrl: {
      label: '人物照',
      type: ImageRelationship,
      ref: 'Image',
      many: false,
    },
  },
  adminConfig: {
    defaultColumns: 'name, position,',
    defaultSort: '-name',
  },
  labelField: 'name',
}
