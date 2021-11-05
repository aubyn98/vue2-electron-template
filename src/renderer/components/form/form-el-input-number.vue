<template>
  <el-input-number
    :min="1"
    class="form-el-input-number"
    size="mini"
    :style="{ '--_height': parseFloat(height) + 'px', 'line-height': parseFloat(height) - 2 + 'px', width }"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-input-number>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '24px',
    },
    width: {
      type: String,
      default: '80px',
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
::v-deep.form-el-input-number.el-input-number--mini {
  $bor-c: #f0f0f0;
  .el-input__inner {
    color: #505050;
    font-size: 13px;
    padding: 0 var(--_height);
  }
  .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled),
  .el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled) {
    border-color: $bor-c;
  }
  .el-input-number__increase,
  .el-input-number__decrease {
    width: var(--_height);
    color: #b2b2b2;
    &:hover {
      color: #505050;
    }
  }
  .el-input-number__decrease {
    border-right-color: $bor-c;
  }
  .el-input-number__increase {
    border-left-color: $bor-c;
  }
  .el-input--mini .el-input__inner {
    height: var(--_height);
    line-height: var(--_height);
    &,
    &:focus,
    &:hover {
      border-color: #f0f0f0;
    }
  }
}
</style>
