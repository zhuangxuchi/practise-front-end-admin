# 列表页
路由 `/music/singer/list`  
源码地址 `@/src/views/music/singer/List.vue`

要求：
1. 进入页面获取列表数据。数据地址是：`/api/singer/list?where={name:值}&pagerAt=第几页&pageLimit=一页几条` ，其中
  * `where`是搜索条件，name 的值是用户在页面中输入的值。
  * `pagerAt` 和 `pageLimit` 是分页参数。
1. 列表要显示
  * 名称。对应接口中的字段 `name`。
  * 状态，对应接口中的字段 `status`。 `status` 的值是 1，显示启用，否则显示禁用。
1. 点 新增 按钮，进入新增页面。路由是 `/music/singer/update/-1`
1. 点 编辑 按钮，进入编辑页。 路由是 `/music/singer/update/:id`
1. 点 删除 按钮，弹出 `是否确认删除` 的确定框，若点击确认，则删除该记录。接口地址是 `/api/singer/del/:id`，请求方式是 `POST`。
