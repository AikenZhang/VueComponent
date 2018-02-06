<template>
  <div class="vueContent">
    <div class="vueContent-title">
        <h2>dropLoad(下拉加载)</h2>
    </div>
    <div class="vueContent-info">
        当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上）
    </div>
    <div class="vueContent-demo-list">
        <div class="vueContent-demo-title">
            <h4>基础用法</h4>
        </div>
        <div class="vueContent-demo-info">
            单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍
        </div>
        <div class="vueContent-demo-content">
            <span>sdasd</span>
        </div>
        <div class="vueContent-code">
            <span>sdasd</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.vueContent-title{
    height:60px;
    line-height: 60px;
    font-size:16px;
}
.vueContent-demo-title{
     height:40px;
    line-height: 40px;
    font-size:15px;
}
.vueContent-info,.vueContent-demo-info{
    color: #666;
    font-size:14px;
    height:40px;
    line-height: 40px;
}
.vueContent-demo-content{
    display: flex;
    width:100%;
    min-height:100px;
    align-items: center;
    border:1px solid #dedede;
    border-radius: 5px;
    padding-left:10px;
    border-bottom:0;
}
.vueContent-code{
    width:100%;
    min-height:150px;
    margin-top:-2px;
    padding-left:10px;
    border:1px solid #dedede;
}
.vueContent-demo-list{
    width:90%;
}
</style>
