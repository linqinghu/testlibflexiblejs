<template>
  <div class="v-header flex-row flex-y-center flex-x-center">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
  export default {
    name: "header",
    props:{
      title:{
        type:String,
        default:'Profile'
      }
    },
    data(){
    }

  }
</script>

<style lang="less" scoped>
  .v-header{
    position: relative;
    height: 90px;
    text-align: center;
    background-color: #fff;
    .title{
      text-align: center;
    }
  }
</style>