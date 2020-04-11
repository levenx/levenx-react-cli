# React： 如果有什么需要明天做的事，最好现在就开始。

[CSDN教程](https://blog.csdn.net/m0_37890289/article/details/105421173)

---
 
 项目启动：
  ```
    yarn start
    或者
    npm run start
  ```
 项目打包：
 ```
    yarn build
    或者
    npm run build
 ```
---
> 在master分支的基础上，扩展typescript功能。

1. 添加依赖
```
    yarn add typescript ts-loader @types/react @types/react-dom -D

```
2. 创建ts配置文件 tsconfig.json
```
{
  "compilerOptions": {
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "esModuleInterop": true
  }
}
```

3. webpack配置
```
module:{
    rules:{
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
    }
},
resolve:{
     // 添加需要解析的文件格式
        extensions: ['.ts', '.tsx', '.js', '.json']
}
```

4. 开始你的代码之旅

    
**src/components/Button.tsx** 写了一个简单的按钮组件demo(Function 组件)
    **src/index.tsx** App组件（class 组件）
