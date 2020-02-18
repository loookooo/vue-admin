<template>
    <div id="main_warp">
         <svg_icon :name="'我是内容'" />
        <router-view />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#main_warp {
    position: fixed;
    top: 75px;
    right: 0px;
    bottom: 0px;
    margin:25px;
    background-color: white;
    transition: all 0.3s ease;
}
.open {
    #main_warp {
       left: 250px;
    }
}
.close {
     #main_warp {
       left: 64px;
    }
}
</style>