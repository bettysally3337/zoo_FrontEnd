<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">餐飲服務</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">特色商店</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
  <router-view />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

ul.nav {
  margin: 5px 10px;
}
</style>
