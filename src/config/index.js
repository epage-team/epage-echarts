export const types = {
  line: {
    text: '折线图',
    getter: (config = {}) => ({
      type: 'line',
      name: config.name,
      smooth: true,
      datasetIndex: config.datasetIndex,
      animation: false,
      areaStyle: {},
      lineStyle: {
        width: 1
      }
    })
  },
  bar: {
    text: '柱状图',
    getter: (config) => ({
      type: 'bar',
      name: config.name,
      smooth: true,
      datasetIndex: config.datasetIndex,
      animation: false,
      areaStyle: {},
      lineStyle: {
        width: 1
      }
    })
  },
  pip: {
    text: '饼状图',
    getter: () => ({
      type: 'pie',
      center: ['50%', '50%'],
      radius: '55%',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      // labelLine: {
      //   lineStyle: {
      //     color: 'rgba(255, 255, 255, 0.3)'
      //   },
      //   smooth: 0.2,
      //   length: 10,
      //   length2: 20
      // },
      data: [1, 2, 4, 44]
    })
  }
}

export default function seriesGetter (type, config) {
  if (type in types) {
    return types[type].getter(config)
  }
}
