<template>
    <div>
        <!--top banner-->
        <top-banner></top-banner>
        <!--child comp-->
        <router-view></router-view>
        <!--bottom menu-->
        <menus></menus>
    </div>
</template>
<script>
import topBanner from "@/portal/topBanner"
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
        menus, topBanner
    }
}
</script>
<style scoped>

</style>