<template>
  <div>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open">信息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message({
          message:'这是一条消息提示',
          showClose: true,
          center: true
          });
      },
      open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          center: true
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning',
          center: true
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message:'错了哦，这是一条错误消息',
          type:'error',
          center: true
          });
      }
    }
  }
</script>