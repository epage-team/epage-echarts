import { schema } from 'epage-core'

export default class EchartsLineSchema extends schema.BaseSchema {
  constructor (props) {
    super() // super 不传参数时  $init 不会执行
    this.option = {
      title: {
        text: '折线图'
      },
      url: '',
      adapter: '',
      dataset: [],
      tooltip: {
        show: true,
        trigger: 'item'
        // type: 'value'
      },
      toolbox: {},
      grid: [{}],
      xAxis: [{
        show: true,
        type: 'category',
        position: 'bottom',
        name: 'x'
      }],
      yAxis: [{
        show: true,
        type: 'value',
        position: 'left',
        name: 'y'
      }],
      series: [{
        name: 'name',
        type: 'line',
        smooth: true,
        // seriesLayoutBy: 'column',
        // xAxisIndex: 1,
        // yAxisIndex: 1,
        datasetIndex: 0,
        animation: false,
        areaStyle: {},
        lineStyle: {
          width: 1
        }
      }]
    }
    this.create(props) // 初始化schema、widget、descriptor
  }
}

// 静态配置，同类widget公有
Object.assign(EchartsLineSchema, {
  title: '折线图',
  widget: 'echarts-line', // 组件类型的唯一标识，相同时表示同一个组件 必须和 this.widget相同
  preview: '',
  logic: {
    value: [],
    // event: ['focus', 'blur', 'change']
    event: []
  }
})
