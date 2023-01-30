<template>
    <div id="appManage" class="appManage">
        <header class="m_header">
            <h2>我的应用</h2>
            <Button type="primary" @click="createApp">创建应用</Button>
        </header>
        <div class="m_content">
            <Table border :columns="columns" :data="appList"></Table>
            <div style="margin-top: 20px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="total" :current="1" @on-change="changePage" size="small"></Page>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        title: '应用名称',
                        key: 'appName',
                        width: 300
                    },
                    {
                        title: 'APPID',
                        key: 'appId'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        width: 150
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 80,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '查看')
                            ]);
                        }
                    }
                ],
                appList: [],
                total: 0
            }
        },
        mounted() {
            this.axios({
                method: 'get',
                url: '/static/json/appManage.json',
                responseType:'json'
            }).then( (response) => {
                console.log(response.data);
                this.total = response.data.appAmount;
                console.log(typeof(this.total));
                this.appList = response.data.appInfoList;
            })
        },
        methods: {
            changePage() {
                console.log("data");
            },
            createApp(appType) {
                this.$router.push('/manageHome/platform/appCreate');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .appManage{
        .m_header{
            padding: 18px 30px 18px 0;
            background: #fff;
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 25px;
            display: flex;
            display: -webkit-flex;
            justify-content:space-between;
            -webkit-justify-content:space-between;
            h2{
                font-weight: 400;
                font-size: 20px;
                line-height: 1;
                color: #1a1a1a;
                line-height: 28px;
            }
        }
        .m_content{
            padding-right: 30px;
        }
    }
</style>