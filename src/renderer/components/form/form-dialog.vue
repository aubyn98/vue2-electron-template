<template>
  <el-dialog
    ref="dialog"
    class="formDialog"
    :class="{ _modal: modal, _positionCenter: positionCenter }"
    :style="{ '--radius': radius, '--background': background }"
    custom-class="formDialogContent"
    v-bind="$attrs"
    v-on="$listeners"
    :modal-append-to-body="false"
    :fullscreen="false"
    @closed="closed"
  >
    <div
      ref="header"
      @mousedown="mousedown"
      class="_custom-header select-none"
      :class="{ _border: !headerShadow, _shadow: headerShadow, _move: drag }"
      :style="headerStyle"
      v-if="header"
    >
      <slot name="header">
        <div @mousedown.stop class="_title">{{ title }}</div>
        <quick-img @mousedown.stop v-if="showClose" class="_close pointer" name="icon_shutdown@2x" @click="$emit('update:visible', false)" />
      </slot>
    </div>
    <div class="_custom-content" :style="[{ maxHeight }, contentStyle]">
      <slot></slot>
    </div>
    <slot name="footer" v-if="footer">
      <div class="_custom-footer select-none" :class="{ _border: !footerShadow, _shadow: footerShadow }" :style="footerStyle">
        <button class="_cancel" v-if="cancel" @click="$emit('cancel')">{{ cancelText }}</button>
        <button class="_confirm" @click="$emit('confirm')">{{ confirmText }}</button>
      </div>
    </slot>
  </el-dialog>
</template>

<script>
export default {
  props: {
    relativeTo: {
      type: String,
    },
    title: {
      type: String,
      default: '',
    },
    cancel: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    // 整体内容居中
    positionCenter: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    // 背景
    background: {
      type: String,
      default: '#fff',
    },
    // 圆角
    radius: {
      type: String,
      default: '4px',
    },
    // 内容最大高度
    maxHeight: {
      type: String,
      default: '',
    },
    headerStyle: {
      type: Object,
      default: () => ({}),
    },
    contentStyle: {
      type: Object,
      default: () => ({}),
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    header: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    footerStyle: {
      type: Object,
      default: () => ({}),
    },
    headerShadow: {
      type: Boolean,
      default: false,
    },
    footerShadow: {
      type: Boolean,
      default: false,
    },
    hideCancel: {
      type: Boolean,
      default: false,
    },
    hideConfirm: {
      type: Boolean,
      default: false,
    },
    canDrag: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    '$attrs.visible'(val) {
      if (val) {
        this.$nextTick(() => {
          const relativeTo = this.relativeTo
          const parentEl = relativeTo ? document.getElementById(this.relativeTo) : document.body
          const { top, left } = parentEl.getBoundingClientRect()
          const body = document.body.style
          body.setProperty('--formDialogTop', top + 'px')
          body.setProperty('--formDialogLeft', left + 'px')
          body.setProperty('--v-modal', this.modal ? 0.1 : 0)
        })
      }
    },
  },
  data() {
    return {
      drag: false,
      disX: 0,
      disY: 0,
      lock: {},
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.mousemove)
    document.addEventListener('mouseup', this.mouseup)
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.mousemove)
    document.removeEventListener('mouseup', this.mouseup)
  },
  methods: {
    closed() {
      this.drag = false
      const moveBox = this.$refs.dialog.$el.children[0]
      moveBox.style.marginLeft = 'auto'
      moveBox.style.marginTop = this.$attrs.top
    },
    mousemove(e) {
      if (!this.drag || !this.canDrag) return
      const container = this.$refs.dialog.$el
      const moveBox = container.children[0]
      // 鼠标移动坐标
      let x = e.clientX
      let y = e.clientY
      // 鼠标移动的坐标与上次坐标的差值(移动的距离) + 盒子原本的坐标
      let moveX = x - this.disX + moveBox.offsetLeft
      let moveY = y - this.disY + moveBox.offsetTop
      const maskMax = container.offsetWidth - moveBox.offsetWidth // 盒子坐标最大的水平移动距离
      const maskMax_y = container.offsetHeight - moveBox.offsetHeight // 盒子最大的垂直移动距离
      if (moveX <= 0) {
        moveX = 0
        x = this.lock.x // 鼠标水平坐标的最小值
      } else if (moveX >= maskMax) {
        moveX = maskMax
        x = this.lock.x + maskMax // 鼠标水平坐标的最大值
      }
      if (moveY <= 0) {
        moveY = 0
        y = this.lock.y // 鼠标垂直坐标的最小值
      } else if (moveY >= maskMax_y) {
        moveY = maskMax_y
        y = this.lock.y + maskMax_y // 鼠标垂直坐标的最大值
      }
      moveBox.style.marginLeft = moveX + 'px'
      moveBox.style.marginTop = moveY + 'px'
      // 记录本次移动的坐标
      this.disX = x
      this.disY = y
    },
    mousedown(e) {
      if (!this.canDrag) return
      this.drag = true
      // 按下鼠标时的坐标
      this.disX = e.clientX
      this.disY = e.clientY
      const moveBox = this.$refs.dialog.$el.children[0]
      // 鼠标坐标与拖拽头部盒子坐标的差值，鼠标相对于盒子的坐标
      this.lock = { x: e.clientX - moveBox.offsetLeft, y: e.clientY - moveBox.offsetTop }
    },
    mouseup() {
      if (!this.canDrag) return
      this.drag = false
    },
  },
}
</script>
<style>
#app ~ .v-modal {
  opacity: var(--v-modal);
}
</style>
<style lang="scss" scoped>
$color-bor: #f5f5f5;
.formDialog::v-deep.el-dialog__wrapper {
  top: var(--formDialogTop);
  left: var(--formDialogLeft);
  overflow: hidden;
  &._modal ~ .v-modal {
    opacity: var(--v-modal);
  }
  & ~ .v-modal {
    top: var(--formDialogTop);
    left: var(--formDialogLeft);
    opacity: 0;
  }

  .formDialogContent.el-dialog {
    background: var(--background);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(213, 220, 224, 0.5), 0px 1px 0px 0px #f5f5f5;
  }

  &.center {
    .formDialogContent.el-dialog {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &._positionCenter {
    .formDialogContent.el-dialog {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 0;
  }
  ._custom-header {
    padding: 16px 20px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    text-align: LEFT;
    color: #333333;
    line-height: 24px;
    &._move {
      cursor: move;
    }
    &._border {
      border-bottom: 1px solid $color-bor;
    }
    &._shadow {
      box-shadow: 0px 0px 10px 0px rgba(213, 220, 224, 0.5), 0px 1px 0px 0px $color-bor;
    }
    ._close {
      width: 12px;
      height: 12px;
    }
  }
  ._custom-content {
    padding: 0 20px;
    overflow-y: auto;
  }
  ._custom-footer {
    height: 66px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &._border {
      border-top: 1px solid $color-bor;
    }
    &._shadow {
      box-shadow: 0px -2px 10px 0px rgba(213, 220, 224, 0.5);
    }
  }
  ._confirm,
  ._cancel {
    font-size: 14px;
    margin-left: 12px;
    min-width: 88px;
    height: 36px;
    border-radius: 2px;
    padding: 0 16px;
  }
  ._confirm {
    background: #009cff;
    color: #fff;
  }
  ._cancel {
    color: #505050;
    border: 1px solid #e0e0e0;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
}
</style>
