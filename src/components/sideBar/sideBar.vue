<template>
    <div id="my-sidebar" class="my-sideBar">
        <h2 class="my-nav-title">{{title}}</h2>
        <ul class="list-group">
            <template v-for="menuItem in sideList">
                <sideMenu :menuItem="menuItem"></sideMenu>
            </template>
        </ul>
    </div>
</template>
<script>
    import sideMenu from '../sideMenu/sideMenu.vue';
    export default {
        components: {sideMenu},
        props: ['title','sideList'],
        data() {
            return {
                
            }
        },
        computed: {

        },
        mounted() {

        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
    .my-sideBar{
        position: fixed;
        top: 80px;
        bottom: 0;
        left: 0;
        z-index: 17;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        width: 270px;
        background-color: #fff;
        padding: 10px 10px 60px;
        background-image: linear-gradient(180deg,#e9e9e9,#fff,#fff) top left no-repeat,#fff;
        background-size: 100% 6px;
        &::-webkit-scrollbar {
            display: none;
        }
        .my-nav-title{
            color: #404040;
            font-size: 18px;
            line-height: 1;
            padding: 10px 0 20px;
            margin: 5px 10px 10px;
            border-bottom: 1px solid #e9e9e9;
        }
    }
</style>