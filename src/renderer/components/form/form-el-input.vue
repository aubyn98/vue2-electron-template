<template>
  <el-input
    :style="{
      width,
      '--height': height,
      '--line-height': lineHeight,
      '--padding': padding,
      '--font-size': fontSize,
      '--color': color,
      '--focus-color': focusColor || color,
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
      default: '8px 12px',
    },
    fontSize: {
      type: String,
      default: '13px',
    },
    color: {
      type: String,
      default: '#505050',
    },
    focusColor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep.form-el-input {
  $border-color: #f0f0f0;
  @mixin Pseudo {
    height: var(--height);
    color: var(--color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--padding);
    &,
    &:hover,
    &:focus {
      border-color: $border-color;
    }
    &:hover,
    &:focus {
      color: var(--focus-color);
    }
    &::placeholder {
      font-size: var(--font-size);
      color: #b2b2b2;
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
