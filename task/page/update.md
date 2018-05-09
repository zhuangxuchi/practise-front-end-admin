# 新增路由和菜单
新增页路由 `/music/singer/update/-1`    
编辑页路由 `/music/singer/update/:id`    
详情页路由 `/music/singer/view/:id`    
源码地址 `@/src/views/music/singer/Update.vue`

要求：  
1 详情/新增/编辑页是一个页面。详情页只是显示数据，不能编辑数据。

2 显示的字段包括： 歌手姓名，是否启用。名称对应的字段是name，是否启用对应的是enable, 1 表示 `是`，0 表示 `否`。显示详情的时候

3 获取歌手详情数据后，将数据中的`enable` 的 1 改成 true; 0 改成 false。

4 歌手姓名必填。

5 提交歌手数据时，将数据中的`enable` 的 true 改成 1; false 改成 0。

接口地址：  
* 歌手详情: `/singer/detail/:id`
* 新增歌手: `/singer/add` 。`POST` 的数据格式 `{name: 'xxx', enable: 0|1}`
* 歌手编辑: `/singer/edit/:id` 。`POST` 的数据格式和新增一致。