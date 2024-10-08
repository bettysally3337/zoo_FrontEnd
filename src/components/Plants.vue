<template>
  <div class="container-fluid">
    <div v-for="(value, index) in el">
      <div class="card" data-animation="true">
        <div
          class="card-header p-0 position-relative mt-6 mx-6 col-m z-index-2"
        >
          <h4 class="font-weight-normal mt-3">
            <a>{{ value.f_Name_Ch }}</a>
          </h4>
          <h8 class="font-weight-normal mt-3">
            <a>{{ value.f_Name_En }}</a> / <a>{{ value.f_Name_Latin }}</a>
          </h8>
          <h6 class="font-weight-normal mt-3">
            <a>{{ value.f_Family }}</a> / <a>{{ value.f_Genus }}</a>
            <span v-if="value.f_AlsoKnown"
              >/ <a>{{ value.f_AlsoKnown }}</a></span
            >
          </h6>
          <a class="d-block blur-shadow-image">
            <!-- <img :src=value.a_Pic01_URL :alt=value.a_Pic01_ALT class="img-fluid shadow border-radius-lg">
              -->
            <swiper
              :loop="true"
              :pagination="{ clickable: true }"
              :navigation="navigation"
              :modules="modules"
              :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
              }"
              class="mySwiper"
            >
              <swiper-slide v-if="value.f_Pic01_URL">
                <img
                  :src="value.f_Pic01_URL"
                  :alt="value.f_Pic01_ALT"
                  class="img-fluid shadow border-radius-lg"
                />
              </swiper-slide>
              <swiper-slide v-if="value.f_Pic02_URL">
                <img
                  :src="value.f_Pic02_URL"
                  :alt="value.f_Pic02_ALT"
                  class="img-fluid shadow border-radius-lg"
                />
              </swiper-slide>
              <swiper-slide v-if="value.f_Pic03_URL">
                <img
                  :src="value.f_Pic03_URL"
                  :alt="value.f_Pic03_ALT"
                  class="img-fluid shadow border-radius-lg"
                />
              </swiper-slide>
              <swiper-slide v-if="value.f_Pic04_URL">
                <img
                  :src="value.f_Pic04_URL"
                  :alt="value.f_Pic04_ALT"
                  class="img-fluid shadow border-radius-lg"
                />
              </swiper-slide>

              <div class="swiper-button-prev" />
              <div class="swiper-button-next" />
            </swiper>
          </a>
          <div
            class="colored-shadow"
            :style="{ 'background-image': 'url(' + value.f_Pic01_URL + ')' }"
          ></div>
        </div>
        <div class="card-body text-center">
          <div class="d-flex mt-n6 mx-auto">
            <a
              class="btn btn-link text-primary ms-auto border-0"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Refresh"
            >
              <i class="material-icons text-lg">refresh</i>
            </a>
            <button
              class="btn btn-link text-info me-auto border-0"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Edit"
            >
              <i class="material-icons text-lg">edit</i>
            </button>
          </div>
          <h5 class="font-weight-normal mt-3">
            <span v-for="(v, index) in value.f_Location.split('；')">
              <a :href="'http://34.168.211.105/ToTheZone/?' + v"> {{ v }}</a>
              <span v-if="index < value.f_Location.split('；').length - 1"
                >,</span
              ></span
            >
          </h5>
          <p class="mb-0">
            {{ value.f_Feature }}
          </p>
          <p class="mb-0">
            {{ value.f_Function_Application }}
          </p>
        </div>
        <hr class="dark horizontal my-0" />
        <div class="card-footer d-flex">
          <p class="font-weight-normal my-auto">{{ value.f_AlsoKnown }}</p>
          <i
            class="material-icons position-relative ms-auto text-lg me-1 my-auto"
            >分布區</i
          >
          <p class="text-sm my-auto">{{ value.f_Brief }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Swiper JS
import "../swiper/css/style.css";
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper Vue.js components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Swiper 底下圓點
import "swiper/css/pagination"; // Swiper 左右箭頭
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // import required modules

const modules = ref([Autoplay, Navigation, Pagination]);
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
import axios from "axios";
import { ref, onMounted, computed, onBeforeMount, onBeforeUpdate } from "vue";

const props = defineProps({
  parentMsg: String,
});

// const emits = defineEmits(["update:parentMsg"]);

// const inputValue = computed({
//   get() {
//     return props.parentMsg;
//   },
//   set(newValue) {
//     emits("update:parentMsg", newValue);
//   }
// });

const el = ref();
var Zone = "";
// 網頁載入時會觸發的方法
onMounted(() => {
  Zone = props.parentMsg;
  // });
  console.log("http://34.168.211.105:5000/ZonedPlant/" + Zone);
  // Make a request for a user with a given ID
  // axios.get('http://34.19.76.169:5000/v1/my-first-api/"兒童動物區"')
  // axios.get('http://localhost:5000/v1/my-first-api/' + area_title)
  axios
    .get("http://34.168.211.105:5000/ZonedPlant/" + Zone)
    .then(function (response) {
      // handle success
      console.log(response);
      el.value = response.data;

      console.log("el = " + el);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

body {
  background-color: #212121;
  /* font-family: Verdana, Geneva, sans-serif; */
}

.container {
  height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  color: #eceff1;
  font-size: 120px;
  font-weight: 600;
}

.title-large {
  height: 130px;
  margin-left: -5px;
  opacity: 0.1;
}

.img-container {
  display: inline-block;
  overflow: hidden;
  margin-left: -2.8px;
  margin-right: -2.8px;
  width: 170px;
  vertical-align: top;
  border-radius: 0px 0px 80px 80px;
  animation-name: flow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-delay: -2s;
  transition-timing-function: cubic-bezier(0, 0.57, 1, 0.46);
  box-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.5);
}

.second-animation {
  animation-delay: -1.5s;
}

.third-animation {
  animation-delay: -1s;
}

.fourth-animation {
  animation-delay: -0.5s;
}

.fifth-animation {
  animation-delay: 0s;
}

.sixth-animation {
  animation-delay: 0.5s;
}

.seventh-animation {
  animation-delay: 1s;
}

.img {
  object-fit: cover;
  width: 170px;
  height: 100vh;
  margin-top: -60px;
}

.nba {
  margin-top: -20px;
}

@keyframes flow {
  0% {
    height: 20%;
    border-radius: 0px 0px 30px 30px;
  }
  50% {
    height: 90%;
    border-radius: 0px 0px 100px 100px;
  }
  100% {
    height: 20%;
    border-radius: 0px 0px 30px 30px;
  }
}

@media only screen and (max-width: 1200px) {
  #img-7 {
    display: none;
  }
}

@media only screen and (max-width: 1028px) {
  #img-1 {
    display: none;
  }
}

@media only screen and (max-width: 860px) {
  #img-6 {
    display: none;
  }
}
</style>
