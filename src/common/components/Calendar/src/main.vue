
<template>
    <div class="calendar">
        <div class="calendar-operation">
            <span class="calendar-title">{{title}}</span>
            <div class="calendar-YearMonth">
               <Icon type="ios-arrow-back" style="margin-right:30px;" @click="prev" />
               <div class="calendar-YearMonth-content">{{YearMonth}}</div>
               <Icon type="ios-arrow-forward" style="margin-left:30px;color:" @click="next" />
            </div>
        </div>
        <div class="calendar-head">
            <div class="calendar-head-item">星期日</div>
            <div class="calendar-head-item">星期一</div>
            <div class="calendar-head-item">星期二</div>
            <div class="calendar-head-item">星期三</div>
            <div class="calendar-head-item">星期四</div>
            <div class="calendar-head-item">星期五</div>
            <div class="calendar-head-item">星期六</div>
        </div>
        <div class="calendar-content">
            <div v-for="(item,index) in dateArray" :key="index" class="calendar-row">
                <div v-for="(val,key) in item" :key="key" :class="{'calendar-cols':true,'calendar-enable':!val.enable}">
                    <span class="calendar-cols-content">{{val.value}}</span>
                    <div class="calendar-cols-opera" >
                        <div style="height:100%;">
                            <slot :oper = 'val.oper'></slot>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { getDateArray , combination } from './main.js'
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let _year = year
let _month = month
function getYearMonth(year,month) {
    if(month.toString().length == 1){
        month = '0' + month
    }
    return year + '-' + month
}
export default {
    props: {
        title: {
            type:String,
            default:'滴滴大厅'
        },
        operData: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            currentDate:""
        }
    },
    computed:{
        //日期时间
        dateArray () {
            return combination(getDateArray(this.currentDate),this.operData)
        },
        YearMonth () {
            return this.currentDate.split('-')[0] + '年' + this.currentDate.split('-')[1] + '月'
        }
    },
    created () {
         this.change(year,month)
    },
    methods: {
       //上一个月
       prev () {
          _month--
          if (_month < 1){
              _year --
              _month = 12
          }
          this.change(_year,_month)
       },
       //下一个月
       next () {
          _month++
          if (_month >12 ){
              _year ++
              _month = 1
          }
          this.change(_year,_month)
       },
       //事件改变事件
       change (_year,_month) {
           this.currentDate=getYearMonth(_year,_month)
           this.$emit('change',this.currentDate)
       }
    }
}
</script>
<style scoped lang="less">
  .calendar{
      width:100%;
      border:1px solid #e8eaec;
      border-left: 0;
      border-radius: 8px;
      background: #fff;
      .calendar-operation {
          height: 60px;
          border-bottom: 1px solid #e8eaec;
          border-left:1px solid #e8eaec;
          .calendar-title{
              display:block;
              font-size:12px;
              color:#fb9153;
              float: left;
              height: 100%;
              line-height:60px;
              padding-left: 40px;
          }
         .calendar-YearMonth{
             display: flex;
             height: 100%;
             justify-content: center;
             align-items: center;
             font-size:17px;
             color: #fb9153;
         }
      }
      .calendar-head {
          display: flex;
          height:40px;
          border-bottom: 1px solid #e8eaec;
          border-left:1px solid #e8eaec;
          .calendar-head-item {
              flex: 1;
              height:100%;
              line-height:40px;
              font-size: 12px;
              text-align: center;
              border-left: 1px solid #e8eaec;
          }
      }
      .calendar-content {
          width: 100%;
          .calendar-row{
              width:100%;
              display: flex;
              .calendar-cols {
                  position: relative;
                  flex: 1;
                  height: 0;
                  padding-bottom: 14%;
                  border-bottom: 1px solid #e8eaec;
                  border-left: 1px solid #e8eaec;
                  .calendar-cols-content{
                      display:block;
                      text-align: right;
                      height:0;
                      padding-bottom: 15%;
                      box-sizing: border-box;
                      padding: 0 10px;
                      margin-bottom: 15%;
                  }
                  .calendar-cols-opera{
                      width:100%;
                      height: 0;
                      padding-bottom: 84%;
                      box-sizing: border-box;
                      overflow-y: auto;
                  }
              }  
          }
          .calendar-enable{
              color: #e8eaec;
          }
      }
  }
</style>
