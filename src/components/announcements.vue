<template>
  <div id="announcements">
    <h3>異動資訊</h3>
    <div
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
    fetch("http://localhost:5134/zoo-announcements")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Http error! Status:${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", JSON.parse(data.data));
        result.value = JSON.parse(data.data);
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
    padding: 0.25em;
    color: $themeColor4;
    background-color: $themeColor2;
  }
  a {
    cursor: pointer;
  }
}
</style>
