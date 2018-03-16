<template>
  <div class="navTab flex-row flex-y-center flex-x-center">
    <h2 class="title">{{title}}</h2>
    <div v-show="show_right" class="right flex-grow-0 flex-y-center">
      <div>1.5K</div>
      <div><img class="img" src="static/img/diamond.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-tab",
    props:{
      title:{
        type:String,
        default: 'Profile'
      },
      show_right:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{}
    },
    computed:{
      // show_right(){
      //   //return this.$store.state.dataStatus.top_right;
      //   // return this.$store.status.dataStatus.top_right;
      // }
    }

  }
</script>

<style lang="less" scoped>
  .navTab{
    position: relative;
    height: 86px;
    text-align: center;
    background-color: #fff;
    .title{
      text-align: center;
      font-size:34px;
    }
    .right{
      position: absolute;
      top:50%;
      right:30px;
      transform: translateY(-50%);
      font-size:30px;
      .img{
        width: 37px;
        margin-left: 12px;
        margin-top: -8px;
      }
    }
  }
</style>