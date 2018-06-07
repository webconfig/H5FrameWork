//=============开发说明=============
1：pb 使用方法
1.1：安装protobufjs
npm install protobufjs
//==============运行说明===========
1:创建目录
创建bin和node_modules目录
2:安装node需要的模块
npm install
3：生成pb
终端下执行下面命令
pbjs -t static-module -w commonjs -o joengProto.js joengProto.proto
pbts -o joengProto.d.ts joengProto.js
第一行导出js文件，第二行把导出的js生成对应的.d.ts文件
把ts文件拷贝到src下，吧js文件拷贝到bin目录下
4：生成js文件
Ctrl+Shift+B
3:点击调试运行或者在终端下执行
node bin/main.js