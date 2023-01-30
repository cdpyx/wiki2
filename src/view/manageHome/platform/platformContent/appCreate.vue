<template>
    <div id="appCreate" class="appCreate">
        <header class="m_header">
            <Breadcrumb>
                <Breadcrumb-item href="/manageHome/platform/appManage">我的应用</Breadcrumb-item>
                <Breadcrumb-item>创建应用</Breadcrumb-item>
            </Breadcrumb>
        </header>
        <div class="createContent">
            <div class="area appTemplateList" v-show="isAppTemplateShow">
                <Row :gutter="32">
                    <template v-for="item in appTemplateList">
                        <Col span="8">
                            <div class="card-wraper" @click="changeAppType(item.appType)">
                                <Card class="box" :bordered="false" :padding="0" :class="{boxActive: item.appType == appType}">
                                    <figure>
                                        <img :src="item.logo" :alt="item.cardDesc">
                                        <figcaption>{{item.cardName}}</figcaption>
                                    </figure>
                                    <p class="text">{{item.cardDesc}}</p>
                                </Card>
                            </div>
                        </Col>
                    </template>
                </Row>
                <Radio-group v-model="appType">
                    <Row>
                        <template v-for="item in appTemplateList">
                            <Col span="8" align="center">
                                <Radio :label="item.appType" style="color:#fff;"></Radio>
                            </Col>
                        </template>
                    </Row>
                </Radio-group>
            </div>
            <div class="area form">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Form-item label="名称" prop="appName">
                        <Input v-model="formValidate.appName"></Input>
                    </Form-item>
                    <Form-item label="应用图标" prop="appIcon">
                        <div class="appIcon-box">
                            <input type="file" name="" class="uploadImg" accept="image/jpeg, image/jpg, image/png" @change="uploadImg">
                            <img :src="appIconUrl">
                        </div>
                        <p class="file-type">请上传应用高清图片，支持.jpg .jpeg .png格式，建议320*320像素，小于3M </p>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('formValidate')">创建</Button>
                    </Form-item>
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                appTemplateList: [],
                isAppTemplateShow: this.$route.query.appType ? false : true,
                appType: this.$route.query.appType,
                appIconUrl: 'https://zos.alipayobjects.com/rmsportal/LHOwsfdUrDkSWYThlSqF.png',
                formValidate: {
                    appName: '',
                    appIcon: ''
                },
                ruleValidate: {
                    appName: [
                        { required: true, message: '请填写应用名称', trigger: 'blur' },
                        { type: 'string', max: 32, message: '不能超过32个字', trigger: 'blur' }
                    ],
                    appIcon: [
                    ]
                }
            }
        },
        beforeRouteLeave (to, from, next) {
            $('.approute').removeClass('router-link-active')
            next()
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
            this.$nextTick(function(){
                $('.approute').addClass('router-link-active');
            })
        },
        methods: {
            changeAppType(type) {
                this.appType = type;
            },
            handleSubmit (name) {
                if (!this.appType) {
                    this.$Message.error('请选择应用类型!');
                    return;
                }
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('创建成功!');
                    }
                })
            },
            uploadImg() {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .m_header{
        padding: 18px 30px 18px 0;
        background: #fff;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 25px;
        display: flex;
        display: -webkit-flex;
        justify-content:space-between;
        -webkit-justify-content:space-between;
        .ivu-breadcrumb{
            span:last-child{
                font-weight: 400;
                font-size: 20px;
                line-height: 1;
                color: #1a1a1a;
                line-height: 24px;
            }
        }
    }
    .createContent{
        padding: 0px 150px 30px;
        .area{
            margin-bottom: 25px;
            &.appTemplateList{
                margin-bottom: 30px;
                .card-wraper{
                    padding-bottom: 14px;
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
                        &.boxActive{
                            border: 1px solid #108ee9;
                        }
                    }
                }
                .ivu-radio-group{
                    width: 100%;
                }
            }
            &.form{
                .appIcon-box{
                    width: 80px;
                    height:80px;
                    position: relative;
                    border-radius: 4px;
                    line-height: 80px;
                    .uploadImg{
                        display: block;
                        position: absolute;
                        width: 80px;
                        z-index: 2;
                        /* visibility: hidden; */
                        height: 80px;
                        opacity: 0;
                    }
                    img{
                        width: 80px;
                        height: auto;
                        position: absolute;
                        left: 0;
                    }
                    &:hover{
                        &:before{
                            content:'上传图标';
                            color: #fff;
                            width: 80px;
                            height: 80px;
                            background: rgba(0,0,0,.3);
                            display: inline-block;
                            text-align: center;
                            border-radius: 4px;
                            position: absolute;
                            z-index: 1;
                        }
                    } 
                }
            }
        }
    }
</style>