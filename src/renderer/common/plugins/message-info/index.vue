<template>
  <transition name="message-info-fade" @after-leave="handleAfterLeave">
    <div class="info" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <!-- <iconfont :name="names[type]" /> -->
      <p class="_message">{{ message }}</p>
    </div>
  </transition>
</template>

<script>
let timer = null
export default {
  components: {
    // iconfont,
  },
  data() {
    return {
      visible: false,
      names: {
        success: 'icon_winy',
        error: 'icon_winx',
      },
    }
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    typeof this.destroy === 'function' && this.destroy()
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer() {
      if (this.duration > 0) {
        timer = setTimeout(() => {
          if (this.visible) {
            typeof this.destroy === 'function' && this.close()
          }
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(timer)
      timer = null
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: fixed;
  z-index: 4008;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  max-width: 1200px;
  background: #ffffff;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0px 3px 6px rgba(203, 203, 203, 0.4);
  display: flex;
  align-items: flex-start;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  .icon {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
  ._message {
    line-height: 16px;
    color: #505050;
    font-size: 13px;
    margin-left: 8px;
  }
}
.message-info-fade-enter,
.message-info-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
