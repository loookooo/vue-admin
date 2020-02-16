<template>
    <div class="main_warp">
        <router-view />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main_warp {
    position: fixed;
    left: 250px;
    top: 75px;
    right: 0px;
    bottom: 0px;
    margin:25px;
    background-color: white;
}   
</style>