// const { access } = require('./Permission.js');
const { Text, CalendarDay, Relationship } = require("@keystonejs/fields");
const ImageRelationship = require("../../fields/ImageRelationship");

module.exports = {
  fields: {
    name: {
      label: "標題",
      type: Text,
      isRequired: true,
    },
    date: {
      label: "日期",
      type: CalendarDay,
    },
    coverPhoto: {
      label: "封面",
      type: ImageRelationship,
      ref: "Image",
      many: false,
    },
    photos: {
      label: "圖片集",
      type: ImageRelationship,
      ref: "Image",
      many: true,
    },
    description: {
      label: "內文",
      type: Text,
      isMultiline: true,
    },
  },
};
