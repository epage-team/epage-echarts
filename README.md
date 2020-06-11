# EpageEcharts

基于echarts图表库的 [epage](https://github.com/didichuxing/epage) 渲染包


## 安装

```sh
# 需提前安装vue vuex iview vuedragable echarts
npm install epage-echarts -S
# or yarn add epage-echarts
```

## 设计器及渲染器示例

-  `npm` 方式引入（推荐）

```js
import Vue from 'vue'
import Vuex from 'vuex'
import iview from 'iview'
import { Render, Epage } from 'epage-iview'
import widgets from 'epage-echarts'
import schema from './schema.json'
import 'epage-iview/src/style/main.less'
import 'epage-echarts/src/style/main.less'

// 如果项目中已经use，则此处不需要再次use
Vue.use(Vuex)
Vue.use(iview)

const el = document.getElementById('root')
// 设计器
new Epage({ el, widgets, schema, Render })
// 或者创建渲染器
new Render({ el, widgets, schema })
```

-  `script` 方式引入

```html
<!-- 样式 -->
<link href='https://cdn.bootcss.com/iview/3.5.1/styles/iview.css' rel='stylesheet'></link>
<link href='./epage.css' rel='stylesheet'></link>
<link href='./epage-iview.css' rel='stylesheet'></link>

<!-- 第三方脚本 -->
<script src='https://cdn.bootcss.com/vue/2.6.10/vue.min.js' ></script>
<script src='https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js' ></script>
<script src='https://cdn.bootcss.com/iview/3.5.1/iview.min.js' ></script>
<!-- 以下两个脚本仅在new Epage需要用，new Render不用 -->
<script src='//cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js' ></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.20.0/vuedraggable.umd.min.js' ></script>

<script src="./epage.min.js"></script>
<script src="./epage-iview.min.js"></script>
<script src="./epage-echarts.min.js"></script>

<script>
Vue.use(Vuex)
Vue.use(iview)
const el = document.getElementById('root')
const { default: widgets, Render } = EpageIview

// 设计器
new Epage({ el, widgets, Render })
// 或者创建渲染器
new Render({ el, widgets, schema })
</script>

```

## 交流群

微信群

![](http://img-hxy021.didistatic.com/static/star/epage-qrcode.jpg)

## License

[MIT](http://opensource.org/licenses/MIT)
