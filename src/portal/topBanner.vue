<template>
    <van-row class="top_banner_container">
        {{mes}} <span v-if="count && $route.path == '/mes'">{{count}}</span>  
    </van-row>
</template>
<script>
import {topBannerList} from "@/portal/menu.js"
export default {
    name: 'top-banner',
    data: function() {
        return {
            topBannerList,
            mes: '消息', 
            count: 0, // 未读消息
        }
    },
    computed: {
        
    },
    mounted: function() {
    },
    methods:{
        getMes(url) {
            let arr = this.topBannerList;
            if(url == '/mes') {
                // ajax 获取未读消息 count
                this.count = (Math.random()*100).toFixed(0) + 1
            }
            this.mes = arr.find(item => item.url == url).mes || ''
        }
    },
    components: {
    },
    watch: {
        // 监听路由
        "$route": {
            deep: true,
            handler: function(val, oldVal) {
                this.getMes(val.path)
            }
        }
    }
}
</script>
<style scoped>
.top_banner_container {
    height: 6rem;
    line-height: 6rem;
    background-color: rgb(000, 000, 000);
    width: 100%;
    color: #fff;
}
</style>