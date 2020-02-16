<template>
    <div class="nav_warp">

<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>

            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" :collapse="isCollapse" background-color="transparent" text-color="#fff" active-text-color="#B0E2FF">
            
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
         <svg_icon :name="name" />
    </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api';
export default {
    name: 'navMenu',
    setup(props,{ root }){
        const router = reactive(root.$router.options.routes);
        console.log(router);

        const isCollapse = ref(false);
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath);
        };
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath);
        };

        const name = ref('我是Nav');
        return {
            isCollapse,handleOpen,handleClose,router,
            name
        }
    }
}
</script>
<style lang="scss" scoped>
.nav_warp {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height:100vh;
    background-color:#1E1E1E;
}
</style>