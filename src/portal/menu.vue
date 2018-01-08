<template>
        <van-row class="bottom_menu">
            <van-col v-for="(one, index) in menuList" :key="index" span="6">
                <!--icon add-->
                <icon :iconname="one.icon"></icon>
                <router-link :to="one.url">{{one.name}}</router-link>
            </van-col>
        </van-row>
</template>
<script>
import menuList from "@/portal/menu.js"
export default {
    name: 'menu',
    data: function() {
        return {
            menuList: menuList
        }
    },
    computed: {
    },
    mounted: function() {

    },
    components: {
    }
}
</script>
<style scoped>
.bottom_menu{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>