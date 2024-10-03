<template>
  <div id="events" class="container">
    <h3>舉辦活動</h3>
    <div
      v-if="result && result.length"
      v-for="(item, index) in result.slice(0, 3)"
      id="list-example"
      class="list-group"
    >
      <a
        @click="sendEvents(item)"
        class="list-group-item list-group-item-action"
        >{{ item.title }}</a
      >
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
const result = ref([]); // 儲存api資料
import { ref, onMounted } from "vue";
// import { defineEmits } from "vue";

onMounted(() => {
  makeRequest();
});
async function makeRequest() {
  try {
    fetch("https://localhost:7248/zoo-events")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status!${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        result.value = JSON.parse(data);
        console.log("z00-events result");
        console.log(result.value);
      });
  } catch (error) {
    console.log(e);
  }
}

//傳送被點擊的項目給LatestNews
const emit = defineEmits();
function sendEvents(item) {
  const data = { item };
  emit("send-events", data);
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#events {
  width: 45%;
  height: 30%;
  float: left;
  margin: 1%;
  h3 {
    font-family: inherit;
    padding: 0.25em;
    color: $themeColor4;
    background-color: $themeColor2;
  }
  a {
    color: $themeColor5;
    cursor: pointer;
    &:hover {
      color: $themeColor1;
    }
  }
}
</style>
