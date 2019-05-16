<template>
<div>
  <div class="main">
    <el-radio-group v-model="radio2">
    <el-radio :label="1">A</el-radio>
    <el-radio :label="2">B</el-radio>
    <el-radio :label="3">C</el-radio>
  </el-radio-group>
  </div><br>
  <div class="main">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="A"></el-checkbox>
      <el-checkbox label="B"></el-checkbox>
      <el-checkbox label="C"></el-checkbox>
      <el-checkbox label="D"></el-checkbox>
    </el-checkbox-group>
  </div>  
</div>
</template>

<script>
export default {
  data() {
    return {
      radio2:'0',
      checkList:[]
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>