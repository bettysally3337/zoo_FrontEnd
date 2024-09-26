<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/LatestNews">最新消息</router-link> |
    <router-link to="/ZooMap">園區地圖</router-link> |
    <router-link to="/Facility">園區設施</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $themeColor6;
}

nav {
  padding: 20px 10px;
  display: flex;
  justify-content: end;
  a {
    margin: 0% 1%;
    font-weight: bold;
    color: $themeColor6;
    &.router-link-active {
      color: $themeColor3;
    }
  }
}
</style>
