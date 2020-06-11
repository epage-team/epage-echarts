<template lang='pug'>
div
  FormItem(label='text')
    Input(size='small' v-model='title.text')
  FormItem(label='subtext')
    Input(size='small' v-model='title.subtext')
  FormItem(label='left')
    Input(size='small' v-model='title.left')
  FormItem(label='top')
    Input(size='small' v-model='title.top')
  slot
</template>
<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => ({
        text: '',
        subtext: '',
        left: '',
        top: ''
      })
    }
  }
}
</script>
