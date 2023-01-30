<template>
    <div id="platform" class="platform">
        <div class="col-left">
            <div class="menu-switch">
                <button class="menu-switch-button">
                    <i class="menu-switch-icon menu-icon icon-shouqi"></i>
                </button>
            </div>
            <div id="slide-menu">
                <ul class="menu">
                    <router-link tag="li" to="/manageHome/platform/developerIndex" class="menu-item menu-item-level-1 menu-leaf">
                        <div class="menu-wrapper">
                            <p class="menu-link menu-link-level-1">
                                开发者中心
                            </p>
                        </div>
                        <i class="menu-link-icon menu-icon icon-zonglan"></i>
                    </router-link>
                    <li class="menu-item menu-item-level-1 active">
                        <div class="menu-wrapper">
                            <p class="menu-link menu-link-level-1">
                                我的应用
                            </p>
                            <ul class="sub-menu menu-2">
                                <router-link tag="li" to="/manageHome/platform/appManage" class="menu-item menu-item-level-2 can-toggle menu-leaf approute">
                                    <div class="menu-wrapper">
                                        <p class="menu-link menu-link-level-2">
                                            应用
                                        </p>
                                    </div>
                                </router-link>
                            </ul>
                        </div>
                        <i class="menu-link-icon menu-icon icon-yingyong"></i>
                    </li>
                    <li class="menu-item menu-item-level-1 active">
                        <div class="menu-wrapper">
                            <p class="menu-link menu-link-level-1">
                                研发服务
                            </p>
                            <ul class="sub-menu menu-2">
                                <router-link tag="li" to="/manageHome/platform/yanfa" class="menu-item menu-item-level-2 can-toggle menu-leaf">
                                    <div class="menu-wrapper">
                                        <p class="menu-link menu-link-level-2">
                                            Skyfield
                                        </p>
                                    </div>
                                </router-link>
                            </ul>
                        </div>
                        <i class="menu-link-icon menu-icon icon-yanfa"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
    .platform{
        background: #fff;
        display: flex;
        display: -webkit-flex;
        min-height: 100%;
        .col-left{
            width: 215px;
            -webkit-transition: .2s ease width;
            transition: .2s ease width;
            line-height: 45px;
            overflow: hidden;
            &:after{
                -webkit-transition: .2s ease width;
                transition: .2s ease width;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                content: "";
                width: 215px;
                background: #fff;
                box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.12);
                z-index: 0;
            }
            .menu-icon {
                line-height: 45px;
            }
            .menu-switch-button{
                display: block;
                width: 100%;
                height: 61px;
                border: none;
                outline: none;
                position: relative;
                z-index: 1;
                background: transparent;
                -webkit-appearance: button;
                cursor: pointer;
                .menu-switch-icon{
                    position: absolute;
                    -webkit-transition: .2s ease transform;
                    transition: .2s ease transform;
                    content: '';
                    top: 8px;
                    left: 0;
                    right: 0;
                    overflow: hidden;
                    font-size: 16px;
                    color: #666;
                }
            }
            #slide-menu{
                position: relative;
                z-index: 10;
                .menu-item-level-1 {
                    position: relative;
                    &:before {
                        content: "";
                        height: 1px;
                        margin-left: -3px;
                        background: #e0e0e0;
                        display: block;
                    }
                }
                .menu-link {
                    font-size: 16px;
                    color: #1a1a1a;
                    display: block;
                    position: relative;
                    height: 42px;
                    line-height: 42px;
                    box-sizing: border-box;
                    overflow: hidden;
                    padding-left: 60px;
                    height: 42px;
                    line-height: 42px;
                    border-left: 3px solid transparent;
                }
                .menu-leaf{
                    cursor: pointer;

                    &:hover{
                        background: #f8f8f8;
                        .menu-link{
                            color: #00b3d5;
                        }
                        .menu-icon{
                            color: #00b3d5;
                        }
                    }
                }
                .sub-menu .menu-link {
                    font-weight: normal;
                    font-size: 14px;
                }
                .menu-leaf .menu-link-level-1 {
                    color: #1a1a1a;
                    cursor: pointer;
                }
                .menu-link-level-1 {
                    position: relative;
                    color: #a0a0a0;
                    height: 63px;
                    line-height: 63px;
                    cursor: default;
                }
                .menu-leaf .menu-link-icon {
                    color: #1a1a1a;
                }
                .menu-link-icon {
                    width: 22px;
                    height: 22px;
                    left: 24px;
                    top: 21px;
                    position: absolute;
                    font-size: 22px;
                    line-height: 1;
                    color: #a0a0a0;
                    &.icon-zonglan{
                        &:before{
                            content: "\e649";
                        }
                    }
                }
                .router-link-active{
                    .menu-link{
                        color: #00b3d5;
                        border-left: 3px solid #00b3d5;
                    }
                    .menu-icon{
                        color: #00b3d5;
                    }
                }
            }
        }
        .col-right{
            flex:1;
            padding-left: 30px;
        }
    }
</style>