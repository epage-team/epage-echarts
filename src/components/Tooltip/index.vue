<template lang='pug'>
div
  FormItem(label='show')
    i-switch(v-model='tooltip.show')
      span(slot='open') 开
      span(slot='close') 关
  template(v-if='tooltip.show')
    FormItem(label='trigger')
      RadioGroup(size='small' v-model='tooltip.trigger')
        Radio(label='item' title='数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用') item
        Radio(label='axis' title='坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用') axis
        Radio(label='none' title='什么都不触发') none
    FormItem(label='type')
      RadioGroup(size='small' v-model='tooltip.type')
        Radio(label='category') category
        Radio(label='value') value
        Radio(label='time') time
        Radio(label='log') log
    FormItem(label='name')
      Input(
        size='small'
        v-model='tooltip.name'
      )
  slot
</template>
<script>
export default {
  props: {
    tooltip: {
      type: Object,
      default: () => ({
        show: true
      })
    }
  }
}
</script>
