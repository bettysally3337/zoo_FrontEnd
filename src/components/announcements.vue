<template>
  <div id="announcements">
    <h3>異動資訊</h3>
    <div
      v-if="result && result.length"
      v-for="(item, index) in result.slice(0, 3)"
      id="list-example"
      class="list-group"
    >
      <a
        @click="sendAnnouncements(item)"
        class="list-group-item list-group-item-action"
        >{{ item.title }}</a
      >
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { defineEmits } from "vue";

const result = ref([]);
onMounted(() => {
  makeRequest();
});

async function makeRequest() {
  try {
    fetch("https://localhost:7248/zoo-announcements")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Http error! Status:${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", JSON.parse(data));
        result.value = JSON.parse(data);
      })
      .catch((error) => console.error("Error:", error));
  } catch (error) {
    console.error("Error:", error);
  }
}

const emit = defineEmits();

function sendAnnouncements(item) {
  const data = { item };
  emit("send-announcements", data);
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#announcements {
  width: 45%;
  height: 30%;
  float: right;
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
