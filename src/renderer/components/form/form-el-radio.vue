<template>
  <el-radio
    class="form-el-raido inline-box v-center"
    :style="{
      display: inline ? 'inline-flex' : 'flex',
      width,
      height,
      margin,
      padding,
      borderRadius: radius,
      '--radio-width': radioWidth,
      '--radio-inner-width': radioInnerWidth,
      '--active-color': activeColor,
      '--border-color': borderColor,
      '--label-color': labelColor || '#fff',
      '--label-active-color': labelActiveColor || labelColor || activeColor,
      '---line-height': lineHeight,
      '--label-left': labelLeft,
      '--font-size': fontSize,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    lineHeight: {
      type: String,
      default: '22px',
    },
    margin: {
      type: String,
      default: '0 auto',
    },
    padding: {
      type: String,
      default: '0px 2px',
    },
    // 整体圆角
    radius: {
      type: String,
      default: '0',
    },
    // 外圆宽高
    radioWidth: {
      type: String,
      default: '16px',
    },
    // 内圆宽高
    radioInnerWidth: {
      type: String,
      default: '8px',
    },
    activeColor: {
      type: String,
      default: '#206ef7',
    },
    borderColor: {
      type: String,
      default: '#e0e0e0',
    },
    // label的颜色
    labelColor: String,
    // label选中时的颜色
    labelActiveColor: String,
    // label 与 radio的间距
    labelLeft: {
      type: String,
      default: '10px',
    },
    fontSize: {
      type: String,
      default: '14px',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-el-raido::v-deep.el-radio {
  align-items: center;
  .el-radio__input {
    flex-shrink: 0;
    font-size: 0;
    vertical-align: middle;
  }
  .el-radio__label {
    flex: 1;
    line-height: var(---line-height);
    font-size: var(--font-size);
    color: var(--label-color);
    padding-left: var(--label-left);
    vertical-align: middle;
  }
  // radio 宽高 边框
  .el-radio__inner {
    width: var(--radio-width);
    height: var(--radio-width);
    border-color: var(--border-color);
    background-color: transparent;
  }

  &.is-checked {
    .el-radio__label {
      color: var(--label-active-color);
    }
    .el-radio__inner {
      border-color: var(--active-color);
      background: transparent;
      // radio 内圆宽高
      &::after {
        width: var(--radio-inner-width);
        height: var(--radio-inner-width);
        background-color: var(--active-color);
      }
    }
  }
  // 当radio设置为border类型的时候
  &.is-bordered {
    &.is-checked {
      background: #f1fef8;
    }
    &:not(.is-checked) {
      border-color: transparent;
    }
    & + .el-radio.is-bordered {
      margin: 0;
    }
  }
}
</style>
