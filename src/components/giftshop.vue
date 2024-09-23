<template>
  <div id="giftshop">
    <div v-for="item in result" class="card" style="width: 18rem">
      <img :src="item.picUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">
          {{ item.brief }}
        </p>
        <p id="memo">{{ item.memo }}</p>
        <p id="location">{{ item.location }}</p>
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
async function makeRequest(params) {
  try {
    fetch("http://localhost:5134/Facility/giftshop")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status!${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("facility api回傳資料:");
        console.log(data);
        result.value = data;
      });
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#giftshop {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div.card {
    margin: 0.5em;
    border: 3px dashed $themeColor3;
    .card-title {
      color: $themeColor2;
    }
    #location {
      color: $themeColor5;
    }
  }
}
</style>
