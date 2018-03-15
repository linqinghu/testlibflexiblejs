<template>
  <div class="page">
    <div class="topBox flex-row">
      <div class="left flex-grow-1">
        <img v-src="'/static/img/profile1.png'" alt="">
      </div>
      <div class="right flex-grow-0 flex-col">
        <img v-src="'/static/img/profile2.png'" alt="">
        <img class="specil" v-src="'/static/img/profile3.png'" alt="">
        <img v-src="'/static/img/profile4.png'" alt="">
      </div>
    </div>
    <div class="descBox flex-row">
      <div class="item flex-grow-1 ">
        <p class="bold">134</p>
        <p>Liked you</p>
      </div>
      <div class="item flex-grow-1 ">
        <p class="bold">112</p>
        <p>You liked</p>
      </div>
      <div class="item flex-grow-1 ">
        <p class="bold">15</p>
        <p>Matched</p>
      </div>
    </div>
    <div class="aboutBox">
      <div class="about">ABOUT</div>
      <P>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco laboris...</P>
      <div class="imgBox flex-row flex-y-center">
        <div @click="toLogin" class="flex-grow-1">
          <img v-src="'/static/img/facebook.png'" alt="">
        </div>
        <div @click="toLogin" class="flex-grow-1">
          <img v-src="'/static/img/twitter.png'" alt="">
        </div>
        <div @click="toLogin" class="flex-grow-1">
          <img v-src="'/static/img/google plus.png'" alt="">
        </div>
        <div @click="toLogin" class="flex-grow-1">
          <img v-src="'/static/img/linkedin.png'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profile",
    methods: {
      toLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less" scoped>
  .page {
    width: 100%;
    height: 100%;
    background: #ececec;
  }

  .right {
    width: 188px;
    padding-left: 1px;
  }

  .specil {
    margin: 1px 0;
  }

  .descBox {
    padding: 30px 30px 26px;
    background: #fff;
    .item {
      text-align: center;
      position: relative;
      font-size: 24px;
      color: #6f6f6f;
      line-height: 32px;
      &:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-right: 2px solid #d7d7d7;
        color: #d7d7d7;
        transform-origin: 100% 0;
        transform: scaleX(0.5);
      }
      &:last-child {
        &:after {
          border: none;
        }
      }
      .bold {
        font-size: 34px;
        font-weight: bold;
        color: #363636;
      }
    }
  }

  .aboutBox {
    background: #fff;
    padding: 30px 30px 0;
    color: #6f6f6f;
    font-size: 30px;
    margin-top: 30px;
    .about {
      font-size: 26px;
      font-weight: bold;
      color: #363636
    }
    p {
      line-height: 30px;
      text-align: justify;
      margin: 14px 0 50px;
    }
    .imgBox {
      border-top: 1px solid #ebebeb;
      height: 91px;
      img {
        width: 44px;
      }
    }
    .flex-grow-1 {
      text-align: center;
      &:first-child {
        > img {
          width: 22px
        }
      }
      &:last-child {
        > img {
          width: 45px;
        }
      }
    }
  }
</style>