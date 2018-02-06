<template>
    <div class="vue-nav">
        <ul>
            <div class="vue-list-name">
                <h4>组件</h4>
            </div>
            <li v-for="item in component">{{item.name}}</li>
            <div class="vue-list-name"><h4>插件</h4></div>
            <li v-for="item in plugin">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
      return {
          component:[
              {
                  name:'下拉加载'
              }
          ],
          plugin:[
              {
                  name:'通知'
              },{
                  name:'弹框'
              }
          ]
      }
  }
}
</script>
<style>
.vue-nav{
    width:100%;
    height:auto;
}
.vue-nav ul li{
    text-align: center;
    font-size:14px;
    height:30px;
    line-height:30px;
    cursor: pointer;
    color:#666;
    border-bottom: 1px solid #f4f4f4;
}
.vue-nav ul li:hover{
    color: #2aa88f;
}
.vue-list-name{
    font-size:16px;
    height:35px;
    line-height: 40px;
    text-align: left;
}
</style>

