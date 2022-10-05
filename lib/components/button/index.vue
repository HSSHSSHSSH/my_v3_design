<template>
    <button :class="hClass" :disabled="disabled">
      <span><slot></slot></span>
    </button>
</template>


<script setup> 
import { computed, onMounted } from '@vue/runtime-core'
  const props = defineProps({
    type: {  //按钮类型
      type: String,
      default: 'default'
    },
    disabled: { //禁用状态
      type: Boolean,
      default: false
    },
    round: {  //圆角
      type: Boolean,
      default: false
    }
  })

  onMounted(() => {
  })

  const hClass = computed(() => {
    return [
      'h-button',
      props.disabled ? `h-button-${props.type}-disabled`: `h-button-${props.type}`, //按钮禁用状态
      props.round ? 'h-button-round' : ''
    ]
  })
</script>


<script>
export default {
  name: 'hButton'
}
</script>

<style lang="scss" scoped>
.h-button {
  border: 0;
  padding: 14px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &:hover,&:focus {
    opacity: .8;
  }
}
.h-button-default{
  color: #333;
  border: 1px solid #dcdfe6;
  &:hover,&:focus{
    color: $primary;
    border-color: #c6e2ff;
    background: #ecf5ff
  };
  &:active{
    opacity: 1;
  }
}
.h-button-primary {
  color: #ffffff;
  background: $primary;
  &:active{
    opacity: 1;
  }
}
.h-button-success {
  color: #ffffff;
  background: $success;
  &:active{
    opacity: 1;
  }
}
.h-button-info {
  color: #ffffff;
  background: $info;
  &:active{
    opacity: 1;
  }
}
.h-button-warning {
  color: #ffffff;
  background: $warning;
  &:active{
    opacity: 1;
  }
}
.h-button-danger {
  color: #ffffff;
  background: $error;
  &:active{
    opacity: 1;
  }
}
.h-button-default-disabled{
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-primary-disabled {
  cursor: no-drop;
  border: 1px solid #0e80eb;
  background: #0e80eb;
  opacity: 0.5;
  color: #fff;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-success-disabled {
  cursor: no-drop;
  border: 1px solid #09b63d;
  background: #09b63d;
  opacity: 0.5;
  color: #fff;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-info-disabled {
  cursor: no-drop;
  border: 1px solid #fff;
  background: none;
  opacity: 0.5;
  color: #0e80eb;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-warning-disabled {
  cursor: no-drop;
  border: 1px solid #f57b29;
  background: #f57b29;
  opacity: 0.5;
  color: #fff;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-danger-disabled {
  cursor: no-drop;
  border: 1px solid #ec3437;
  background: #ec3437;
  opacity: 0.5;
  color: #fff;
  &:hover,&:focus {
    opacity: .5;
  }
}
.h-button-round {
  border-radius: 20px;
}
</style>