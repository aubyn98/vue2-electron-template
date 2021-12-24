<template>
  <el-form-item
    class="form-el-item"
    :class="{ _flex: flex, 'not-label': !label, hideError }"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{ 'margin-bottom': mrb, '--label-margin': labelMargin, '--label-padding': labelPadding, '--label-line-height': labelLineHeight }"
  >
    <template #label>
      <p class="_label" :style="[{ lineHeight: labelLineHeight, color: labelColor, fontSize: labelFontSize }, labelStyle]">
        <slot name="label" :label="label">{{ label }}</slot>
      </p>
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    labelStyle: {
      type: Object,
      default: () => ({}),
    },
    labelColor: {
      type: String,
      default: '#f3f3f3',
    },
    labelFontSize: {
      type: String,
      default: '14px',
    },
    labelMargin: {
      type: String,
      default: '0',
    },
    labelPadding: {
      type: String,
      default: '0 16px 0 0',
    },
    labelLineHeight: {
      type: String,
      default: '40px',
    },
    mrb: {
      type: String,
      default: '20px',
    },
    flex: {
      type: Boolean,
      default: false,
    },
    hideError: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
$error-color: #ff2c2c;
.form-el-item::v-deep.el-form-item {
  ._label {
    display: inline-block;
  }
  &.el-form-item--small {
    .el-form-item__label {
      margin: var(--label-margin);
      padding: var(--label-padding);
      line-height: var(--label-line-height);
      &::before {
        color: $error-color;
      }
    }
    .el-form-item__content {
      line-height: var(--label-line-height);
    }
    .el-form-item__error {
      color: $error-color;
    }
    &.hideError .el-form-item__error {
      display: none;
    }
  }
  &._flex {
    .el-form-item__content {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &.not-label {
    .el-form-item__label {
      display: none;
    }
  }
}
</style>
