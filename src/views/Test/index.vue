<template>
    <div>
        <label >注册</label>
        <hr>
        电话:<input type="text" v-model="user.phone">
        密码:<input type="text" v-model="user.password">
        <button @click="Reg">注册</button>
    </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api';
import { register } from '@/api/login.js';
export default {
    name:'Register',
    setup(props,{ root }){
        const user  = reactive({
            phone: null,
            password: null
        });
        //---------------------------
        const Reg = () => {
            register(user).then(res=>{
                alert(res.data.msg)
            }).catch(res=>{
               alert('错误：'+res)
            })
        };
        //--------------------------
        return {
            user,
            //------------
            Reg
        }
    }
}
</script>
<style lang="scss" scoped>

</style>