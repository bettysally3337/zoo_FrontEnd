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
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import news from "@/components/news.vue";
import events from "@/components/events.vue";
import announcements from "@/components/announcements.vue";
import "bootstrap";

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
</style>
