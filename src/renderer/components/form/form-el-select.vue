<template>
  <el-select
    class="form-el-select"
    popper-class="form-el-option-wraper"
    :style="{
      width,
      '--height': height,
      '--line-height': lineHeight,
      '--padding': padding,
      '--font-size': fontSize,
      '--color': color,
      '--background': background,
      '--placeholder-color': placeholderColor,
      '--focus-color': focusColor || color,
      '--border-color': borderColor,
      '--border-radius': borderRadius,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-select>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
      default: '36px',
    },
    lineHeight: {
      type: String,
      default: '20px',
    },
    padding: {
      type: String,
      default: '8px 30px 8px 12px',
    },
    fontSize: {
      type: String,
      default: '13px',
    },
    color: {
      type: String,
      default: '#505050',
    },
    background: {
      type: String,
      default: '#282828',
    },
    placeholderColor: {
      type: String,
      default: '#b2b2b2',
    },
    focusColor: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      default: '#f0f0f0',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
  },
}
</script>

<style lang="scss" scoped>
.form-el-select::v-deep.el-select {
  height: var(--height);
  @mixin Pseudo {
    height: var(--height);
    color: var(--color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--padding);
    border-radius: var(--border-radius);
    background: var(--background);
    &,
    &:hover,
    &:focus {
      border-color: var(--border-color);
    }
    &:hover,
    &:focus {
      color: var(--focus-color);
    }
    &::placeholder {
      font-size: var(--font-size);
      color: var(--placeholder-color);
    }
  }
  .el-input {
    .el-select__caret {
      line-height: var(--height);
      color: #808080;
    }
    .el-input__inner {
      @include Pseudo;
    }
    &.is-disabled {
      .el-input__inner {
        background-color: #fff;
      }
    }
  }
}
.form-el-item.el-form-item.is-error {
  .form-el-select::v-deep.el-select {
    $error-color: #f56c6c;
    @mixin Pseudo {
      &,
      &:hover,
      &:focus {
        border-color: $error-color;
      }
    }
    .el-input {
      .el-input__inner {
        @include Pseudo;
      }
    }
  }
}
</style>
<style lang="scss">
.form-el-option-wraper.el-select-dropdown.el-popper {
  margin: 0;
  border: none;
  padding: 6px 0;
  .popper__arrow {
    display: none;
  }
  .el-scrollbar {
  }
  .el-select-dropdown__wrap {
  }
  .el-select-dropdown__list {
    padding: 0;
  }
  .el-select-dropdown__item {
    color: #505050;
    height: 40px;
    line-height: 40px;
    padding: 0 12px;
    font-size: 13px;
    font-weight: 400;
    &.selected {
      color: #04aa58;
    }
    &.hover {
      background: #f7f9f8;
    }
  }
}
</style>
