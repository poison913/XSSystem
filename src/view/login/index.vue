<template>
  <div id="main"  >
    <h1>象山港智慧环境信息系统登录</h1>
    <div class="login-form">
      <div class="head-info ">
        <label class="lbl-1"> </label>
        <label class="lbl-2"> </label>
        <label class="lbl-3"> </label>
      </div>
        <div class="clear"> </div>
        <div class="avtar"> 
        </div>
      <el-form ref="loginForm"  :model="form" :rules="rules" label-width="0px" class="login-box">
        <el-form-item  prop="username">
          <el-input type="text" class="username"  placeholder="UserName" v-model="form.username"/>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input type="password" class="password"  placeholder="PassWord" v-model="form.password"/>
        </el-form-item> 
      </el-form>

      <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        :modal-append-to-body="false"
        >
        <span>请输入账号和密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      
      <div class="signin">
        <!-- <input type="submit" value="登陆" > -->
        <button id="loginbtn" @click="login()" >登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    created() {
    var _self = this;
        document.onkeydown = function(e){

        var key = window.event.keyCode;

        if(key == 13 || key == 100){

            _self.login();

        }

    } 
  },
    methods: {
      login( ) {
        // 为表单绑定验证功能
        this.$refs["loginForm"].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            if(this.form.username=="admin"&&this.form.password=="admin"){
              this.$router.push("/Map");
              localStorage.setItem("username", "admin"); 
            }
            else
              this.dialogVisible = true; 
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>  
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  #main{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../assets/bg1.jpg");
    background-size: 100% 100%;    
    min-width: 1500px; 
    overflow: auto;
  }
  h1 {
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    padding-top: 4em;
    font-weight: 400;
    color: #2B2B36;
    font-size: 2em;
}
.login-form {
    background: #2b2b36;
    position: relative;
    width: 25%;
    margin: 3% auto 0 auto;
    text-align: center;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
}
.head-info {
    padding: 5px 0;
    text-align: center;
    font-weight: 600;
    font-size: 2em;
    color: #fff;
    background: #23232e;
    height: 50px;
    border-top-left-radius: 10px;
    -webkit-border-top-left-radius: 10px;
    -moz-border-top-left-radius: 10px;
    -o-border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-top-right-radius: 10px;
    -o-border-top-right-radius: 10p;
}
.clear {
    clear: both;
}
label.lbl-1 {
    background: #6756ea;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
}
label.lbl-2 {
    background: #ea569a;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
}
label.lbl-3 {
    background: #f1c85f;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
}
.avtar .signin{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline; 
    background: url("../../assets/avtar.png") no-repeat center top;
    height: 80px;
}
.username {
    width: 70%;
    padding: 1em 2em 1em 3em;
    color: #9199aa;
    font-size: 18px;
    outline: none;
    background: url("../../assets/adm.png") no-repeat 10px 25px;
    border: none;
    font-weight: 100;
    border-bottom: 1px solid#484856;
    margin-top: 2em;
    margin-left: 0px;
}
.password {
    width: 70%;
    padding: 1em 2em 1em 3em;
    color: #dd3e3e;
    font-size: 18px;
    outline: none;
    background: url("../../assets/key.png") no-repeat 10px 35px;
    border: none;
    font-weight: 100;
    border-bottom: 1px solid#484856;
    margin-bottom: 1em;
} 
#loginbtn {
    font-size: 30px;
    color: #fff;
    outline: none;
    border: none;
    background: #3ea751;
    width: 100%;
    padding: 18px 0;
    border-bottom-left-radius: 15px;
    -webkit-border-bottom-left-radius: 15px;
    -moz-border-bottom-left-radius: 15px;
    -o-border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    -webkit-border-bottom-right-radius: 15px;
    -moz-border-bottom-right-radius: 15px;
    -o-border-bottom-right-radius: 15px;
    cursor: pointer;
}
.login-box>>>.el-form-item__error{
      left: 25% !important;
} 
</style>