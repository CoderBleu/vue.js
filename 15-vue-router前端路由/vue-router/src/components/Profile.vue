<template>
  <div>
    <h2>我是profile组件</h2>
    <!-- 取query中的值 -->
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>

</style>