<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link
        class="nav-link"
        aria-current="page"
        to="/Facility/foodstand"
        exact-active-class="active"
        >餐飲服務</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/Facility/giftshop"
        >特色商店</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/Facility/guestservices"
        >其他服務</router-link
      >
    </li>
  </ul>
  <div>
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

ul.nav {
  margin: 5px 60px;
  font-size: 1.2em;

  border-color: $themeColor3;

  .nav-item {
    .nav-link {
      color: $themeColor6;
      &:hover {
        border-color: $themeColor3;
        border-width: 2px;
      }

      &:focus {
        border-color: $themeColor3;
        color: $themeColor3;
      }
      &.router-link-active {
        border-color: $themeColor3;
        color: $themeColor3;
      }
    }
  }
}
</style>
