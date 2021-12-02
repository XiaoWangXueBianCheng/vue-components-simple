<template>
  <div class="component-wrapper">
    <div ref="code-content" class="code-content" v-highlight style="height: 0;">
       <div ref="code-content-height" class="code-content-height">
         <pre><code :class="codeType">{{codeStr}}</code></pre>
       </div>
    </div>
    <div class="lock-code" @click="showCode" ref="xxx">
       <icon
          :multi-color="false"
          name="page_turning_right"
          :style="{
              transform: isShow === false ? 'rotate(90deg)' : 'rotate(-90deg)'
          }"></icon>
      <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'codeHL',
  props: {
    codeStr: String,
    codeType: {
      type: String,
      default: 'html',
    },
  },
  data() {
    return {
      //每一个区域的高度
      codeHeight: 0,
      //每个区域的显示状态
      isShow: false,
    };
  },
  methods: {
    //根据子元素的高度 设置代码区域父元素的高度
    showCode() {
      this.isShow = !this.isShow;
      this.$nextTick(() => {
        if (this.isShow === true) {
          this.$refs['code-content'].style.height =
            +this.codeHeight + 25 + 'px';
        } else {
          this.$refs['code-content'].style.height = 0;
        }
      });
    },
    //得到所有代码区域的高度
    getCodesHeight() {
      const a = this.$refs['code-content-height'];
      this.codeHeight = a.getBoundingClientRect().height;
    },
  },
  mounted() {
    //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
    this.$nextTick(() => {
      this.getCodesHeight();
    });
  },
};
</script>
<style lang="scss">
  .component-wrapper {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    margin-top: 30px;
    margin-bottom: 30px;

    .component-wrapper-demo {
      padding: 24px 24px 15px 24px;
    }

    h4 {
      margin: 55px 0 20px;
    }
    .icon-page_turning_right{
        font-size: 24px;
    }
    &:hover {
      .lock-code .lock-code-word {
        font-size: 14px;
        transform: translateX(-40px);
        opacity: 1;
      }

      .lock-code .icon-page_turning_right {
        transform: translateX(-40px);
      }

      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    .code-content {
      background-color: #282c34;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: height .2s;

      .code-content-height {
        .code-user-desc {
          background: #ffffff;
          margin: 10px 10px 0 10px;
          padding: 5px 10px;
          font-size: 14px;
          line-height: 26px;
          border: 1px solid #ebebeb;
          border-radius: 3px;
        }

        > pre {
          background: none;

          > code {
            color: #3182bd;
          }
        }
      }
    }

    .lock-code {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      line-height: 44px;
      color: #d3dce6;

      &:hover {
        background-color: #f9fafc;

        .lock-code-word {
          color: #409eff;
        }

        .icon-down {
          fill: #409eff;
        }
      }

      .icon-down {
        transform: translateX(0px);
        transition: all .1s;
      }

      text-align: center;

      .lock-code-word {
        font-size: 0px;
        margin-left: 15px;
        display: inline-block;
        transition: all .1s;
        opacity: 0;
      }
    }
  }

</style>
