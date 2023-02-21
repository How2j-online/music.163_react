文件夹、文件名称小写 用 - 分割
变量小驼峰， 组件大驼峰， 常量大写
全局采用普通CSS， 局部使用styled-components
组件使用函数式组件， 使用memo优化
组件内部的状态，使用useState，useReducer, 业务数据全部放在redux中
函数组件内部顺序： 组件内部state管理 -> redux的hooks -> 其他组件hooks -> 其他逻辑代码 -> 返回JSX代码

redux代码规范
每个模块有自己独立的reduce，通过combineReducers合并
异步请求放在redux-thunk中，并且写在actionCreator中
redux直接采用redux hooks，不再使用connect
