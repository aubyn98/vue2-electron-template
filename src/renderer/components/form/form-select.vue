<template>
  <div class="form-select-wraper" :class="{ isTextarea }" ref="wraper" tabindex="0" @click="inputFocus = !inputFocus" @blur="inputFocus = false">
    <div class="form-select" @mouseover="hover = true" @mouseout="hover = false">
      <form-input class="_select-input" v-on="listeners" :value="label" v-bind="$attrs" disabled :style="innerStyle" />
      <quick-img v-show="!showClear" class="_select-icon" :class="{ '_select-icon-up': up }" name="icon_dropdown" />
      <i @click.stop="clearHandle" v-show="showClear" class="_clearable el-icon-circle-close"></i>
    </div>
    <div
      class="_slide"
      ref="slide"
      tabindex="0"
      @focus="slideFocus = true"
      @blur="slideFocus = false"
      @click.stop
      @transitionstart="transitionstart"
      @transitionend="transitionend"
      :style="[clientRect, { maxHeight: up ? slideHeight : '0', padding, opacity: up ? 1 : 0, overflowY }]"
    >
      <ul class="_slide-wraper">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    slideHeight: {
      type: String,
      default: '229px',
    },
    innerStyle: {
      type: Object,
      default: () => ({}),
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clientRect: {},
      padding: '0',
      overflowY: 'hidden',
      slideFocus: false,
      inputFocus: false,
      label: '',
      hover: false,
    }
  },
  provide() {
    return {
      select: this,
    }
  },
  computed: {
    showClear() {
      return this.clearable && this.label && this.$attrs.value && this.hover
    },
    up() {
      return this.slideFocus || this.inputFocus
    },
    isTextarea() {
      return this.$attrs.type === 'textarea'
    },
    listeners() {
      const listeners = this.$listeners
      return Object.keys(listeners)
        .filter(k => k !== 'input')
        .reduce((prev, cur) => {
          prev[cur] = listeners[cur]
          return prev
        }, {})
    },
  },
  mounted() {
    this.computedHandle()
  },
  methods: {
    clearHandle() {
      this.$emit('input', '')
      this.label = ''
    },
    changeLabel(val) {
      this.label = val
    },
    computedHandle() {
      const { bottom, width, left } = this.$refs.wraper.getBoundingClientRect()
      this.clientRect = {
        top: bottom + 3 + 'px',
        left: left + 'px',
        width: width + 'px',
      }
    },
    transitionstart() {
      this.padding = '6px 0'
      this.overflowY = 'hidden'
      this.computedHandle()
    },
    transitionend() {
      this.padding = this.up ? '6px 0' : '0'
      this.overflowY = this.up ? 'auto' : 'hidden'
      this.computedHandle()
    },
    clickHandle() {
      this.inputFocus = !this.inputFocus
      if (this.inputFocus) {
        this.$refs.slide.focus()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-select-wraper {
  height: 43px;
  .form-select {
    height: 100%;
    padding: 9px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    outline: none;
    cursor: pointer;
  }
  ._clearable {
    flex-shrink: 0;
    font-size: 14px;
    color: #c0c4cc;
    display: inline-block;
  }
  ._select-icon {
    flex-shrink: 0;
    width: 12px;
    margin-left: 4px;
    transition: transform 0.35s ease;
    &._select-icon-up {
      transform: rotate(-180deg);
    }
  }
  &.isTextarea {
    align-items: flex-start;
  }
  ._select-input {
    flex: 1;
    cursor: pointer;
  }
  ._slide {
    position: fixed;
    transition: max-height 0.3s;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 12px 0px #e5eaf3;
    padding: 0;
    outline: none;
    overflow: hidden;
    z-index: 100;
  }
  ._slide-wraper {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
}
</style>
