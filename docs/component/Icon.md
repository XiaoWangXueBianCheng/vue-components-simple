# Icon

## Example

<ClientOnly>
<div>
    <div style="font-size: 42px;">
        <icon name="view"></icon>
        <icon name="view_off"></icon>
        <icon name="search"></icon>
    </div>
    <code-hl codeType="html" :codeStr="codeStr1"></code-hl>
</div>
</ClientOnly>

## Icons
<ul class="flex-container icon_lists">
  <li class="dib" v-for="(icon,i) in icons" :key="i">
    <icon :name="icon"/>
    <div class="name">
      {{icon}}
    </div>
    <div class="code-name">.icon-{{icon}}</div>
  </li>
</ul>


## Attributes

| 参数       | 说明            | 类型   | 可选值 | 默认值 |
| ---------- | --------------- | ------ | ------ | ------ |
| name       | 名字            | string | -      | —      |
| multiColor | 是否是多色 icon | bool   | -      | false  |

<script>
    import Vue from 'vue'
    import Icon from '../../lib/icon.js'
    Vue.use(Icon)

    export default {
      data () {
        return {
          codeStr1: ` <icon name="view"></icon>
    <icon name="view_off"></icon>
    <icon name="search"></icon>
    `,
    icons: [
        'view',
        'view_off',
        'search',
        'upload',
        'download',
        'close',
        'close_filled',
        'check',
        'check_filled',
        'info',
        'info_filled',
        'help',
        'help_filled',
        'caution',
        'caution_filled',
        'like',
        'like_filled',
        'star',
        'star_filled',
        'arrow_up',
        'arrow_left',
        'arrow_down',
        'arrow_right',
        'page_first',
        'down_to_bottom',
        'up_to_top',
        'page_last',
        'page_turning_left',
        'page_turning_right',
        'show_less',
        'show_more'
        ]
        }
      },
      methods: {
        handleClick (evt) {
            console.log(evt);
        }
      }
    }
</script>
<style lang="scss">
  .custom a:hover {
    text-decoration: none!important;
  }
  h4{
    margin: 30px 0 10px;
  }
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }

.icon_lists {
  width: 100% !important;
  overflow: hidden;
  *zoom: 1;
}
.icon_lists {
  [class*=" icon-"], [class^=icon-]{
    display: block;
      height: 100px;
      line-height: 100px;
      font-size: 42px;
      margin: 10px auto;
      color: #333;
      -webkit-transition: font-size 0.25s linear, width 0.25s linear;
      -moz-transition: font-size 0.25s linear, width 0.25s linear;
      transition: font-size 0.25s linear, width 0.25s linear;
      &:hover {
        font-size: 100px;
      }
  }
}
.icon_lists li {
  width: 120px;
  margin-bottom: 10px;
  margin-right: 20px;
  text-align: center;
  list-style: none !important;
  cursor: default;
}

.icon_lists li .code-name {
  line-height: 1.2;
}
  .icon_lists li .name,
  .icon_lists li .code-name {
    color: #666;
  }
</style>
