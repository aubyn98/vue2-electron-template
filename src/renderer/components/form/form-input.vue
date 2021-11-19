<template>
  <input v-if="type === 'input'" type="text" v-on="listeners" v-bind="$attrs" :value="value" @input="input" />
  <textarea v-else v-on="listeners" v-bind="$attrs" :value="value" @input="input" />
</template>

<script>
import { debounce } from 'utils/debounce'
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    delay: {
      type: Number,
      default: 250,
    },
    type: {
      type: String,
      default: 'input',
    },
  },
  created() {
    this.input = debounce(e => {
      this.$emit('input', e.target.value)
    }, this.delay)
  },
  computed: {
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
  methods: {
    input: () => {},
  },
}
</script>

<style lang="scss" scoped></style>
