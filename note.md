### webpack 项目初始化

```
npm init -y

npm install --save-dev webpack webpack-cli lodash
```

> 注意： 我们将 lodash 安装为 devDependencies 而不是 dependencies，因为我们不需要将其打包到我们的库中，否则我们的库体积很容易变大。

> 是否使用 --save-dev 取决于你的应用场景。假设你仅使用 webpack 进行构建操作，那么建议你在安装时使用 --save-dev 选项，因为可能你不需要在生产环境上使用 webpack。如果需要应用于生产环境，请忽略 --save-dev 选项

> 不建议使用 --global 全局安装，会将你项目中的 webpack 锁定到指定版本

### 依赖管理

- `require()` 支持动态导入

   > 注意：动态导入时，可能会导致所有可能用到的模块都包含在 bundle 中

- `require.context()` 常用三个参数：目录、是否扫描子目录、正则表达式

    > 注意：传递给 `require.context` 的参数必须是字面量(literal)！

    > ##### 名词解释：字面量 
    > 在计算机科学中，字面量（literal）是用于表达源代码中一个固定值的表示法（notation）。几乎所有计算机编程语言都具有对基本值的字面量表示，诸如：整数、浮点数以及字符串；而有很多也对布尔类型和字符类型的值也支持字面量表示；还有一些甚至对枚举类型的元素以及像数组、记录和对象等复合类型的值也支持字面量表示法。--百度百科                                             
    > 作者：贺贺v5  
    链接：https://www.jianshu.com/p/0f2816805da6    
    来源：简书   
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。








