//==============运行说明===========
1:安装pb
npm install protobufjs@6.8.4 -g
npm install @egret/protobuf -g
2:将代码和项目结构拷贝至项目中
pb-egret add
3:将pro.proto 放到protobuf/protofile 目录下
4：生成pb
pb-egret generate
5：编辑tsconfig.json加入
"include": [
    "src",
    "libs",
    "protobuf/**/*.d.ts"
  ],
  6：修改index.html文件，引入js。
  <script type="text/javascript" src="../protobuf/library/protobuf-library.js"></script>
<script type="text/javascript" src="../protobuf/bundles/protobuf-bundles.js"></script>
7：运行项目