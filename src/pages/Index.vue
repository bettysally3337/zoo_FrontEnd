<template>
  <img src="@/assets/zoo_index.jpg" class="img-fluid" alt="..." />
  <nav class="nav nav-pills nav-justified">
    <a class="nav-link col-sm-12 col-md-4" aria-current="page" href="#"
      ><img
        src="@/assets/index_icons/clock.png"
        class="icon"
        alt=""
      /><br />營業時間</a
    >
    <a class="nav-link col-sm-12 col-md-4" href="#"
      ><img
        src="@/assets/index_icons/map.png"
        class="icon"
        alt=""
      /><br />園區地圖</a
    >
    <a class="nav-link col-sm-12 col-md-4" href="/Facility"
      ><img src="@/assets/index_icons/store.png" class="icon" alt="" />
      <br />
      園區設施</a
    >
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

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
    color: $themeColor6;
  }
  img.icon {
    width: 50%;
    min-width: 70px;
  }
}
</style>
