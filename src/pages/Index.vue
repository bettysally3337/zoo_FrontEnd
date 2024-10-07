<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(z, index) in zone"
        class="carousel-item"
        :class="{ active: index == 0 }"
      >
        <a
          :href="zoneLink + z"
          class="w-90 align-items-center"
          style="background-color: pink"
        >
          <!-- <img src="@/assets/zoo_index.jpg" class="d-block w-100" alt="..." /> -->
          <img :src="aniImg[index]" class="d-block w-100" alt="..." />

          <div class="carousel-caption d-none d-md-block">
            <!-- <h5>{{ z }}</h5>
            <p>currentZone{{ currentZone }}</p> -->
            <ToTheZone
              :msg="z"
              @ToTheZonePic="handleToTheZonePic"
              v-show="false"
              type="3"
            />
          </div>
        </a>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!-- <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
  </div>

  <nav class="nav nav-pills nav-justified">
    <a class="nav-link col-sm-12 col-md-4" href="/OperatingInfo"
      ><i class="bi bi-alarm-fill"></i><br />營業時間</a
    >
    <a class="nav-link col-sm-12 col-md-4" href="/ZooMap"
      ><i class="bi bi-pin-map-fill"></i><br />園區地圖</a
    >
    <a class="nav-link col-sm-12 col-md-4" href="/Facility"
      ><i class="bi bi-shop-window"></i>
      <br />
      園區設施</a
    >
  </nav>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import ToTheZone from "./ToTheZone.vue";
let result = ref([]);

export default {
  data() {
    return {
      isActive: false,
      zone: [
        "熱帶雨林館",
        "大貓熊",
        "澳洲動物區",
        "兩棲爬蟲動物館",
        "鳥園區",
        "非洲動物區",
        "溫帶動物區",
      ],
      zoneLink: "http://34.168.211.105/ToTheZone/?",
      aniImg: [],
    };
  },
  components: { ToTheZone },
  methods: {
    handleToTheZonePic(data) {
      console.log("handleToTheZonePic");
      console.log(data);
      result.value = data;
      console.log("data._value");
      console.log(result.value[0].a_Pic01_URL);
      this.aniImg = this.aniImg.concat(result.value[0].a_Pic01_URL);
      console.log(this.aniImg);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

// 設定大圖Carousel
#carousel-inner {
  h1 {
    font-family: inherit;
  }
}

// 設定底下三個圖示導覽列
.nav {
  a.nav-link {
    color: $themeColor1;
    font-weight: bold;
    margin: 0 5px;

    text-decoration: none; /* 移除下劃線 */
    background: linear-gradient(to left top, transparent 50%, $themeColor3 50%);
    background-size: 200% 200%; /* 設置背景大小以便於動畫 */
    background-position: right bottom; /* 初始背景位置 */
    transition: background-position 0.5s ease; /* 過渡效果 */
    &:hover {
      background-position: left top; /* 鼠標懸停時移動背景 */
      color: $themeColor6 !important;
    }
    i.bi {
      font-size: 5em;
      color: $themeColor6;
    }
  }
}
</style>
