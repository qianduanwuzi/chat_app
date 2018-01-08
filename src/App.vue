<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function() {
    /* 自适应处理 */
    // 缩放比例
    var scale = 1 / window.devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width,initial-scale=' +
      scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    // 字体自适应html（rem）
    //--基准以320像素计算 
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 32 + 'px';
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  font-size: 1.6rem;
}

* {
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}
</style>
