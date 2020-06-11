<template lang='pug'>
div
  FormItem(label='show')
    i-switch(v-model='axis.show')
      span(slot='open') 开
      span(slot='close') 关
  template(v-if='axis.show')
    FormItem(label='position')
      RadioGroup(size='small' v-model='axis.position')
        template(v-if='type==="x"')
          Radio(label='top') top
          Radio(label='bottom') bottom
        template(v-else-if='type==="y"')
          Radio(label='left') left
          Radio(label='right') right
    FormItem(label='type')
      RadioGroup(size='small' v-model='axis.type')
        Radio(label='category') category
        Radio(label='value') value
        Radio(label='time') time
        Radio(label='log') log
    FormItem(label='name')
      Input(ize='small' v-model='axis.name')
  slot
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'x'
    },
    axis: {
      type: Object,
      default: () => ({
        show: true,
        position: '',
        type: 'category',
        name: 'axis'
      })
    }
  }
}
</script>
