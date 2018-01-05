<template>
    <div>
       <van-row v-for="(one, index) in deskMenuList" :key="index" class="menu_row">
            <van-col span="8">
                <!--icon add-->
                <router-link :to="one.url">{{one.name}}</router-link>
            </van-col>
            <van-col span="16">
                >
            </van-col>
        </van-row>
        <router-view></router-view>
    </div>
</template>
<script>
import deskMenuList from "./deskMenu"
export default {
    name: 'desk',
    data: function() {
        return {
            deskMenuList: deskMenuList
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
.menu_row{
    background-color: #fff;
}
</style>