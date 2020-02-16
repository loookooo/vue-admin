<template>
  <div class="login">
    <div class="login_warp">
      <ul class="menu_tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!-- 表单 start -->
      <el-form :model="userinfo" status-icon :rules="rules" ref="ruleForm" class="login_form" size="mini">
         
        <el-form-item prop="username">
             <label for="username">账号</label>
            <el-input type="text" v-model="userinfo.username" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item prop="password">
             <label for="password">密码</label>
            <el-input type="password" v-model="userinfo.password" autocomplete="off"></el-input>
        </el-form-item>
       
        <!-- <el-form-item prop="passwords" v-if="model === 'register'">
             <label for="passwords">重复密码</label>
            <el-input type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
        </el-form-item> -->

        <el-form-item>
            <el-button type="primary" :disabled="btnstatus"  @click="submitForm('ruleForm')" style="width:100%;">
              {{model === 'login' ? '登录' : '注册'}}
            </el-button>
        </el-form-item>
       </el-form>
    <!-- 表单 end -->
    </div>
  </div>
</template>
<script>
import { login, register } from '@/api/login.js';
import { reactive, ref, isRef } from '@vue/composition-api';
export default {
  name: "login",
  setup(props, { refs, root }){
      //账号验证规则
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else { callback();}
      };
      //密码验证规则
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {  callback(); }
      };
      //用户信息
      const userinfo = reactive({
        username: null,
        password: null
      }); 
      //表单验证规则
      const rules = reactive({
          username: [ { validator: validateUsername, trigger: 'blur' } ],
          password: [ { validator: validatePassword, trigger: 'blur' } ]
      });
      //页面参数
     const menuTab = reactive([
        { txt: "登录", current: true, type: 'login' },
        { txt: "注册", current: false, type: 'register' }
      ]);
      //模块值
      const model = ref('login');
      //按钮状态参数
      const btnstatus = ref(false);
      //方法
        //登录注册切换
        const toggleMenu = item=>{
            menuTab.forEach((element,index)=>{
                element.current = false;
            })
            item.current = true;
            model.value = item.type;
        };
        //提交
        const submitForm = formName =>{
            refs[formName].validate((valid) => {
                if (valid) {
                    btnstatus.value = true;
                    if(model.value == 'login'){
                        //访问登录api
                        login(userinfo).then(res=>{
                          if(res.data.code === 200){
                            root.$notify({title: res.data.msg, type: 'success'});
                            root.$router.push({path:'/Layout'});
                          }else if(res.data.code === 201){
                            root.$notify.error({title: res.data.msg});
                          }
                          btnstatus.value = false;
                        });
                    }else if(model.value == 'register'){
                        //访问注册api
                        register(userinfo).then(res=>{
                            if(res.data.code === 200){
                              root.$notify({title: res.data.msg, type: 'success'});
                            }else if(res.data.code === 201 || res.data.code === 202){
                              root.$notify.error({title: res.data.msg});
                            }
                            btnstatus.value = false;
                        });
                    }
                    
                } else {
                   root.$message({message: '请完善信息!',});
                    return false;
                }
            });
        };
        return {
            //参数
            userinfo,
            btnstatus,
            rules,
            menuTab,
            model,
            //方法
            toggleMenu,
            submitForm
        }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #8DB6CD;
  padding-top: 20vh;
  height: 100vh;
}
.login_warp {
  width: 330px;
  margin: 0 auto;
}
.menu_tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.login_form {
    label {
        display: block;
        font-size: 14px;
        color: #fff; 
    }
}
</style>
