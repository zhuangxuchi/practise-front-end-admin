<template>
  <div class="main">
      <el-switch
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="关"
        inactive-text="开"
        active-value=1
        inactive-value=0>
      </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value4: true
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>