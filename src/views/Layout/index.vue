<template>
    <div :class="['layout_warp',menuStatus ? 'close':'open']">
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <LayoutMain></LayoutMain>
    </div>
</template>
<script>
import LayoutHeader from './Components/Header.vue';
import LayoutNav from './Components/Nav.vue';
import LayoutMain from './Components/Main.vue';
import { computed } from '@vue/composition-api';
export default {
    name: 'layout',
    components: {
        LayoutHeader, LayoutNav, LayoutMain
    },
    setup(props,{ root }){
        const menuStatus = computed(()=> root.$store.state.layout.isCollapse);
        return {
            menuStatus
        }
    }
}
</script>
<style lang="scss" scoped>
.layout_warp {
    height: 100vh;
    background-color: #F5F5F5;
}
</style>