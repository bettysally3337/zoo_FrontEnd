<template>
<div id="news" class="container">
  <div class="row justify-content-evenly">
    <div v-for="item in result.slice(0,9)" 
    class="newItem col-md-4 col-lg-3 col-12 m-1 d-flex align-items-end" 
    :style="{ backgroundImage: item.相關圖片.length > 0 ? `url(${item.相關圖片[0].url})` : '' }">
    
    <!-- <p class="text-light">{{item.內容}} </p>
    <p class="text-light">{{item.發布日期}} </p>
    <p class="text-light">{{ item.相關圖片.length > 0 ? item.相關圖片[0].url : 'No image available' }}</p> -->
        <!-- 仅在有图片时渲染 img 元素 -->
    <!-- <img v-if="item.相關圖片.length > 0" :src="item.相關圖片[0].url" alt="Image" /> -->
    <h4>{{item.title}}</h4>
    </div>
  </div>
  <a class="btn btn-primary" href="#" role="button">顯示更多</a>
</div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

const result = ref([]); // 用于存储 API 响应的数据
// let result;

//抓取資料
onMounted(()=>{makeRequest();})  

 async function makeRequest() {

  try{
    fetch('http://localhost:5134/zoo-latestnews')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      //因為回傳的是字串，所以把他轉成JSON
      console.log('Data:', JSON.parse(data.data)); 
      result.value = JSON.parse(data.data);

      // return result;
    })
    .catch(error => console.error('Error:', error));
  }
  catch(error){console.error("Error:", error)};
}
// export default {
//   name: 'news',
 
// }
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
#news{
  
  padding: 0%;
  border: solid 5px $themeColor1;
  // display: flex;
  align-items: center;
  width: 90%;
  div.row{
    width: 100%;
  .newItem{
    // 字不換行且多餘的用...顯示
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    height: 200px;
    // box-sizing: border-box;
    
    border: 2px solid $themeColor1;
    // margin: 5px;
    // display: inline-block;
    background-position: center;
    background-size: cover;
    border-radius: 50px;
    
    h4{
    color: rgb(247, 224, 21);
    border: 1cp solid black;
    background:linear-gradient(rgba(0,0,0,20%),black)
    }
    img{
      width: 30%;
      height: 20%;
    }
  }
  }
  
  
}
</style>
