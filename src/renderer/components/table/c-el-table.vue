<template>
  <el-table class="c-el-table" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss">
$table-border-color: #f5f5f5;
.c-el-table.el-table {
  color: #505050;
  // -------------------------边框设置----------------------------start

  // boder  false 和 true 共用---------start

  // 行(单元格)底部边框
  .el-table__cell.is-leaf,
  .el-table__cell {
    border-bottom: 1px solid $table-border-color;
  }

  // 整体表格底部边框
  &::before {
    // display: none;
    background: $table-border-color;
  }

  // boder  false 和 true 共用-----------end

  // ---------boder 为true 时----------start

  &.el-table--border {
    // 整体表格上边框
    border-top: 1px solid $table-border-color;

    // 整体表格左边框
    border-left: 1px solid $table-border-color;

    // 整体表格右边框
    &.el-table--group::after,
    &::after {
      // display: none;
      background-color: $table-border-color;
    }

    .el-table__header {
      // 多级表头-行的底部边框
      thead.is-group {
        .el-table__cell {
          border-bottom: 1px solid $table-border-color;
        }
      }

      thead {
        // 表头 最右侧滚动条小格子
        .el-table__cell.gutter {
          border-bottom: none;
          border-right: none;
        }
        tr:first-child {
          // 表头 最右侧的单元格右边框
          .el-table__cell:nth-last-child(2) {
            border-right: 1px solid $table-border-color;
          }
        }
      }
    }

    .el-table__cell {
      // 单元格右边框
      border-right: 1px solid $table-border-color;
      // 最右侧单元格右边框
      &:last-child {
        border-right: 1px solid $table-border-color;
      }
    }

    .el-table__row:last-child {
      // 最后一行底部边框
      .el-table__cell {
        border-bottom: 1px solid $table-border-color;
      }
    }
  }

  // ---------boder 为true 时------------end

  // -------------------------边框设置------------------------------end

  // ----------------------------单元格设置------------------------------start

  .el-table__header {
    // 表头单元格
    .el-table__cell {
      height: 36px;
      padding-top: 0;
      padding-bottom: 0;
      color: #808080;
      font-size: 13px;
      font-weight: 400;
      background-color: #fff;
      // .cell {}
    }
  }
  .el-table__body {
    // 行单元格
    .el-table__cell {
      height: 48px;
      padding: 7px;
      font-size: 20px;
      .cell {
        line-height: 20px;
      }
    }
  }
  .el-table__cell .cell {
    padding: 0;
  }

  // ----------------------------单元格设置------------------------------end
}
</style>
