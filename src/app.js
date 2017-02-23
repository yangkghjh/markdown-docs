/*
1.读取 config.json
2.遍历文档目录，读取文档，加入头尾另存

- render 渲染器
- loader 加载器
 */

import {DocRender} from './render/doc_render.js';

let doc = new DocRender("test");
doc.sayName();