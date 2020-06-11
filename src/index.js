export const EchartsLine = require('./widgets/line')
export const EchartsBar = require('./widgets/bar')

export default [{
  title: 'Echarts',
  key: 'echarts',
  widgets: [
    EchartsLine,
    EchartsBar
  ]
}]
