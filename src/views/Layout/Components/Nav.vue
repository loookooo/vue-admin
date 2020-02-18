<template>
    <div id="nav_warp">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" style="border-right:0;"
          :collapse="isCollapse" background-color="black" text-color="#fff" active-text-color="#B0E2FF">
            
            <template v-for="(item,index) in router">
                <el-submenu :index="index+''"  :key="item.id" v-show="item.meta.show">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.meta.name }}</span>
                    </template>
                    <el-menu-item-group>
                        <!-- <span slot="title">分组一</span> -->
                        <el-menu-item :index="index+'-'+ix" v-for="(it,ix) in item.children" :key="it.id">
                            {{it.meta.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                    <!-- <el-menu-item-group>
                        <span slot="title">分组二</span>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu> -->
                </el-submenu>
            </template>
            <!-- <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item> -->
            </el-menu>
    </div>
</template>
<script>
import { ref, reactive, computed } from '@vue/composition-api';
export default {
    name: 'navMenu',
    setup(props,{ root }){
        //获取路由列表
        const router = reactive(root.$router.options.routes);
        //监听伸缩导航变化
        const isCollapse =computed(()=>root.$store.state.layout.isCollapse);
        return {
            isCollapse,
            router
        }
    }
}
</script>
<style lang="scss" scoped>
#nav_warp {
    position: fixed;
    left: 0;
    top: 0;
    height:100vh;
    background-color:#1E1E1E;
    transition: all .3s ease 0s;
}
.open {
    #nav_warp {
        width:250px;
    }
}
.close {
     #nav_warp {
        width:64px;
    }
}
.is-active {
    background-color: #fff !important;
    color:black !important;
}
</style>