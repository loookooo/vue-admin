<template>
    <div class="svgIcon_warp">
        {{ name }}
    </div>    
</template>
<script>
import { ref } from '@vue/composition-api'
export default {
    name: 'svg_icon',
    // props: [ 'name' ],
    props:{
        name: {
            type: String,
            required: true,
            //default:'我是子组件',
            // validator: value => {
            //     return value>=0
            // }
        }
    },
    setup(props,{ root }){
        const name = ref(props.name);
        return {
            name
        }
    }
}
</script>
<style lang="scss" scoped>
.svgIcon_warp {
    width: 100px;
    color:white;
    background-color:pink;
}
</style>