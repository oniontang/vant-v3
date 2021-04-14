<template>
  <div class="home">
    <div class="top">
      <div class="home_top">
        <div class="home_ellipse"></div>
        <div class="home_top_msg">
          <van-image class="home_user_img" width="60" height="60" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div>Tminihu</div>
        </div>
      </div>
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
      <div class="home_nav">
        <div class="home_nav_item">
          <van-icon name="home-o" size="45" color="#168B71" />
          <span>主考院校</span>
        </div>
        <div class="home_nav_item">
          <van-icon name="calendar-o" size="45" color="#168B71" />
          <span>考试日程</span>
        </div>
        <div class="home_nav_item">
          <van-icon name="newspaper-o" size="45" color="#168B71" />
          <span>考试资讯</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list_item" @click="handleToDetails">
        <!-- 第一种方式，使用routerLink标签跳转 -->
        <!-- 第二种方式，使用点击事件触发跳转 -->
        <!-- <router-link class="list_item" to="/details"> -->
          <van-image class="list_item_img" width="80" height="70" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div class="list_item_content">
            <span class="item_title">标题标题标题标题标题标题</span>
            <div class="item_source">
              <span>标题标题标题标题标题标题</span>
              <span>来源：XXX</span>
            </div>
          </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data () {
    return {
      value: ''
    }
  },
  setup() {
    const router = useRouter();
    function handleToDetails() {
      router.push('/details');
    }
    return {
      handleToDetails
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
}
.top{
  background-color: #FFFFFF;
  border-bottom: 1px solid #E4E7ED;
}
.home_top{
  width: 100%;
  height: 120px;
  margin-bottom: 70px;
  position: relative;
  background-color: #168B71;
}
.home_ellipse{
  position: absolute;
  top: 60px;
  height: 120px;
  width: 100%;
  border-radius: 50%;
  background-color: #168B71;
}
.home_top_msg{
  position: absolute;
  width: 100px;
  height: 100px;
  top: 80px;
  left: calc(50% - 50px);
  text-align: center;
  line-height: 20px;
  color: #FFFFFF;
}
.home_user_img{
  border: 2px solid #c8c9cc;
  border-radius: 5px;
}
.home_nav{
  width: 95%;
  height: 80px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.home_nav_item{
  width: 30%;
  height: 100%;
  /* background-color: #E4E7ED; */
  display: flex;
  flex-flow: column;
}
.home_nav_item span{
  font-size: 14px;
  font-weight: 600;
  color: #168B71;
}
.list{
  width: 95%;
  margin: 0 auto;
  padding: 10px 0px;
}
.list_item{
  height: 80px;
  width: 100%;
  color: #000000;
  border-radius: 5px;
  background-color: #FFFFFF;
  border: 1px solid #E4E7ED;
  display: flex;
  justify-content: space-between;
}
.list_item_img{
  padding: 5px;
}
.list_item_content{
  padding: 5px;
  display: flex;
  flex-flow: column;
  text-align: left;
  flex: 1;
}
.item_title{
  font-size: 16px;
  height: 60px;
}
.item_source{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
</style>
