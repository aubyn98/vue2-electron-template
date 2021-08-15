<template>
  <svg>
    <use :xlink:href="`#icons-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style></style>
