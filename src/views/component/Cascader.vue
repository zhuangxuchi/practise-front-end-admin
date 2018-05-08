<template>
  <div class="main">
    选择啤酒: 
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainType: [{
        id: 'IPA',
        name: 'IPA'
      }, {
        id: 'stout',
        name: '世涛'
      }, {
        id: 'tappist',
        name: '修道院系列'
      }],
      subType: [{
        id: 'punk',
        parentId: 'IPA',
        name: '朋克IPA'
      }, {
        id: 'tiao',
        parentId:  'IPA',
        name: '跳东湖IPA'
      }, {
        id: '',
        parentId: 'IPA',
        name: '90分钟干投'
      }, {
        id: 'caff',
        parentId: 'stout',
        name: '左手咖啡石涛'
      }, {
        id: 'lsf8',
        parentId:  'tappist',
        name: '罗斯福8号'
      }, {
        id: 'lsf10',
        parentId:  'tappist',
        name: '罗斯福10号'
      }]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped></style>