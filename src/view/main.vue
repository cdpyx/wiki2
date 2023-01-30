<template>
    <div id="frame" class="frame">
        <nav class="navBar">
            <router-link tag="div" to="/index" class="navBar-left">
                <span class="logo"></span>
                <h1 class="title">Skyfield开放平台</h1>
            </router-link>
            <div class="navBar-content">
                <ul class="navBar-menu">
                    <router-link tag="li" to="/developmentAccess">开发接入</router-link>
                    <router-link tag="li" to="/developmentDocument">文档中心</router-link>
                    <!-- 开发文档 -->
                    <!-- 业务文档 -->
                    <router-link tag="li" to="/about">关于我们</router-link>
                </ul>
                <ul class="navBar-login">
                    <router-link tag="li" to="">登录</router-link>
                    <router-link tag="li" to="/manageHome/platform">管理中心</router-link>
                </ul>
            </div>
        </nav>
        <router-view class="container main"></router-view>
    </div>
</template>
<script>
    import axios from 'axios';
    import VueRouter from 'vue-router';

    export default {

    }
</script>
<style lang="scss" scoped>
    .frame{
        display: flex;
        flex-direction: column;
        width: 100%;
        height:100%;
        box-sizing:border-box;
        padding-top: 80px;
        .navBar{
            background-color: #fff;
            box-shadow: 1px 0 8px rgba(0,0,0,.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 80px;
            line-height: 80px;
            z-index: 20;
            min-height: 50px;
            border-radius: 0!important;
            border-width: 0 0 1px;
            box-sizing:border-box;
            padding: 0 15px;
            display: -webkit-flex;
            display: flex;
            // -webkit-justify-content: space-between;
            .navBar-left{
                display: flex;
                cursor: pointer;
                .logo{
                    display: inline-block;
                    width: 60px;
                    height: 100%;
                    background: url('./../assets/img/logo.svg') no-repeat center;
                    background-size: auto 50px;
                }
                .title{
                    font-size: 22px;
                    padding-left: 10px;
                    &:before{
                        content:'';
                        border-left: 1px solid #000;
                        margin-right: 10px;
                    }
                }
            }
            .navBar-content{
                display: flex;
                display: -webkit-flex;
                flex:1;
                -webkit-justify-content: space-between;
                ul{
                    display: flex;
                    display: -webkit-flex;
                    li{
                        font-size: 14px;
                        transition-duration: 0.15s;
                        transition-timing-function: linear;
                        transition-property: all;
                        position: relative;
                        cursor: pointer;
                        &:hover{
                            color: #00B3D5;
                            transition-duration: 0.15s;
                            transition-timing-function: linear;
                            transition-property: all;
                        }
                    }
                }
                .navBar-menu{
                    padding: 0 20px;
                    li{
                        padding: 0 30px;
                        cursor: pointer;
                        &.router-link-active{
                            color:#00b3d5;
                            &:before{
                                position: absolute;
                                display: block;
                                content: "";
                                height: 3px;
                                background-color: #00B3D5;
                                left: 10px;
                                right: 10px;
                                bottom: 0;
                            }
                        }
                    }
                }
                .navBar-login{
                    li{
                        padding: 0 10px;
                        &:before{
                            content: '';
                            border-left: 1px solid #000; 
                            padding-right: 15px;   
                        }
                        &:first-child:before{
                            content: '';
                            border-left: 0;
                            padding-right: 0;   
                        }
                    }
                }
            }
        }
        .main{
            flex:1;
            min-height: 100%;
        }
    }
</style>