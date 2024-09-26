<template>
  <div id="giftshop">
    <div v-for="item in result" class="card" style="width: 18rem">
      <img :src="item.s_Pic01_URL" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.s_Title }}</h5>
        <p class="card-text">
          {{ item.s_Brief }}
        </p>
        <hr />
        <p id="memo">
          {{ item.s_Memo }}
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
async function makeRequest(params) {
  try {
    fetch("https://localhost:7248/Facility/guestservices")
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
    border: 8px dashed $themeColor3;
    .card-body {
      color: $themeColor6;
      font-family: inherit;
      .card-title {
        color: $themeColor2;
      }
      #location {
        color: $themeColor5;
      }
    }
  }
}
</style>
