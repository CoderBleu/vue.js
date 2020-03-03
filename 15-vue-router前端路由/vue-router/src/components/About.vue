<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，嘿嘿嘿</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log("created");
    document.title = "关于";
  }
};
</script>

<style scoped>
</style>