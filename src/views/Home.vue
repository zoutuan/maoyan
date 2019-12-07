<template>
  <div class="home">
      <header>猫眼电影</header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <tab-bar></tab-bar>
      </footer>
  </div>
</template>
<script>
import TabBar from "../components/TabBar"
export default {
  name: "home",
  components: {
    TabBar
  }
};
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    height: 100%;
    .header,.footer{
      flex: 0;
      flex-basis: auto;
      height: auto;
    }
    header{
      height: 0.5rem;
      background: #e54847;
      text-align: center;
      font-size: 0.2rem;
      line-height: 0.5rem;
      color: #ffffff;
    }
    main{
       flex: 1;
       min-height: 0px;
       & ::v-deep nav {
       position: static;
    }
    }

  }
</style>