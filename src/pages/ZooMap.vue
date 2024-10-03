<template>
    <head>
 
      <HelloWorld msg="動物園地圖" />
      <div>動物園地圖</div>
      
      <meta http-equiv='refresh' content='0; URL="http://104.214.172.40:3000/iframe.html?globals=backgrounds.value:!hex(F8F8F8);backgrounds.grid:false&amp;args=&amp;id=examples-simple--simple"'>
    </head>

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
import { ref, onMounted } from 'vue'

const el = ref();

// 網頁載入時會觸發的方法
onMounted(() => {
  console.log("test-" + location.search);
  var area_title = location.search.substring(1);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");
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
  font-family: "Source Sans Pro", sans-serif;
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