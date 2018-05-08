# 后台管理系统练手项目
Fork 本项目。完成下面的任务。

## 运行
1. 安装依赖 `yarn install`
1. 运行 `npm run dev`

## 任务
* [ ] 熟悉版本为 1.4.13 的 [Element UI](http://element-cn.eleme.io/1.4/#/zh-CN/)
  * [ ] 表格组件 [任务描述](task/component/table.md)
  * [ ] 分页组件 [任务描述](task/component/pagination.md)
  * [ ] 弹出框(Dialog 对话框) [任务描述](task/component/dialog.md)
  * [ ] 信息提示 [任务描述](task/component/message.md)
  * [ ] MessageBox 弹框 [任务描述](task/component/message-box.md)
  * [ ] 按钮 [任务描述](task/component/button.md)
  * [ ] 表单类组件
    * [ ] 输入框，文本域名，数字输入框(InputNumber)。 [任务描述](task/component/input.md)
    * [ ] 日期，时间选择器。 [任务描述](task/component/date-time-picker.md)
    * [ ] 单选，多选框。 [任务描述](task/component/radio-checkbox.md)
    * [ ] 开关。 [任务描述](task/component/switch.md)
    * [ ] 下拉框(Select 选择器)。 [任务描述](task/component/select.md)
    * [ ] 级联下拉。 [任务描述](task/component/cascader.md)
    * [ ] 图片上传。 [任务描述](task/component/upload.md)
  * [ ] 表单验证 [任务描述](task/component/form-validation.md)
* [ ] 新建路由和菜单 [任务描述](task/page/add-menu-router.md)
* [ ] 列表页
  * [ ] 获取列表数据。请求中，包含：
    * [ ] 搜索查询参数。
    * [ ] 分页参数。
    * [ ] 排序参数。
  * [ ] 列表数据的格式化。
    * [ ] 时间格式化。
    * [ ] 布尔值或0,1 转化成 文字。如
      * [ ] 状态: 0: 禁用,1: 启用。
    * [ ] 价格格式化。 数据存的单位是分,显示的单位是元。
  * [ ] 列表操作
    * [ ] 新增
    * [ ] 编辑
    * [ ] 删除
    * [ ] 启用/禁用；上架/下架
* [ ] 详情/新增/编辑页
  * [ ] 知道当前页面是详情，还是新增，还是编辑
  * [ ] 详情/编辑页时
    * [ ] 获取数据
    * [ ] 格式化数据
  * [ ] 提交数据
    * [ ] 提交前的表单验证
      * [ ] 非空验证
      * [ ] 数字
      * [ ] 手机号
      * [ ] 邮箱
      * [ ] 自定义验证
    * [ ] 格式化数据
