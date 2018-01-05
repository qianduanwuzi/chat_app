<template>
    <div class="item_container">
        <router-view></router-view>
        <!--bottom menu-->
        <menus></menus>
    </div>
</template>
<script>
import menus from "@/portal/menu.vue"
export default {
    name: 'main-view',
    data: function() {
        return {
        }
    },
    computed: {
    },
    mounted: function() {

    },
    components: {
        menus
    }
}
</script>
<style scoped>
.item_container{
    /*background-color: rgb(245, 245, 245)*/
}
</style>