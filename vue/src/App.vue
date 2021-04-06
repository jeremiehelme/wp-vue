<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view class="main-template"></router-view>
</template>

<style lang='scss'>
@import '@/assets/scss/_commons.scss';
@import '@/assets/scss/main.scss';
</style>
