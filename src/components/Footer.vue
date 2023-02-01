<template>
  <footer class="bg-secondary  px-10 md:px-28 pt-12 pb-3">
    <div class="flex item-center">
      <div class="w-10 h-10 bg-primary rounded-xl flex items-center">
        <img src="@/assets/logo.svg" alt="" class=" w-8 h-8" />
      </div>
      <h2 class="text-white font-bold text-xl pl-1">MyLearning</h2>
    </div>
    <div class="flex mt-16 items-center justify-between">
      <p class="text-white text-base">
        Bütün hüquqlar qorunur | © Prosper
      </p>
      <p class="text-xs text-white">Created by Prosper</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
