<template>
    <div id="api">  
        <div class="left-wrap">
            <div class="left">           
                <article v-html="tocHtmls"></article>          
            </div>
        </div>
        <div class="content-wrap">          
            <div class="my-content">
                <article v-html="result"></article>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../assets/style/article.min.css';
    import '../../assets/style/default.min.css';
    import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"

    export default {
        data() {
            return {
                md:null,
                result:null,              
                mkdata:null,
                tocHtmls:'请严格按照mk格式书写'
            }
        },
        created() {
            this.axios({
                method: 'get',
                url: '/static/developmentDocument/test.md',
            }).then( (response) => {
                this.mkdata = response.data;
                this.changemk()
            })              
        },
        methods: {
            changemk(index){   
             var hljs = require('highlight.js');

              this.md = require('markdown-it')({
                html: true,
                xhtmlOut: true,
                linkify: true,
                typographer: true,
                breaks: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                      try {
                        return hljs.highlight(lang, str).value;
                      } catch (__) {}
                    }

                    return ''; 

                }
              })
              .use(markdownItTocAndAnchor)
                   
              this.result = this.md.render(this.mkdata,{
                   tocCallback: (tocMarkdown, tocArray, tocHtml) => {
                       this.tocHtmls = tocHtml
                   }
              }) 

          }  
        }
    }
</script>
<style lang="scss" scoped>  
    #api{
        background-color: #ffffff;
    }
    .left-wrap{
        width: 280px;
        height: 800px;
        overflow: hidden;
        position: fixed;
        margin-top: 0px;

    }
    .left{      
        width: 300px;
        height: 100%;
        margin-top: -8px;
        margin-left: 0px;
        padding-left: 8px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .content-wrap{ 
    min-height: 100%; 
    position: fixed;
    overflow: hidden;
    height: 800px;
    width: 100%;
    margin-left: 303px;
    padding-left: 61px;
    background-color: #ffffff;
    border-left: 10px solid #f2f5f8;
    overflow-x: hidden;
    overflow-y: auto;
        .my-content{
            margin:10px 10px 0;
     
            max-width: 910px;
           
        }
    }

</style>