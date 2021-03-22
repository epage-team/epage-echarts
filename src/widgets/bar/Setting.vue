<template lang="pug">
setting-form(:store='store')
  span(slot='rule')
  span(slot='placeholder')
  span(slot='name')
  span(slot='disabled')
  span(slot='help')
  span(slot='label')
  span(slot='description')

  Collapse(:value='"title"')
    Panel(name='title') title
      echarts-title(slot='content' :title='selectedSchema.option.title')

    Panel(name='xAxis') xAxis
      template(slot='content')
        echarts-axis(
          v-for='(axis, k) in selectedSchema.option.xAxis'
          :key='k + "_"'
          type='x'
          :axis='axis'
        )

    Panel(name='yAxis') yAxis
      template(slot='content')
        echarts-axis(
          v-for='(axis, k) in selectedSchema.option.yAxis'
          :key='k + "-"'
          type='y'
          :axis='axis'
        )

    Panel(name='grid') grid
      template(slot='content')
        echarts-grid(
          v-for='(grid, k) in selectedSchema.option.grid'
          :key='"-" + k'
          :grid='grid'
        )

    Panel(name='tooltip') tooltip
      echarts-tooltip(slot='content' :tooltip='selectedSchema.option.tooltip')

    Panel(name='series') series
      template(slot='content')
        Collapse(:value='"series-0"')
          Panel(name='series' v-for='(item, index) in series' :key='index') {{'series-' + index}}
            echarts-series(
              slot='content'
              :series='item'
              :store='store'
              @on-area-change='onAreaChange(index, ...arguments)'
            )
        FormItem(label=' ')
          Button(size='small' @click='addSeries') 添加series

    Panel(name='dataset') dataset
      echarts-dataset(
        slot='content'
        :store='store'
        :schema='selectedSchema'
      )

</template>
<script>
import { setting } from 'epage-iview'
import config, { types } from '../../config'
import EchartsTitle from './../../components/Title/index.vue'
import EchartsAxis from './../../components/Axis/index.vue'
import EchartsGrid from './../../components/Grid/index.vue'
import EchartsTooltip from './../../components/Tooltip/index.vue'
import EchartsSeries from './../../components/Series/index.vue'
import EchartsDataset from './../../components/Dataset/index.vue'

const { SettingForm, settingExtend } = setting

export default {
  components: {
    SettingForm,
    EchartsTitle,
    EchartsAxis,
    EchartsGrid,
    EchartsTooltip,
    EchartsSeries,
    EchartsDataset
  },
  extends: settingExtend,
  data () {
    return {
      types: Object.keys(types).map(t => ({ type: t, text: types[t].text }))
    }
  },
  computed: {
    series () {
      return this.selectedSchema.option.series
    }
  },
  methods: {
    addSeries () {
      const { key, option } = this.selectedSchema
      const newSeries = [...option.series]

      newSeries.push(config('bar', { datasetIndex: newSeries.length }))
      this.store.updateWidgetOption(key, { series: newSeries })
    },
    onAreaChange (index, area) {
      const { key, option } = this.selectedSchema
      const newSeries = [...option.series]

      newSeries[index].areaStyle = area
      this.store.updateWidgetOption(key, { series: newSeries })
    }
  }
}
</script>
