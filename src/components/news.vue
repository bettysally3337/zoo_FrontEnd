<template>
  <div id="news" class="container justify-content-evenly">
    <div class="row justify-content-evenly align-items-center">
      <a
        v-if="result && result.length"
        @click="sendData(item)"
        v-for="item in result.slice(0, 9)"
        class="col-md-4 col-lg-3 col-12 m-1"
      >
        <!-- v-bind:href="item.Source" -->
        <div
          class="newItem d-flex align-items-end"
          :style="{
            backgroundImage:
              item.相關圖片.length > 0 ? `url(${item.相關圖片[0].url})` : '',
          }"
        >
          <a v-bind:href="item.Source">
            <h4>{{ item.title }}</h4>
          </a>
        </div>
      </a>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { defineEmits } from "vue";

const result = ref([]); // 儲存API響應數據
// let result;

//抓取資料
onMounted(() => {
  makeRequest();
});

async function makeRequest() {
  try {
    fetch("http://34.168.211.105:5000/zoo-news")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        //因為回傳的是字串，所以把他轉成JSON
        console.log("Data:", JSON.parse(data));
        result.value = JSON.parse(data);

        return result;
      })
      .catch((error) => console.error("Error:", error));
  } catch (error) {
    console.error("Error:", error);
  }
}

const emit = defineEmits();

function sendData(item) {
  const data = { item };
  emit("send-news", data);
}
// export default {
//   name: 'news',

// }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#news {
  padding: 0%;
  // border: solid 5px $themeColor1;
  // display: flex;
  // align-items: center;
  width: 90%;
  div.row {
    width: 100%;
    margin: 0;
    a {
      cursor: pointer;
      .newItem {
        &:hover {
          transform: scale(1.05);
          overflow: hidden;
        }
        // 字不換行且多餘的用...顯示
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        height: 200px;
        // box-sizing: border-box;

        border: 2px solid $themeColor1;
        padding: 0;
        margin: 0;
        // display: inline-block;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        transition: all 0.5s;
        border-radius: 50px;

        h4 {
          color: $themeColor4;
          padding-left: 1em;
          background: linear-gradient(rgba(0, 0, 0, 20%), $themeColor1);
        }
        img {
          width: 30%;
          height: 20%;
        }
      }
    }
  }

  a {
    color: $themeColor4;
    background-color: none;
    text-decoration-line: none;
    &#showMore {
      background-color: $themeColor1;
      border: none;
      &:hover {
        transform: scale(1.09);
        transition: all 0.4s;
      }
    }
  }
}
</style>
