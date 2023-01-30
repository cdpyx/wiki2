<template>
    <div id="developerIndex" class="developerIndex">
        <header class="m_header">
            <h2>概览</h2>
        </header>
        <div class="m_content">
            <div class="area appTemplateList">
                <Row :gutter="24">
                    <template v-for="item in appTemplateList">
                        <Col span="8">
                            <Card class="box" :bordered="false" :padding="0">
                                <figure>
                                    <img :src="item.logo" :alt="item.cardDesc">
                                    <figcaption>{{item.cardName}}</figcaption>
                                </figure>
                                <p class="text">{{item.cardDesc}}</p>
                                <Button type="primary" @click="createApp(item.appType)">创建</Button>
                            </Card>
                        </Col>
                    </template>
                </Row>
            </div>
            <div class="area myAppBox">
                <Card :bordered="false" :padding="0">
                    <header class="m_2title">
                        <h3>我的应用</h3>
                    </header>
                    <div class="myAppList">
                        <div class="loading-box" v-if="spinShow">
                            <Spin size="large" fix></Spin>
                        </div>
                        <div class="app-box">
                            <Row :gutter="24">
                                <template v-for="item in userAppList">
                                    <Col span="4" class="col-app">
                                        <router-link tag="div" class="link-box box" to="">
                                            <figure>
                                                <img :src="item.logo" :alt="item.name">
                                                <figcaption>{{item.name}}</figcaption>
                                            </figure>
                                        </router-link>
                                    </Col>
                                </template>
                            </Row>
                            <div class="no-app" v-if="isAppLength">
                                还未创建应用哦，快去创建吧
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                appTemplateList: [],
                userAppList: [],
                spinShow: true,
                isAppLength: false
            }
        },
        computed: {

        },
        mounted() {
            this.axios({
                method: 'get',
                url: '/static/json/getAppTemplate.json',
                responseType:'json'
            }).then( (response) => {
                console.log(response.data);
                this.appTemplateList = response.data;
            })
            this.getUserApp();
        },
        methods: {
            getUserApp() {
                this.axios({
                    method: 'get',
                    url: '/static/json/getUserApp.json',
                    responseType:'json'
                }).then( (response) => {
                    console.log(response.data);
                    this.userAppList = response.data;
                    this.spinShow = false;
                    if (response.data.length == 0) {
                        this.isAppLength = true;
                    } else {
                        this.isAppLength = false;
                    }
                })
            },
            createApp(appType) {
                this.$router.push('/manageHome/platform/appCreate?appType=' + appType);
            }
        }
    }
</script>
<style scoped lang="scss">
    .developerIndex{
        .m_header{
            padding: 18px 30px 18px 0;
            background: #fff;
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 25px;
            h2{
                font-weight: 400;
                font-size: 20px;
                line-height: 1;
                color: #1a1a1a;
            }
        }
        .m_content{
            padding-right: 30px;
            .area{
                margin-bottom: 25px;
                &.appTemplateList{
                    .box{
                        padding: 24px;
                        border: 1px solid #e7e7e7;
                        text-align: center;
                        img{
                            display: inline-block;
                            margin-bottom: 12px;
                            width: 64px;
                            height: 64px;
                        }
                        figcaption{
                            margin-bottom: 8px;
                            display: block;
                            font-size: 16px;        
                        }
                        .text{
                            margin-bottom: 12px;
                            color: gray;
                            font-size: 12px;
                        }
                    }
                }
                &.myAppBox{
                    border: 1px solid #e7e7eb;
                    .m_2title{
                        padding: 15px 25px;
                        border-bottom: 1px solid #e7e7eb;
                        margin-bottom: 25px;
                        h3{
                            font-size: 16px;
                            font-weight: 400;
                            color: #1a1a1a;
                        }
                    }
                    .myAppList{
                        position: relative;
                        padding: 15px 20px 10px;
                        .loading-box{
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                        .col-app{
                            margin-bottom: 30px;
                        }
                        .box{
                            &.link-box{
                                cursor: pointer;
                            }
                            text-align: center;
                            img{
                                width: 80px;
                                height: 80px;
                            }
                            figcaption{
                                font-size: 16px;
                                color: #1a1a1a;
                                text-align: center;
                                display: block;
                                word-wrap: normal;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                        }
                        .no-app{
                            height: 94px;
                            padding-bottom: 25px;
                            padding-top: 30px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>