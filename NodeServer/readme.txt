//=============开发说明=============
//==pb 使用方法
1：安装protobufjs
npm install protobufjs
2：生成ts和js文件
终端下执行下面命令
pbjs -t static-module -w commonjs -o joengProto.js joengProto.proto
pbts -o joengProto.d.ts joengProto.js
第一行导出js文件，第二行把导出的js生成对应的.d.ts文件
把ts文件拷贝到src下，吧js文件拷贝到bin目录下

//==============运行说明===========
1:安装node需要的模块
npm install
2：生成ts和js文件
Ctrl+Shift+B
3:点击调试运行或者在终端下执行
node bin/main.js