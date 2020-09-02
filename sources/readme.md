在 VSCode 中，类型检查并非默认开启，这意味着即使你有详尽的 JSDoc 注释或 ts 类型声明文件，依然可能在数据类型上栽跟头。开启方式为在项目根目录下添加 jsconfig.json 文件，并设置 "checkJs": true，示例如下：
```
{
 "compilerOptions": {
  "checkJs": true
 },
  
 // 位于此目录下的文件不进行静态检查和智能提示
 "exclude": [
  "node_modules",
  "**/node_modules/*"
 ]
}
```
