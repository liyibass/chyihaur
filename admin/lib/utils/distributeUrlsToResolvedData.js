const resolvedDataUrlList = [
  'urlOriginal',
  'urlDesktopSized',
  'urlMobileSized',
  'urlTabletSized',
  'urlTinySized',
]
const metaUrlList = [
  'urlOriginal',
  'urlDesktopSized',
  'urlMobileSized',
  'urlTabletSized',
  'urlTinySized',
]

const distributeUrlsToResolvedData = (resolvedData, meta) => {
  resolvedDataUrlList.forEach((urlItem, index) => {
    // resolvedData.urlOriginal = meta.url.urlOriginal
    resolvedData[urlItem] = meta.url[metaUrlList[index]]
  })
}

module.exports = { distributeUrlsToResolvedData }
