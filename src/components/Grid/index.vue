<template lang='pug'>
div
  template(v-if='grid')
    FormItem(label='left')
      Input(size='small' v-model='grid.left')
    FormItem(label='right')
      Input(size='small' v-model='grid.right')
    FormItem(label='bottom')
      Input(size='small' v-model='grid.bottom')
    FormItem(label='top')
      Input(size='small' v-model='grid.top')
    FormItem(label='width')
      Input(size='small' v-model='grid.width')
    FormItem(label='height')
      Input(size='small' v-model='grid.height')
    //- FormItem(label='backgroundColor')
    //-   Input(size='small' v-model='grid.backgroundColor')
    //- FormItem(label='borderColor')
    //-   Input(size='small' v-model='grid.borderColor')
    //- FormItem(label='borderWidth')
    //-   Input(size='small' v-model='grid.borderWidth')
    FormItem(label='containLabel')
      i-switch(v-model='grid.containLabel')
        span(slot='open') 是
        span(slot='close') 否
  slot
</template>
<script>
export default {
  props: {
    grid: {
      type: Object,
      default: () => ({
        left: undefined,
        right: undefined,
        bottom: undefined,
        containLabel: true
      })
    }
  }
}
</script>
