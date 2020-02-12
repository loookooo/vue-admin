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
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login_form" size="mini">
         
        <el-form-item prop="username">
             <label>邮箱</label>
            <el-input type="email" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item prop="password">
             <label>密码</label>
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item prop="passwords" v-if="model === 'register'">
             <label>重复密码</label>
            <el-input type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="code">
             <label>验证码</label>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-input v-model="ruleForm.code" minlength="6" maxlength="6"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="success" style="margin-left:-5px;">获取验证码</el-button>
                    </el-col>
                </el-row>
        </el-form-item>

        <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
        </el-form-item>
       </el-form>
    <!-- 表单 end -->
    </div>
  </div>
</template>
<script>
import { stripscript } from '@/utils/validate.js';
export default {
  name: "login",
  data() {
       var validateCode = (rule, value, callback) => {
           if (value == '') {
              callback(new Error('请输入验证码')); 
           } else {
               callback();
           }
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
          this.ruleForm.password = stripscript(value);
          value = this.ruleForm.password;
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
       var validatePasswords = (rule, value, callback) => {
        // 去除特殊字符
        //   this.ruleForm.passwords = stripscript(value);
        //   value = this.ruleForm.passwords;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value != this.ruleForm.password){
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
    return {
         ruleForm: {
          username: '',
          password: '',
          passwords: '',
          code: ''
        },
        //模块值
        model: 'login',
        //表单的数据
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          passwords: [
               { validator: validatePasswords, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        },
      menuTab: [
        { txt: "登录", current: true, type: 'login' },
        { txt: "注册", current: false, type: 'register' }
      ],
      isActive: true
    };
  },
  methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //登录注册切换
    toggleMenu(item) {
        this.model = item.type;
        this.menuTab.forEach(element => {
            element.current = false ;
        });
        item.current = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background-color: pink;
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
