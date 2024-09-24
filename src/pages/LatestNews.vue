<template>
  <div class="home">
    <news
      @send-news="showNews"
      data-bs-toggle="modal"
      data-bs-target="#mainModal"
    ></news>
    <hr />
    <events
      @send-events="showNews"
      data-bs-toggle="modal"
      data-bs-target="#mainModal"
    ></events>
    <announcements
      @send-announcements="showNews"
      data-bs-toggle="modal"
      data-bs-target="#mainModal"
    ></announcements>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="mainModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h3 v-if="title" class="modal-title" id="exampleModalLabel">
            {{ title }}
          </h3>
          <p v-if="date">{{ date }}</p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-if="content">{{ content }}</p>
          <img v-if="pics" v-for="pic in pics" v-bind:src="pic.url" alt="" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- toast -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
    >
      <div class="toast-header">
        <strong class="me-auto">最新動物熱門訊息</strong>
        <small>2024年9月15日</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body d-flex flex-column">
        <img
          src="https://s.yimg.com/ny/api/res/1.2/SONHFL7n3m2W1kdRqlitrg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MDtjZj13ZWJw/https://media.zenfs.com/en/gotv_ctitv_com_tw_678/51b4c634e60c864ff783cc121f49fa05"
          class="rounded me-2"
          alt="..."
        />
        <a
          href="https://tw.news.yahoo.com/%E5%BD%B1-%E6%B3%B0%E5%8B%95%E7%89%A9%E5%9C%92%E5%91%86%E8%90%8C%E6%B2%B3%E9%A6%AC%E5%AF%B6%E5%AF%B6-%E5%BD%88%E8%B7%B3%E8%B1%AC-%E5%85%A8%E7%90%83%E7%88%86%E7%B4%85-%E6%B0%A3%E5%99%97%E5%99%97%E5%A5%B6%E5%85%87%E6%A8%A1%E6%A8%A3%E8%9E%8D%E5%8C%96%E7%B6%B2-050243131.html"
          >泰動物園呆萌河馬寶寶「彈跳豬」全球爆紅</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import news from "@/components/news.vue";
import events from "@/components/events.vue";
import announcements from "@/components/announcements.vue";
import "bootstrap";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// const liveToast = document.getElementById("liveToast");

// onMounted(() => {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
//   toastBootstrap.show();
// });

export default {
  name: "LatestNew",
  data() {
    return {
      title: "",
      content: "",
      pics: [],
      date: "",
    };
  },
  components: {
    news,
    events,
    announcements,
  },
  methods: {
    showNews(data) {
      console.log("從news.vue傳來的item:");
      console.log(data);
      this.title = data.item.title;
      this.content = data.item.內容;
      this.pics = data.item.相關圖片;
      this.date = data.item.發布日期;

      console.log(this.title);
    },
    showToast() {
      const toastLiveExample = document.getElementById("liveToast");

      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    },
  },
  mounted() {
    this.showToast();
  },
  // onMounted() {
  //   const modalElement = document.getElementById("exampleModal");
  //   const modal = new bootstrap.Modal(modalElement); // 初始化模態
  // },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

hr {
  border-top: 10px dashed $themeColor6;
}
#mainModal {
  // width: 50vw;
  div.modal-header {
    h3 {
      text-align: left;
      color: $themeColor2;
    }
    p {
      color: $themeColor6;
      font-size: 1em;
    }
  }
  p {
    text-align: left;
    color: $themeColor6;
    font-size: 1.5em;
  }
  img {
    width: 100%;
  }
}

#liveToast {
  .toast-body {
    img {
      width: 100%;
    }
    a {
      color: $themeColor6;
      font-size: larger;
    }
  }
}
</style>
