/* This configuration follows YAML naming style. */
module.exports = {
  app: {
    project: 'chyihaur',
    applicationName: 'chyihaur',
  },
  admin: {
    name: 'Liyi',
    email: 'liyi@gmail.com',
    password: 'iloveleven',
  },
  mongoUri: 'mongodb+srv://liyi:0425@cms01.tpi0o.mongodb.net/database01',
  storage: {
    bucket: 'chyihaur-statics-01',
    assetUrlBase: 'https://storage.googleapis.com/chyihaur-statics-01/',
    imageUrlBase: 'assets/images/',
    imagePreviewUrl:
      'https://storage.googleapis.com/chyihaur-statics-01/assets/images',
  },
  session: {
    secure: false,
    cookieSecret:
      'c1038ce132ee87fd3878cb049bb9bd5aec892ec3b75a310a8584809e9edc4da1',
  },
}
