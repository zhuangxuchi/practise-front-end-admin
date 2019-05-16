<template>
  <div class="main">
    <div class="shurukuang">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <br>
    <div class="wenbenyu">
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    </div>
    <br>
    <div class="shurukuang">
    <el-input v-model="num1" type="number" placeholder="请输入数字"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      textarea:'',
      num1:''
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
.shurukuang{
  width: 200px;
}
.wenbenyu{
  width: 420px;
}
</style>