<template>
    <div id="header_warp">
        <!-- 伸缩导航 -->
        <el-tooltip class="item" effect="dark" content="伸缩导航" placement="right">
            <div class="menubtn" @click="changeIsCollapse">
                <i class="el-icon-s-fold"></i>
            </div>
         </el-tooltip>
         <!-- 管理员 -->
         <div class="show_name">
             欢迎管理员{{username}}到来~
         </div>
         <!-- 退出登录 -->
         <el-tooltip class="item" effect="dark" content="退出登录" placement="left">
            <div class="loginout" @click="loginOut">
                    <i class="el-icon-switch-button"></i>
            </div>
         </el-tooltip>
         
    </div>
</template>
<script>
import { computed } from '@vue/composition-api';
export default {
    name:'header_s',
    setup(props,{ root }){
        //绑定username
        const username = computed(()=>root.$store.state.login.userinfo.username);
        //伸缩导航
        const changeIsCollapse = () => {
            root.$store.commit('layout/Set_isCollapse');
        }
        return {
            changeIsCollapse,
            username
        }
    }
}
</script>
<style lang="scss" scoped>
.show_name {
    position: fixed;
    right: 90px;
    top: 26px;
}
#header_warp {
    position: fixed;
    top: 0;
    right: 0;
    height: 75px;
    background-color: #fff;
    box-shadow: 0 3px 16px 0 rgba(0,0,0,.1); 
    transition: all .3s ease 0s;
}
.open {
    #header_warp {
       left: 250px;
    }
}
.close {
     #header_warp {
       left: 64px;
    }
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