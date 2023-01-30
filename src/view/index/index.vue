<template>
    <div id="index" class="index">
        <div class="index-banner nebula-banner">
            <particleground></particleground>
            <div class="nebula-item">
                <img src="../../assets/img/logo.svg">
                <h3>Skyfield</h3>
                <p>开放生态，携手共创</p>
            </div>
        </div>
        <div class="nebula-copyright">
            Copyright © 2017-doomsday Skyfield. All Rights Reserved.
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import VueRouter from 'vue-router';
    import particleground from '../../components/particleground/particleground.vue';
    export default {
        components: {
            particleground
        }
    }
</script>
<style lang="scss" scoped>
    .index{
        display: flex;
        flex-direction: column;
        .index-banner {
            width: 100%;
            height: calc(100% - 60px);
            position: relative;
            flex:1;
            min-height: calc(100% - 60px);
            .nebula-item{
                text-align: center;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                padding: 10px;
                &:hover{
                    img{
                        box-shadow: 0 0 10px rgba(255,255,255,.3);
                    }
                }
                img{
                    display: inline-block;
                    background: #fff;
                    border: 0;
                    padding: 20px;
                    width: 100px;
                    height: 100px;
                    border-radius: 20px;
                    box-shadow: 0 0 10px rgba(0,0,0,.3);
                    transition: all .2s ease-in;
                    box-sizing:border-box;
                }
                h3{
                    font-size: 30px;
                    padding: 10px 20px 30px;
                    font-weight: lighter;
                }
                p{
                    font-size: 18px;
                    font-weight: lighter;
                }
            }
        }
        .nebula-copyright{
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            color: #333;
            border-top: 1px solid #efefef;
            background: #fff;
        }
    }
</style>