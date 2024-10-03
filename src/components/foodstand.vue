<template>
  <div id="foodstand">
    <div v-for="item in result" class="card" style="width: 18rem">
      <img :src="item.s_Pic01_URL" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.s_Title }}</h5>
        <p class="card-text" id="meal">
          {{ item.s_Meal }}
        </p>
        <p id="location">{{ item.s_Location }}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const result = ref([]);
import { ref, onMounted } from "vue";

onMounted(() => {
  makeRequest();
});
async function makeRequest() {
  try {
    fetch("https://localhost:8000/Facility/foodstand")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status!${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        result.value = data;

        //替換成換行符號---沒有效
        // result.value.forEach((value) => {
        //   console.log(value + value.meal);
        //   let string = value.meal.replace("/\r\n", "**好<br />");
        //   value.meal = string;
        // });

        // console.log("facility api回傳資料:" + JSON.parse(data.data));
        // result = JSON.parse(data.data);
      });
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#foodstand {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div.card {
    margin: 0.5em;
    border: 8px dashed $themeColor3;
    .card-body {
      color: $themeColor6;
      font-family: inherit;
      .card-title {
        color: $themeColor2;
      }
      #meal {
        white-space: pre-line;
      }
      #location {
        color: $themeColor5;
      }
    }
  }
}
</style>
