<template>
  <div id="guestservices">
    <!-- <div v-for="item in result"> -->
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
const result = ref([]);
import { ref, onMounted } from "vue";

onMounted(() => {
  makeRequest();
});
async function makeRequest(params) {
  try {
    fetch("http://localhost:5134/guestservices")
      .then((Response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status!${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("facility api回傳資料:" + JSON.parse(data.data));
        result = JSON.parse(data.data);
      });
  } catch (error) {
    console.log(error);
  }
}
</script>
