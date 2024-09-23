<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/foodstand"
        >餐飲服務</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/giftshop">特色商店</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/guestservices">其他服務</a>
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
