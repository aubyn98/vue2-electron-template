<template>
  <el-image class="img-wraper" v-bind="$attrs" v-on="$listeners" :fit="fit" :class="{ 'lazy-img-border': border }" :style="imgStyle">
    <div slot="placeholder" class="error-image-slot flex justify-center items-center">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z"
        ></path>
      </svg>
    </div>
    <div slot="error" class="error-image-slot flex justify-center items-center">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z"
        ></path>
      </svg>
    </div>
  </el-image>
</template>
<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    fit: {
      type: String,
      default: 'contain',
    },
    maxHeight: String,
    maxWidth: String,
  },
  computed: {
    imgStyle() {
      const { maxWidth, maxHeight } = this
      return { ...(maxWidth && { '--max-width': maxWidth }), ...(maxHeight && { '--max-height': maxHeight }) }
    },
  },
}
</script>
<style lang="scss" scoped>
.img-wraper::v-deep {
  display: flex;
  align-items: center;
  justify-content: center;
  .el-image__inner {
    width: auto;
    height: auto;
    max-width: var(--max-width);
    max-height: var(--max-height);
  }
  .error-image-slot {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    svg {
      fill: #dcdde0;
      width: 22%;
      height: 22%;
    }
  }
  .lazy-img-border {
    border: 1px solid #f5f5f5;
  }
}
</style>
