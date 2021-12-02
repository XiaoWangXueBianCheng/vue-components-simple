<template>
  <svg v-if="multiColor"
       :class="[multiClass, getXlink]"
       :style="customStyle">
    <use :xlink:href="'#' + getXlink"></use>
  </svg>
  <i :class="className"
     v-else
     :style="customStyle">
    <slot></slot>
  </i>
</template>
<script>
import '@/assets/fonts/iconfont.js'
import '@/assets/fonts/iconfont.css'
import '@/assets/styles/icon.scss'

export default {
  name: 'Icon',
  props: {
    customStyle: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      required: true
    },
    'multi-color': {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      prefix: 'icon'
    }
  },
  computed: {
    className () {
      return `${this.prefix}-${this.name}`
    },
    multiClass () {
      return this.multiColor ? 'ct-icon' : ''
    },
    getXlink () {
      return `${this.prefix}-${this.name}`
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
