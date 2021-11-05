<template>
  <button class="form-button" :class="['_' + colorType]" :style="{ width, height, fontSize }" v-bind="$attrs" v-on="$listeners">
    <quick-img class="form-button-icon" :name="icon" v-if="icon" />
    <span
      ><slot>{{ text }}</slot></span
    >
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    colorType: {
      type: String,
      default: 'green',
    },
    width: {
      type: String,
      default: '236px',
    },
    height: {
      type: String,
      default: '38px',
    },
    fontSize: {
      type: String,
      default: '13px',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-weight: 400;
  color: #ffffff;
  &._green {
    background: #04aa58;
  }
}
.form-button-icon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
</style>
