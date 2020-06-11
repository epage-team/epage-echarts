<template lang="pug">
.form-demo
  div(ref='form')

</template>
<script>
import widgets, { Render, Epage } from 'epage-iview'
import customWidgets from '@'
import mockSchema from './schema.json'

const { helper } = Epage
const myWidgets = helper.mergeWidgets(customWidgets, ...widgets)

export default {
  mounted () {
    this.getSchema().then(schema => {
      // 创建设计器
      this.designCharts(schema)
    })
  },
  methods: {
    getSchema () {
      return Promise.resolve(mockSchema)
    },
    designCharts (schema) {
      const el = this.$refs.form
      return new Epage({ el, widgets: myWidgets, schema, Render })
    }
  }
}
</script>
<style lang="less">
.form-demo{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
