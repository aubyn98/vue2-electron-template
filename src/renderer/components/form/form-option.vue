<template>
  <li class="form-option" :class="{ _active: selectVal == value }" @click="clickHandle">
    <div>
      <slot v-bind="{ label }">{{ label }}</slot>
    </div>
    <quick-img name="icon_heck" class="_checked" v-if="selectVal == value" />
  </li>
</template>

<script>
export default {
  inject: ['select'],
  props: {
    valueKey: {
      typeof: String,
      default: 'value',
    },
    value: {
      typeof: [String, Object],
      default: '',
      required: true,
    },
    label: {
      typeof: String,
      default: '',
      required: true,
    },
  },
  computed: {
    vIsObj() {
      return typeof value === 'object'
    },
    optVal() {
      const value = this.value
      return this.vIsObj ? value[this.valueKey] : value
    },
    selectVal() {
      return this.select.$attrs.value
    },
  },
  data() {
    return {}
  },
  created() {
    if (this.value == this.selectVal) this.select.changeLabel(this.label)
  },
  methods: {
    clickHandle() {
      const select = this.select
      select.slideFocus = false
      select.$emit('input', this.value)
      select.changeLabel(this.label)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-option {
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #505050;
  line-height: 22px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: #f7fbfe;
  }
  &._active {
    color: #009cff;
  }
  ._checked {
    width: 14px;
    height: 14px;
  }
}
</style>
