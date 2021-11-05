<template>
  <div
    class="form-cell"
    :class="{ _border: border }"
    :style="{ width, height, marginBottom: mrb, marginTop: mrt, paddingBottom: pdb, paddingTop: pdt, boxSizing }"
  >
    <slot name="left"
      ><span class="_form-label">{{ label }}</span></slot
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    width: {
      type: String,
      default: '430px',
    },
    height: {
      type: String,
      default: '52px',
    },
    border: {
      type: Boolean,
      default: true,
    },
    mrb: {
      type: String,
      default: '0',
    },
    mrt: {
      type: String,
      default: '0',
    },
    pdb: {
      type: String,
      default: '0',
    },
    pdt: {
      type: String,
      default: '0',
    },
    boxSizing: {
      type: String,
      default: 'border-box',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-cell {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #505050;
  font-weight: 400;
  line-height: 25px;
  ._form-label {
    flex-shrink: 0;
  }
  &._border {
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>
