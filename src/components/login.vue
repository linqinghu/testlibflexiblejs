<template>
  <div class="page">
    <div @click="goTo" class="go_top">
      <img src="static/img/top.png" alt="">
    </div>
    <div class="toFacebook flex-grow-0 flex-y-center flex-x-center">
      CONNECT WITH FACEBOOK COPY
    </div>
    <div class="line"></div>
    <div class="sign_box">
      <div class="bold">SIGN IN</div>
      <div class="bold_line"></div>
    </div>
    <div class="form">
      <div class="input_item">
        <div class="title">Email</div>
        <div class="inputBox flex-row flex-y-center" >
          <div class="flex-grow-1">
            <input type="email" v-model="email">
          </div>
          <div class="flex-grow-0">
            <img class="clear" v-show="email" @click="clearEmail" src="static/img/clear.png" alt="">
          </div>
        </div>
      </div>
      <div class="input_item">
        <div class="title">PassWord</div>
        <div class="inputBox flex-row flex-y-center" >
          <div class="flex-grow-1">
            <input type="password" v-model="password">
          </div>
          <div class="flex-grow-0">
            <img class="clear" @click="clearPassword" v-show="password" src="static/img/clear.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="forgot">Forgot your password?</div>
    <div @click="goTo" class="btn flex-row flex-y-center flex-x-center">SIGN IN</div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      clearEmail(){
        this.email=''
      },
      clearPassword(){
        this.password='';
      },
      goTo(){
        this.$router.push('/favorites');
      }
    }
  }
</script>

<style lang="less" scoped>
  .page{
    width: 100%;
    height: 100%;
    background: #ffff;
    overflow: hidden;
  }
  .go_top{
    >img{
      display: block;
      width: 24px;
      margin: 32px auto 40px;
    }
  }
  .toFacebook{
    width: 520px;
    margin: 0 auto;
    height: 88px;
    color:#fff;
    font-size:28px;
    background: url("../../static/img/forLogin.png") no-repeat center center;
    background-size:100% 100%;
  }
  .line{
    height: 1px;
    background:#ebebeb;
    margin-top: 48px;
  }
  .sign_box{
    text-align: center;
    margin: 50px 0 60px;
    .bold{
      display: inline-block;
      font-size:30px;
      font-weight: bold;
    }
    .bold_line{
      width: 122px;
      margin:18px auto 0;
      height: 4px;
      background: #363636;
    }
  }
  .form{
    padding: 0 58px;
    .input_item{
      position: relative;
      padding-bottom: 20px;
      &:last-child{
        margin-top: 26px;
      }
      &::after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 2px solid #ebebeb;
        color: #ebebeb;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
      }
      .title{
        font-size:22px;
      }
      .inputBox{
        margin-top: 12px;
        input{
          font-size:30px;
          width: 100%;
          border: none;
        }
        .clear{
          width: 28px;
        }
      }
    }
  }
  .forgot{
    color:#9a9a9a;
    font-size:24px;
    margin-top: 100px;
    margin-bottom: 42px;
    text-align: center;
  }
  .btn{
    width: 100%;
    height: 100px;
    font-size:32px;
    color:#fff;
    background: #fd4c9d;
  }
</style>