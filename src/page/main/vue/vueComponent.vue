<template>
    <div class="vue">
        <div class="vue-left">
            <vue-nav></vue-nav>
        </div>
        <div class="vue-right">
            <vue-content></vue-content>
        </div>
    </div>
</template>

<script>
import vueNav from './nav.vue';
import vueContent from './vueContent'
export default {
    data(){
        return {

        }
    },
    components:{
        vueNav,
        vueContent
    }
}
</script>

<style>
.vue{
    width:100%;
    height:100%;
    position: relative;
}
.vue-left{
    position:absolute;
    width:100px;
    overflow-y: auto;
    border-right:1px solid #f2f2f2;
    left:0;
    bottom: 0;
    top:0;
}
.vue-right{
    position: absolute;
    left:110px;
    right: 0;
    bottom: 0;
    top:0;
}
</style>
