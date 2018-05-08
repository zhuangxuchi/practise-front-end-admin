<template>
  <div class="main">
    选择水果(单选):

    选择水果(多选):
    
    用户数据(远程数据):
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        label: '苹果',
        value: 1,
      },{
        label: '梨',
        value: 2,
      },{
        label: '香蕉',
        value: 3,
      },{
        label: '荔枝',
        value: 4,
      }],
      remoteList: []
    }  
  },
  methods: {
    fetchRemoteList() {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(data => {
        // 你的代码在这里
      })
    }
  },
  mounted() {
    this.fetchRemoteList()
  }
}
</script>

<style scoped></style>