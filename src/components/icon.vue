<template>
    <span style="display: inline-block">
        <span :class="['iconfont', iconname]"></span>
    </span>
</template>
<script>
export default {
  data: function(){
      return{
      }
  },
  props:{
      iconname:{
        default: '',
        type: String
      }
  },
  components: {
  }
}
</script>


<style scoped>
@font-face {
font-family: "iconfont";
  src: url('../assets/font/iconfont.eot?t=1515379534052'); /* IE9*/
  src: url('../assets/font/iconfont.eot?t=1515379534052#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('../assets/font/iconfont.ttf?t=1515379534052') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../assets/font/iconfont.svg?t=1515379534052#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:1.6rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xinxigongkailan01:before { content: "\e63f"; }

.icon-dianhua:before { content: "\e615"; }

.icon-bofang:before { content: "\e624"; }
  
</style>