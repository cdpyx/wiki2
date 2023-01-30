<template>
    <div id="particles" class="particles"></div>
</template>
<script>
    import particles from 'particles.js';
    export default {
        data(){
            return {

            }
        },
        mounted() {
            particlesJS.load('particles', '/static/json/particlesjs-config.json', function() {
                console.log('callback - particles-js config loaded');
            });
        }
    }
</script>
<style lang="scss" scoped>
    .particles{
        width: 100%;
        height: 100%;
        background: #108ee9;
    }
</style>