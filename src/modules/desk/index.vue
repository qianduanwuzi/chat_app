<template>
    <div>
       <van-row v-for="(one, index) in deskMenuList" :key="index" class="menu_row">
            <van-col span="8" offset="2" class="menu_txt">
                <icon :iconname="one.icon"></icon>
                <router-link :to="one.url">{{one.name}}</router-link>
            </van-col>
            <van-col span="12" class="menu_arrow">
                <van-icon name="arrow" />
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
    margin-top: .5rem;
}

.menu_txt{
    text-align: left;
}

.menu_arrow{
    text-align: right;
}
</style>