<template>
  <div
    ref="switch"
    class="switch"
    :class="{ switch_on: value, _disabled: disabled }"
    :style="{
      width,
      height,
      backgroundColor: value ? activeColor : inactiveColor,
      borderRadius: parseFloat(height) / 2 + 'px',
      '--circularDiam': circularDiam,
      '--edgeWidth': edgeWidth,
      '--circular-mrl': parseFloat(width) - parseFloat(circularDiam) - parseFloat(edgeWidth) * 2 + 'px',
      '--textPadding': textPadding,
    }"
    @click="!disabled && $emit('input', !value)"
  >
    <span>
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  mounted() {
    const switchEl = this.$refs.switch
    switchEl.addEventListener('transitionstart', this.hideHandle)
    switchEl.addEventListener('transitionend', this.showHandle)
    this.$once('hook:beforeDestroy', () => {
      switchEl.removeEventListener('transitionstart', this.hideHandle)
      switchEl.removeEventListener('transitionend', this.showHandle)
    })
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '58px',
    },
    height: {
      type: String,
      default: '24px',
    },
    activeColor: {
      type: String,
      default: '#009cff',
    },
    inactiveColor: {
      type: String,
      default: '#aaaaaa',
    },
    circularDiam: {
      type: String,
      default: '14px',
    },
    edgeWidth: {
      type: String,
      default: '5px',
    },
    textPadding: {
      type: String,
      default: '10px',
    },
  },
  data() {
    return {
      showText: true,
    }
  },
  methods: {
    showHandle() {
      this.showText = true
    },
    hideHandle() {
      this.showText = false
    },
  },
}
</script>

<style lang="scss" scoped>
.switch {
  line-height: 1;
  position: relative;
  font-size: 12px;
  font-weight: 400;
  padding: 0 var(--textPadding) 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  user-select: none;
  cursor: pointer;
  &._disabled {
    cursor: not-allowed;
  }
  &::after {
    content: '';
    transition: all 0.3s;
    display: block;
    width: var(--circularDiam);
    height: var(--circularDiam);
    border-radius: 50%;
    position: absolute;
    background-color: #fff;
    top: var(--edgeWidth);
    left: var(--edgeWidth);
  }
  &.switch_on {
    padding: 0 0 0 var(--textPadding);
    justify-content: flex-start;
    &::after {
      margin-left: var(--circular-mrl);
    }
  }
}
</style>
