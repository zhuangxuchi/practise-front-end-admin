<template>
<div>
   <div class="block">
     <p class="demonstration">时间选择器 </p>
     <el-time-picker
        v-model="value0"
        placeholder="任意时间点">
      </el-time-picker>
   </div>
   <br>
   <div class="block">
    <p class="demonstration">带快捷选项的日期选择器</p>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</div>
</template>

<script>
   export default {
    data() {
      return {
        value0: new Date(2019, 5, 16, 18, 40),
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
           onClick(picker) {
              picker.$emit('pick', new Date());
             }
           }, {
             text: '昨天',
             onClick(picker) {
               const date = new Date();
               date.setTime(date.getTime() - 3600 * 1000 * 24);
               picker.$emit('pick', date);
             }
           }, {
             text: '一周前',
             onClick(picker) {
               const date = new Date();
               date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
               picker.$emit('pick', date);
             }
           },{
             text: '一月前',
             onClick(picker) {
               const date = new Date();
               date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
               picker.$emit('pick', date);
             }
           }]
         },
         value1: '',
         value2: ''
       };
     }
   };
 </script>