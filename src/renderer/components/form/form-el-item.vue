<template>
  <el-form-item
    class="form-el-item"
    :class="{ _flex: flex, 'not-label': !label }"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{ 'margin-bottom': mrb }"
  >
    <template #label>
      <p class="_label" :style="{ lineHeight: labelLineHeight }">
        <slot name="label" :label="label">{{ label }}</slot>
      </p>
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    labelLineHeight: {
      type: String,
      default: '36px',
    },
    mrb: {
      type: String,
      default: '20px',
    },
    flex: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.form-el-item::v-deep.el-form-item {
  ._label {
    display: inline-block;
    color: #505050;
  }
  &.el-form-item--small {
    .el-form-item__content {
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
