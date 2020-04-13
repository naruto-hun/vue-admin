<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/img/login.png"/>
      </div>
      <el-form ref="loginFormRef" class="login-form" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="name">
          <el-input prefix-icon="iconfont icon-wode1" v-model="loginForm.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" prefix-icon="iconfont icon-password" v-model="loginForm.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login" :loading="loginLoading">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        loginLoading:false,
        loginForm:{
          name:'',
          pwd:''
        },
        loginFormRules:{
          name:[
            {required:true,message:'请输入账号',trigger:'blur'}
          ],
          pwd:[
            {required:true,message:'请输入密码',trigger:'blur'}
          ]
        }
      }
    },
    methods:{
      resetLoginForm(){
        this.$refs.loginFormRef.resetFields()
      },
      login(){
        this.$refs.loginFormRef.validate((res)=>{
          if(!res){
            return false
          }
          this.loginLoading=true
          this.$store.dispatch('loginAction',{
            data:this.loginForm,
            success:()=>{
              this.loginLoading=false
              this.$router.replace('/home')
            },
            error:(msg)=>{
              this.loginLoading=false
              this.$message.error(msg)
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .login-container{
    background: #2b4b6b;
    height: 100%
  }
  .login-box{
    width:450px;
    height:300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    .avatar-box{
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border:1px #eee solid;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left:50%;
      top:-65px;
      transform: translateX(-50%);
      background: #fff;
      img{
        width: 100%;
        height: 100%
      }
    }
    .login-form{
      position: absolute;
      bottom:0;
      width:100%;
      padding:0 20px;
      box-sizing: border-box;
      .btns{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
