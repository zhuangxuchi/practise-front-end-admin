<template>
  <div class="main">
    <el-button type="danger" @click="open2">删除</el-button>
    <br>
    姓名: {{name}}
    <el-button @click="open3">录入姓名</el-button>
  </div>
</template>

<script>
alert('本网站基于 Vue 开发')
export default {
  data() {
    return {
      name: '未设置'
    }  
  },
  methods: {
    open2() {
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    open3() {
        this.$prompt('请输入名字', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.name=value,
          this.$message({
            type: 'success',
            message: '你的名字是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  }
}
</script>

<style scoped></style>