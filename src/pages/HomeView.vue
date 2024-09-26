<template>
    <Banner :parentMsg=area_title />
    
    <!-- <swiper
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="navigation"
      :modules="modules"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      class="mySwiper"
    >
   
        <span v-if=value.a_Pic01_URL>
          <swiper-slide>
          <img
              :src=value.a_Pic01_URL
              :alt=value.a_Pic01_ALT
            />
          </swiper-slide>
        </span>
        <span v-if=value.a_Pic02_URL>
          <swiper-slide>
          <img
              :src=value.a_Pic02_URL
              :alt=value.a_Pic02_ALT
            />
          </swiper-slide>
        </span>
        <span v-if=value.a_Pic03_URL>
          <swiper-slide>
          <img
              :src=value.a_Pic03_URL
              :alt=value.a_Pic03_ALT
            />
          </swiper-slide>
        </span>
        <span v-if=value.a_Pic04_URL>
          <swiper-slide>
          <img
              :src=value.a_Pic04_URL
              :alt=value.a_Pic04_ALT
            />
          </swiper-slide>
        </span>
   
      <div class="swiper-button-prev"/>
      <div class="swiper-button-next" />
    </swiper> -->
    <!-- <HelloWorld msg="我的動物園Vue專案你好" /> -->
    <h1>{{ area_title }}</h1>
    <div class="container-fluid">
      <div v-for="(value, index) in el">
        <div class="card" data-animation="true">
          <div class="card-header p-0 position-relative mt-6 mx-6 col-m z-index-2">
            <h4 class="font-weight-normal mt-3">
              <a>{{ value.a_Name_Ch }}</a>
            </h4>
            <h8 class="font-weight-normal mt-3">
              <a>{{ value.a_Name_En }}</a> / <a>{{ value.a_Name_Latin }}</a>
            </h8>
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
                    disableOnInteraction: false
                  }"
                  class="mySwiper"
                >
                      <swiper-slide v-if=value.a_Pic01_URL>
                      <img
                          :src=value.a_Pic01_URL
                          :alt=value.a_Pic01_ALT
                           class="img-fluid shadow border-radius-lg"
                        />
                      </swiper-slide>
                      <swiper-slide v-if=value.a_Pic02_URL>
                      <img
                          :src=value.a_Pic02_URL
                          :alt=value.a_Pic02_ALT
                           class="img-fluid shadow border-radius-lg"
                        />
                      </swiper-slide>
                      <swiper-slide v-if=value.a_Pic03_URL>
                      <img
                          :src=value.a_Pic03_URL
                          :alt=value.a_Pic03_ALT
                           class="img-fluid shadow border-radius-lg"
                        />
                      </swiper-slide>
                      <swiper-slide v-if=value.a_Pic04_URL>
                      <img
                          :src=value.a_Pic04_URL
                          :alt=value.a_Pic04_ALT
                           class="img-fluid shadow border-radius-lg"
                        />
                      </swiper-slide>
              
                  <div class="swiper-button-prev"/>
                  <div class="swiper-button-next" />
                </swiper>
            </a>
            <div class="colored-shadow" :style="{ 'background-image': 'url(' + value.a_Pic01_URL + ')' }"></div>
          </div>
          <div class="card-body text-center">
            <div class="d-flex mt-n6 mx-auto">
              <a class="btn btn-link text-primary ms-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh">
                <i class="material-icons text-lg">refresh</i>
              </a>
              <button class="btn btn-link text-info me-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                <i class="material-icons text-lg">edit</i>
              </button>
            </div>
            <h5 class="font-weight-normal mt-3">
              <span v-for="(v, index) in value.a_Location.split(';')">
              <a :href="'http://localhost:8000/ToTheZone/?' + v"> {{ v }}</a>
              <span v-if="index < value.a_Location.split(';').length-1">,</span></span>
            </h5>
            <p class="mb-0">
              {{ value.a_Feature }}
            </p>
          </div>
          <hr class="dark horizontal my-0">
          <div class="card-footer d-flex">
            <p class="font-weight-normal my-auto"> {{ value.a_Conservation }}</p>
            <i class="material-icons position-relative ms-auto text-lg me-1 my-auto">生存地</i>
            <p class="text-sm my-auto"> {{ value.a_Distribution }}</p>
          </div>
        </div>
      </div>
    
      
    </div>

    <Plants :parentMsg=area_title />
    <el-calendar>
      <template #date-cell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }}
          {{ data.isSelected ? '✔️' : '' }}
        </p>
      </template>
    </el-calendar>
</template>
  
<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Banner from '../components/Banner.vue';
import Plants from '../components/Plants.vue';           
// import Swiper JS
import '../swiper/css/style.css';  
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper Vue.js components
import 'swiper/css';                              // Import Swiper styles
import 'swiper/css/navigation';                   // Swiper 底下圓點
import 'swiper/css/pagination';                   // Swiper 左右箭頭
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // import required modules

const modules = ref([Autoplay, Navigation, Pagination]);
const navigation = ref({
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
});

import axios from 'axios'
import { ref, onMounted } from 'vue'


const el = ref();
var area_title = decodeURI(location.search.substring(1));
// 網頁載入時會觸發的方法
onMounted(() => {
  console.log("test-" + area_title);
  // Make a request for a user with a given ID
  // axios.get('http://34.19.76.169:5000/v1/my-first-api/"兒童動物區"')
  // axios.get('http://localhost:5000/v1/my-first-api/' + area_title)
  axios.get('https://localhost:5000/ZonedAnimal/' + area_title)
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

<style lang=scss scoped>
// @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");
@import "@/assets/styles/main.scss";
.is-selected {
    color: #1989fa;
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  padding: 24px;
  // font-family: "Source Sans Pro", sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.container {
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  width: 100%;
  border: 1px solid #EEEEEE;
}

.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: 18px 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: 18px 0;
}

.table-row:nth-of-type(odd) {
  background: #EEEEEE;
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: 24px;
  padding-right: 24px;
}

.filter__link::after {
  content: "";
  position: absolute;
  right: -18px;
  color: white;
  font-size: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.filter__link.desc::after {
  content: "(desc)";
}

.filter__link.asc::after {
  content: "(asc)";
}
  </style>