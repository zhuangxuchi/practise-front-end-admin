<template>
  <div class="main">
    <el-row>
      <el-button type="success">成功按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <br><br>
      <el-button round>大</el-button>
      <el-button size="medium" round>中</el-button>
      <el-button size="small" round>小</el-button>
      <el-button size="mini" round>超小</el-button>
      <br><br>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>禁用按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>