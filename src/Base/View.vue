<template lang="pug">
.ep-widget.ep-widget-echarts
  .ep-widget-echarts-node(ref='echarts')

</template>
<script>
import { viewExtend } from 'epage-iview'
import echarts from 'echarts'

export default {
  extends: viewExtend,
  data () {
    return {
      chart: {},
      list: []
    }
  },
  watch: {
    'schema.option': {
      handler (op) {
        this.chart.setOption(op)
      },
      deep: true
    }
  },
  async mounted () {
    const el = this.$refs.echarts
    this.chart = echarts.init(el)
    const option = await this.getData()
    const { url, adapter, ...others } = option

    this.chart.setOption(others)
  },
  methods: {
    async getData () {
      return await this.schema.option
    }
  }
}
</script>
