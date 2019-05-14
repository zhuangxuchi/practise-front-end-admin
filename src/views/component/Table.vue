<template>
  <div class="main">
    <el-table :data='list' border align='center' stripe>
      <el-table-column type='index' label='序列' align='center' width='80'></el-table-column>
      <el-table-column prop='name' label='姓名'></el-table-column>
      <el-table-column prop='gender' label='性别'>
        <template scope="scope">
          <span v-if="scope.row.gender===1" style="color:red">男</span>
          <span v-else-if="scope.row.gender===2" style="color:green">女</span>
          <span v-else>未知</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[{
        name:'Joel',
        gender:1
      },{
        name:'Mary',
        gender:2
      },{
        name:'Jimmy',
        gender:3
      }]
    }
  },
  methods:{

  }
}
</script>

<style scoped></style>
