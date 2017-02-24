/*
1.读取 config.json
2.遍历文档目录，读取文档，加入头尾另存

- render 渲染器
- loader 加载器
 */
import fs from 'fs';
import {DocRender} from './render/doc_render.js';
import yargs from 'yargs';

var argv = yargs.argv;

try
{
    var config = JSON.parse(fs.readFileSync(argv.config));
}
catch(e)
{
    console.log('Read configure file error.');
}

console.log(config);