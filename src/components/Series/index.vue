<template lang='pug'>
div
  template(v-if='series')
    FormItem(label='name')
      Input(size='small' v-model='series.name')
    FormItem(label='smooth')
      i-switch(v-model='series.smooth')
        span(slot='open') 开
        span(slot='close') 关
    FormItem(label='xAxisIndex')
      InputNumber(size='small' v-model='series.xAxisIndex' :step='1' :min='1')
    FormItem(label='yAxisIndex')
      InputNumber(size='small' v-model='series.yAxisIndex' :step='1' :min='1')
    FormItem(label='datasetIndex')
      InputNumber(size='small' v-model='series.datasetIndex' :step='1' :min='0')
    FormItem(label='seriesLayoutBy')
      RadioGroup(size='small' v-model='series.seriesLayoutBy')
        Radio(label='column') column
        Radio(label='row') row
    FormItem(label='animation')
      i-switch(v-model='series.animation')
        span(slot='open') 开
        span(slot='close') 关

    h4 areaStyle
    FormItem(label='areaStyle')
      i-switch(v-model='areaStyleVisible')
        span(slot='open') 开
        span(slot='close') 关
    template(v-if='series.areaStyle')
      FormItem(label='width')
        Input(size='small' v-model='series.areaStyle.width')

    h4 lineStyle
    template(v-if='series.lineStyle')
      FormItem(label='name')
        Input(size='small' v-model='series.lineStyle.name')
      FormItem(label='width')
        Input(size='small' v-model='series.lineStyle.width')
  slot
</template>
<script>
import { helper } from 'epage-core'

export default {
  props: {
    store: {
      type: Object,
      default: () => ({})
    },
    series: {
      type: Object,
      default: () => ({
        name: '',
        type: 'line',
        animation: false,
        areaStyle: {},
        markArea: {
          silent: true,
          data: []
        }
      })
    }
  },
  data () {
    return {
      areaStyleVisible: false,
      areaStyleCache: {},
      lineStyleVisible: false,
      lineStyleCache: {}
    }
  },
  watch: {
    areaStyleVisible (value) {
      this.updateStyle('area', value)
    },
    lineStyleVisible (value) {
      this.updateStyle('line', value)
    }
  },
  mounted () {
    this.initStyle('line')
    this.initStyle('area')
  },
  methods: {
    updateStyle (type, value) {
      const style = this.series[type + 'Style']
      this[type + 'StyleCache'] = style ? helper.jsonClone(style) : {}
      const newValue = value ? this[type + 'StyleCache'] : undefined

      this.$emit(`on-${type}-change`, newValue)
    },
    initStyle (type) {
      const style = this.series[type + 'Style']
      if (style) {
        this[type + 'StyleCache'] = helper.jsonClone(style)
        this[type + 'StyleVisible'] = true
      } else {
        this[type + 'StyleCache'] = {}
        this[type + 'StyleVisible'] = false
      }
    }
  }
}
</script>
