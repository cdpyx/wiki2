<template>
    <li class="list-group-item" :class="menuItem.nav_level ? 'my-nav-level' + menuItem.nav_level : ''">
        <a v-if="menuItem.obj_type == 2" @click="loadContent(menuItem.url)">{{menuItem.name}}</a>
        <label v-if="menuItem.obj_type == 1" class="my-nav-group">{{menuItem.label}}</label>
        <ul class="list-group" v-if="isChild">
            <template v-for="item in menuItem.child">
                <sideMenu :menuItem="item"></sideMenu>
            </template>
        </ul>
    </li>
</template>
<script>
    import bus from './../../assets/js/eventBus.js';
    export default {
        name: 'sideMenu',
        props: ['menuItem'],
        data() {
            return {
                defaultSrc: ''
            }
        },
        computed: {
            isChild() {
                return this.menuItem.child && this.menuItem.child.length
            }
        },
        mounted() {
            
        },
        methods: {
            loadContent(url) {
                bus.$emit('loadContent', url);
                // console.log(url);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list-group-item{
        font-size: 14px;
        line-height: 20px;
        position: relative;
        a{
            display: block;
            margin: 2px 0;
            padding: 8px 10px;
            color: #555;
            transition-timing-function: linear;
            transition-property: all;
            cursor: pointer;
            &:hover{
                transition-timing-function: linear;
                transition-property: all;
                color: #00b3d5;
            }
        }
        .my-nav-group{
            color: #888;
            display: block;
            padding: 5px 10px;
            font-weight: 700;
            margin: 0;
            font-size: 15px;
        }
        &.my-nav-level2{
            .my-nav-group{
                padding-left: 26px;
                font-weight: 300;
                margin-top: 10px;
            }
            a{
                padding-left: 36px;
            }
        }
    }
</style>