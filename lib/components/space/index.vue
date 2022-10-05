<template>
  <div>
    
  </div>
</template>

<script>
import { computed, h, ref, useSlots } from '@vue/runtime-core'
export default {
    name: 'hSpace',
    props: {
        inline: {
            type: Boolean,
            default: true
        },
        size: {
            type: Array,
            default: [10,10]
        }
    },
    setup(props) {
        const $slot = useSlots()
        const slotList = ref([])
        const hStyle = computed(() => {
            return {
                display:props.inline ? 'inline-flex' : 'flex',
                'flex-wrap':'wrap',
                gap: props.inline ?  `${props.size[0]}px`
                     :`${props.size[0]}px ${props.size[1]}px`,
                "flex-direction": props.inline ? "inherit" : "column",
                "align-items": 'center',
                width: 'fit-content'
            }
        })
        $slot.default().forEach((item,index) => {  //处理space下的元素
            slotList.value.push(
                h(
                    'div',
                    {
                        className: 'h-space-item',
                        style: 'width:fit-content'
                    },
                    item
                )
            )
        })
        return () => [
            h(
                'div',
                {
                    className: 'h-space',
                    style: hStyle.value
                },
                slotList.value
            )
        ]
    }
}
</script>

<style lang="scss" scoped>

</style>