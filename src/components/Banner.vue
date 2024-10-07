<template>
  <div class="container">
    <!-- <h1 class="title">{{ parentMsg }}</h1> -->
    <div v-for="value in el">
      <!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- -->
      <section class="py-9">
        <div class="container">
          <div>
            <button type="button" class="btn bg-gradient-info w-auto me-2">
              <a :href="value.e_URL" target="_blank"
                >{{ parentMsg }}語音導覽連結</a
              >
            </button>
          </div>
          <div class="row">
            <div class="col-lg-6 my-auto">
              <h1 class="title">{{ parentMsg }}</h1>
              <!-- <p class="pe-5">Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            <a href="javascript:;" class="text-primary icon-move-right">More about us
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a> -->
            </div>
            <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
              <div class="p-3 info-horizontal">
                <div
                  class="icon icon-shape bg-gradient-primary shadow-primary text-center"
                >
                  <i class="fas fa-ship opacity-10"></i>
                </div>
                <div class="description ps-6">
                  <p class="mb-0">{{ value.e_Category }}</p>
                </div>
              </div>

              <div class="p-3 info-horizontal">
                <div
                  class="icon icon-shape bg-gradient-primary shadow-primary text-center"
                >
                  <i class="fas fa-handshake opacity-10"></i>
                </div>
                <div class="description ps-6">
                  <p class="mb-0">{{ value.e_Info }}</p>
                </div>
              </div>
              <div v-if="value.e_Memo">
                <div class="p-3 info-horizontal">
                  <div
                    class="icon icon-shape bg-gradient-primary shadow-primary text-center"
                  >
                    <i class="fas fa-hourglass opacity-10"></i>
                  </div>
                  <div class="description ps-6">
                    <p class="mb-0">{{ value.e_Memo }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- -->
  </div>
</template>

<script setup>
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
  console.log("http://34.168.211.105:5000/ZonedArea/" + Zone);
  // Make a request for a user with a given ID
  // axios.get('http://34.19.76.169:5000/v1/my-first-api/"兒童動物區"')
  // axios.get('http://localhost:5000/v1/my-first-api/' + area_title)
  axios
    .get("http://34.168.211.105:5000/ZonedArea/" + Zone)
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

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
* {
  padding: 0px;
  margin: 0px;
}

body {
  background-color: #212121;
  font-family: Verdana, Geneva, sans-serif;
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
