<template>
  <div class="page">
    <nav-tab :title="title"></nav-tab>
    <div class="like flex-row flex-y-center flex-x-center">YOU LIKED</div>
    <div class="imgBox flex-list">
      <div @click="toProfile" class="list" v-for="i in 8">
        <div class="img">
          <img src="static/img/Layer 1189.png" alt="">
        </div>
        <div>Maybell Dynes</div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavTab from 'src/components/NavTab'
  export default {
    name: "favorites",
    data(){
      return {
        title:'Profile'
      }
    },
    components:{
      NavTab
    },
    created(){
      //this.$store.state.dataStatus.top_right=true;
      //this.$store.dispatch();
    },
    methods:{
      toProfile(){
        this.$router.push('/profile')
      }
    }
  }
</script>

<style lang="less" scoped>
  .page{
    background: #ececec;
  }
  .like{
    font-size:28px;
    border-bottom: 3px solid #363636;
    height: 74px;
    font-weight: bold;
    background: #fff;
  }
  .imgBox{
    min-height: 100%;
    padding:62px 30px 0;
    .list{
      width: 285px;
      text-align: center;
      font-size:36px;
      margin-bottom: 98px;
      .img{
        width: 226px;
        margin: 0 auto 20px;
      }
    }
  }
</style>