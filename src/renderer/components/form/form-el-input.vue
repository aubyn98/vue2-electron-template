<template>
  <el-input
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
    class="form-el-input"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-input>
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
      default: '7px 12px',
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
::v-deep.form-el-input {
  height: var(--height);
  @mixin Pseudo {
    height: var(--height);
    color: var(--color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--padding);
    border-radius: var(--border-radius);
    border: var(--border);
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
  &.el-input {
    .el-input__inner {
      @include Pseudo;
    }
    &.is-disabled {
      .el-input__inner {
        background-color: #fff;
      }
    }
  }
  &.el-textarea {
    .el-textarea__inner {
      @include Pseudo;
    }
    &.is-disabled {
      .el-textarea__inner {
        background-color: #fff;
      }
    }
  }
}
.form-el-item.el-form-item.is-error {
  .form-el-input {
    $error-color: #f56c6c;
    @mixin Pseudo {
      &,
      &:hover,
      &:focus {
        border-color: $error-color;
      }
    }
    &::v-deep {
      &.el-input {
        .el-input__inner {
          @include Pseudo;
        }
      }
      &.el-textarea {
        .el-textarea__inner {
          @include Pseudo;
        }
      }
    }
  }
}
</style>
