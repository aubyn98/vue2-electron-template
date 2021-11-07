<template>
  <div class="form-checkbox pointer" :class="{ _disabled: disabled }" :style="{ lineHeight: width }" @click="!disabled && change()">
    <quick-img :style="{ width, height: width }" class="_icon" name="icon_gxk" v-show="!value" />
    <quick-img :style="{ width, height: width }" class="_icon" name="icon_gxk2" v-show="value" />
    <label class="_label" :style="{ fontSize, marginLeft: labelMrl, color }" v-if="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, String],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '12px',
    },
    fontSize: {
      type: String,
      default: '12px',
    },
    label: {
      type: [String, Number],
      default: '',
    },
    labelMrl: {
      type: String,
      default: '6px',
    },
    color: {
      type: String,
      default: ' #808080',
    },
  },
  methods: {
    change() {
      const newVal = !this.value
      this.$emit('input', newVal)
      this.$emit('change', newVal)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-checkbox {
  display: inline-block;
  vertical-align: top;
  align-items: center;
  font-weight: 400;
  font-size: 0;
  &._disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  ._icon {
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }
  ._label {
    vertical-align: middle;
  }
}
</style>
