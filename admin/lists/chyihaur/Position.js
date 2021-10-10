// const { access } = require('./Permission.js');
const { Text, Relationship, Integer } = require('@keystonejs/fields')

module.exports = {
  fields: {
    name: {
      label: '職位中文名稱',
      type: Text,
      isRequired: true,
    },
    engName: {
      label: '職位英文名稱',
      type: Text,
      isRequired: true,
    },
    order: {
      label: '前台顯示順序',
      type: Integer,
      isRequired: true,
      // isUnique: true,
    },
    employee: {
      label: '員工',
      type: Relationship,
      ref: 'Employee.position',
      many: true,
    },
  },
  adminConfig: {
    defaultColumns: 'name,engName,order',
    defaultSort: 'order',
  },
}
