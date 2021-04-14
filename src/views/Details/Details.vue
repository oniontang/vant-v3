<template>
  <div class="details">
    <van-nav-bar class="details_nav" title="资讯详情" left-arrow :fixed="true" :border="false" @click-left="onClickLeft" />
    <div class="details_msg">
      <div class="details_top">
        <span class="title">我是标题</span>
      </div>
    </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    function onClickLeft() {
      router.back();
    }
    return {
      onClickLeft
    }
  }
}
</script>

<style>
.details{
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
}
.details_nav{
  color: #FFFFFF;
  background-color: #168B71;
}
.details_msg{
  width: 98%;
  margin: 0 auto;
  height: auto;
  padding-top: 60px;
}
.details_top{
  width: 95%;
  margin: 0 auto;
  height: 30px;
}
.title{
  color: #000;
  font-size: 18px;
  font-weight: 700;
}
.van-nav-bar__title{
  color: #FFFFFF;
}
.van-nav-bar .van-icon{
  color: #FFFFFF;
}
</style>
