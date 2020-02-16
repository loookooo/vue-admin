<template>
    <div class="layout_warp">
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <LayoutMain></LayoutMain>
    </div>
</template>
<script>
import LayoutHeader from './Components/Header.vue';
import LayoutNav from './Components/Nav.vue';
import LayoutMain from './Components/Main.vue';
export default {
    name: 'layout',
    components: {
        LayoutHeader, LayoutNav, LayoutMain
    },
    setup(){

    }
}
</script>
<style lang="scss" scoped>
.layout_warp {
    height: 100vh;
    background-color: #F5F5F5;
}
</style>