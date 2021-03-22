<template lang='pug'>
div
  template(v-if='schema.option.dataset')
    FormItem(label='url')
      Input(
        size='small'
        v-model='schema.option.url'
        type='textarea'
        placeholder='接口地址，如 http://xxx.com'
        :autosize='{ minRows: 3, maxRows: 8 }'
      )
    FormItem(label='adapter')
      Input(
        size='small'
        v-model='schema.option.adapter'
        type='textarea'
        placeholder='数据格式适配脚本，如：\nreturn data'
        :autosize='{ minRows: 4, maxRows: 10 }'
      )
      Button(size='small' @click='getData') 测试
  slot
</template>
<script>
import { helper, Worker as EpageWorker } from 'epage-core'

export default {
  props: {
    store: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Object,
      default: () => ({
        key: '',
        option: {
          dataset: {
            data: []
          }
        }
      })
    }
  },
  data () {
    return {
      worker: null
    }
  },
  mounted () {
    this.worker = new EpageWorker()
    this.listenMessage()
    this.getData()
  },
  beforeDestroy () {
    this.worker.terminate()
  },
  methods: {
    listenMessage () {
      this.worker.onmessage = e => {
        // 存放临时数据
        const { message, success, data } = e.data

        if (success) {
          // 更新option中的值
          const { key } = this.schema

          this.store.updateWidgetOption(key, { dataset: data })
          this.$emit('success', data)
        } else {
          this.$emit('error', message)
        }
      }
    },
    getData () {
      const { url, adapter } = this.schema.option

      if (!url) {
        return
      }
      helper.ajax(url).then(res => {
        this.worker.postMessage({
          action: 'custom',
          data: res,
          fn: adapter
        })
      }).catch(err => {
        this.$emit('error', {
          success: false,
          message: err
        })
      })
    }
  }
}
</script>
