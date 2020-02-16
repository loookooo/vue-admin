<template>
    <div class="header_warp">
        <el-tooltip class="item" effect="dark" content="伸缩导航" placement="right">
            <div class="menubtn">
                <i class="el-icon-s-fold"></i>
            </div>
         </el-tooltip>
         <el-tooltip class="item" effect="dark" content="退出登录" placement="left">
            <div class="loginout">
                    <i class="el-icon-switch-button"></i>
            </div>
         </el-tooltip>
         
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.header_warp {
    position: fixed;
    top: 0;
    left: 250px;
    right: 0;
    height: 75px;
    background-color: #fff;
    box-shadow: 0 3px 16px 0 rgba(0,0,0,.1); 
}
.menubtn{
    position:absolute;
    box-sizing: border-box;
    left: 0px;
    font-size: 40px;
    height:75px;
    padding:16px;
    border-right:1px solid grey;
    cursor: pointer;
}
.menubtn:hover,.loginout:hover{
    background-color: #1E1E1E;
    color:#fff;
}
.loginout {
    position:absolute;
    right: 0px;
    font-size: 30px;
    padding:20px;
    border-left:1px solid grey;
    cursor: pointer;
}
</style>