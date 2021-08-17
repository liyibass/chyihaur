// const { access } = require('./Permission.js');
const { Text, Select } = require('@keystonejs/fields')

module.exports = {
  fields: {
    company: {
      label: '公司/品牌名稱',
      type: Text,
    },
    name: {
      label: '聯絡人姓名',
      type: Text,
    },
    line: {
      label: 'line ID',
      type: Text,
    },
    phone: {
      label: '電話',
      type: Text,
    },
    email: {
      label: 'email',
      type: Text,
    },
    business: {
      label: '欲洽談業務',
      type: Select,
      dataType: 'string',
      options: ['招牌', '指標', '企業識別', '環境視覺', '平面視覺', '影像'],
    },
    other: {
      label: '其他需求',
      type: Text,
    },
  },
  labelField: 'name',
}
