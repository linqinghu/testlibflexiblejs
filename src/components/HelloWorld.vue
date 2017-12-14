<template>
  <div class="hello">
    <div class="nav flex-row" >
      <div class="item flex-grow-1 flex-y-center " v-for="i in 4">全部</div>
    </div>
    <h1 class="flex flex-x-center">flex布局</h1>

    <div class="iocn flex-row">
      <div class="icon-item flex-grow-1" v-for="i in 4">
        <img src="../assets/logo.png" alt="">
        待发货
      </div>
    </div>
    <div class="flexBox">
      <div v-for="i in 2" class="flexitem flex-row">
        <div class="checkBox flex-grow-0 flex-y-center">
          <div class="cart-checkbox"></div>
        </div>
        <div class="goods flex-grow-1 flex-row">
          <div class="imgBox flex-grow-0">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="desc flex-grow-1 flex-col">
            <div class="name flex-grow-1">哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈</div>
            <div class="priceBox flex-grow-0 flex-row">
              <div class="count flex-grow-1">X66</div>
              <div class="price flex-grow-0">￥12121212</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer flex-row">
      <div class="flex-y-center flex-x-center flex-grow-1">全选总计</div>
      <div class=" flex-x-center flex-grow-0 bianji  flex-y-center">编辑</div>
      <div class="submit flex-x-center flex-y-center">结算</div>
    </div>
    <div class="ratinglist">
      <div class="rating_list_item" v-for="i in 3">
        <div class="content vux-1px-b flex-row">
          <div><img src="../assets/img/icon-coupon.png" alt=""></div>
          <div class="name">哈哈哈哈哈哈哈哈啊哈</div>
          <div><img src="../assets/img/icon-jiantou-r.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
  .hello{
    padding-bottom: 100px;
    overflow-x: hidden;
    .nav{
      .item{
        height: 76px;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        margin-top: 10px;
      }
    }
    .iocn{
      .icon-item{
        text-align:center;
        display:block;
        font-size:20px;
        padding:24px 0;
        position:relative;

        img{
          width:60px;
          height:57px;
          margin:0 auto 5px;
          display: block;
        }
      }
    }
    .flex{
      font-size:32px;
      text-align: center;
    }
    .flexBox{

      .flexitem{
        background:#fff;
        border-bottom:1px solid #e3e3e3;
        padding:32px 24px 32px 0;

        .checkBox{
          padding:24px;
          .cart-checkbox {
            width:40px;
            height:40px;
            background: #fff;
            border-radius: 50%;
            border:2px solid black;
          }

        }
        .goods{
          .imgBox{
            img{
              width: 236px;
              height: 236px;
            }
          }
          .desc{
            .name{
              margin-bottom:10px;
              -webkit-line-clamp:1;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              overflow:hidden;

            }
          }
        }
      }
    }
    .footer{
      position:fixed;
      bottom:0px;
      left:0;
      height:100px;
      background:#fff;
      border-top:1px solid #e3e3e3;
      border-bottom:1px solid #e3e3e3;
      width:100%;
      z-index:1000;
      font-size:28px;
      .bianji{
        background:#3c8ee5;
        color:#fff;
        width:160px;
      }
      .submit{
        background:#ff4544;
        color:#fff;
        width:160px;
        text-align:center;
      }
    }
    .ratinglist{
      .rating_list_item{
        background:#fff;
        padding:0 24px;
        display:block;
        position:relative;

      }
    }


  }
</style>
