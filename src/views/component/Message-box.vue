<template>
  <div class="main">
    <el-button type="danger">删除</el-button>
    <br>
    姓名: {{name}}
    <el-button :plain="true">录入姓名</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '未设置'
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>