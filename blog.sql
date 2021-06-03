/*
 Navicat Premium Data Transfer

 Source Server         : localMongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40404
 Source Host           : localhost:27017
 Source Schema         : blog

 Target Server Type    : MongoDB
 Target Server Version : 40404
 File Encoding         : 65001

 Date: 03/06/2021 21:27:19
*/


// ----------------------------
// Collection structure for classifications
// ----------------------------
db.getCollection("classifications").drop();
db.createCollection("classifications");

// ----------------------------
// Documents of classifications
// ----------------------------
db.getCollection("classifications").insert([ {
    _id: ObjectId("6039284a2684e22ec8291c64"),
    name: "学习笔记",
    description: "学习笔记",
    contentsNum: NumberInt("123"),
    createdAt: ISODate("2021-02-26T16:56:42.832Z"),
    updatedAt: ISODate("2021-06-01T15:01:41.747Z"),
    __v: NumberInt("0"),
    icon: "mdi-note-multiple",
    rank: NumberInt("1")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928522684e22ec8291c65"),
    name: "test后台测试",
    description: "test",
    contentsNum: NumberInt("1"),
    createdAt: ISODate("2021-02-26T16:56:50.485Z"),
    updatedAt: ISODate("2021-03-08T17:57:54.716Z"),
    __v: NumberInt("0"),
    icon: "mdi-test-tube",
    rank: NumberInt("4")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928552684e22ec8291c66"),
    name: "吐槽",
    description: "吐槽",
    contentsNum: NumberInt("14"),
    createdAt: ISODate("2021-02-26T16:56:53.057Z"),
    updatedAt: ISODate("2021-06-01T15:01:06.448Z"),
    __v: NumberInt("0"),
    icon: "mdi-home-edit",
    rank: NumberInt("2")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928572684e22ec8291c67"),
    name: "加密分类",
    description: "加密分类",
    contentsNum: NumberInt("9"),
    createdAt: ISODate("2021-02-26T16:56:55.626Z"),
    updatedAt: ISODate("2021-06-01T15:01:22.846Z"),
    __v: NumberInt("0"),
    icon: "mdi-book-lock",
    rank: 3
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("6047bf1d87fb8270c421decf"),
    name: "学习笔记",
    description: "nest.js学习笔记",
    contentsNum: NumberInt("1"),
    icon: "https://material.iconhelper.cn/",
    rank: null,
    createdAt: ISODate("2021-03-09T18:31:57.431Z"),
    updatedAt: ISODate("2021-03-18T18:00:49.848Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
db.getCollection("comments").insert([ {
    _id: ObjectId("60532dc33f4f2e30c0a87b0f"),
    childId: [
        ObjectId("60532e5c3f4f2e30c0a87b11"),
        ObjectId("60537eb8e4557a64389a4f71"),
        ObjectId("6053817d6928ba641817a2af"),
        ObjectId("605381fe6928ba641817a2b1")
    ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "",
    authorName: "Dwsy",
    ip: "::1",
    url: "test",
    text: "# 一级标题123123\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n我展示的是一级标题\n==================\n\n我展示的是二级标题\n------------------\n\n*斜体文本*\n_斜体文本_\n**粗体文本**\n__粗体文本__\n***粗斜体文本***\n___粗斜体文本___\n\n---\n\n---\n\n---\n",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1521986032@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: false,
    createdAt: ISODate("2021-03-18T10:38:59.6Z"),
    updatedAt: ISODate("2021-03-18T16:38:22.209Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60532e0d3f4f2e30c0a87b10"),
    childId: [ ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "",
    authorName: "test",
    ip: "::1",
    url: "test",
    text: "test\n# 123",
    MD5email: "098f6bcd4621d373cade4e832627b4f6",
    email: "test",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: false,
    createdAt: ISODate("2021-03-18T10:40:13.117Z"),
    updatedAt: ISODate("2021-03-18T10:40:13.117Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60532e5c3f4f2e30c0a87b11"),
    childId: [ ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "777",
    authorName: "评论测试",
    ip: "::ffff:127.0.0.1",
    url: "评论测试",
    text: "回复@Dwsy:```shell\n#!/bin/bash\nfunWithReturn(){\n    echo \"输入第一个数字: \"\n    read aNum\n    echo \"输入第二个数字: \"\n    read anotherNum\n    echo \"两个数字分别为 $aNum 和 $anotherNum !\"\n    return $(($aNum+$anotherNum))\n}\nfunWithReturn\necho \"输入的两个数字之和为 $?\"\n```",
    MD5email: "d83f67c56c7699c3178ba10a8daa767b",
    email: "1@1",
    fatherId: "60532dc33f4f2e30c0a87b0f",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: true,
    createdAt: ISODate("2021-03-18T10:41:32.821Z"),
    updatedAt: ISODate("2021-03-18T10:41:32.821Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("605331823f4f2e30c0a87b12"),
    childId: [
        ObjectId("605331c43f4f2e30c0a87b13")
    ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "",
    authorName: "ttt",
    ip: "::ffff:127.0.0.1",
    url: "ttt",
    text: "test",
    MD5email: "9990775155c3518a0d7917f7780b24aa",
    email: "ttt",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: false,
    createdAt: ISODate("2021-03-18T10:54:58.866Z"),
    updatedAt: ISODate("2021-03-18T10:56:04.708Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("605331c43f4f2e30c0a87b13"),
    childId: [ ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "777",
    authorName: "评论测试",
    ip: "::ffff:127.0.0.1",
    url: "评论测试",
    text: "回复@ttt:test",
    MD5email: "d83f67c56c7699c3178ba10a8daa767b",
    email: "1@1",
    fatherId: "605331823f4f2e30c0a87b12",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: true,
    createdAt: ISODate("2021-03-18T10:56:04.707Z"),
    updatedAt: ISODate("2021-03-18T10:56:04.707Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("605333673f4f2e30c0a87b14"),
    childId: [ ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "",
    authorName: "test",
    ip: "::ffff:127.0.0.1",
    url: "",
    text: "正常文本测试",
    MD5email: "d41d8cd98f00b204e9800998ecf8427e",
    email: "",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: false,
    createdAt: ISODate("2021-03-18T11:03:03.732Z"),
    updatedAt: ISODate("2021-03-18T11:03:03.732Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60537f4a2bd7c46cacad8249"),
    childId: [ ],
    contentsId: "60519b8eab170f1d4875e77a",
    authorId: "",
    authorName: "测试",
    ip: "::1",
    url: "测试测试",
    text: "测试测试测试",
    MD5email: "db06c78d1e24cf708a14ce81c9b617ec",
    email: "测试",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54",
    isChild: false,
    createdAt: ISODate("2021-03-18T16:26:50.435Z"),
    updatedAt: ISODate("2021-03-18T16:26:50.435Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("609e6a5547fa890c80ce45e6"),
    childId: [ ],
    contentsId: "603e751045d89d46e830734a",
    authorId: "",
    authorName: "123",
    ip: "::1",
    url: "123",
    text: "123",
    MD5email: "202cb962ac59075b964b07152d234b70",
    email: "123",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.56",
    isChild: false,
    createdAt: ISODate("2021-05-14T12:17:25.869Z"),
    updatedAt: ISODate("2021-05-14T12:17:25.869Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60b652d8a0137a1b988d468f"),
    childId: [ ],
    contentsId: "60a8e3ab77535e3424b9591c",
    authorId: "",
    authorName: "Dwsy",
    ip: "::ffff:127.0.0.1",
    url: "dwsy",
    text: "滴滴答答",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1521986032@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.37",
    isChild: false,
    createdAt: ISODate("2021-06-01T15:31:36.538Z"),
    updatedAt: ISODate("2021-06-01T15:31:36.538Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for contents
// ----------------------------
db.getCollection("contents").drop();
db.createCollection("contents");
db.getCollection("contents").createIndex({
    "$**": "text"
}, {
    name: "内容",
    weights: {
        text: NumberInt("1")
    },
    "default_language": "english",
    "language_override": "language",
    textIndexVersion: NumberInt("3")
});

// ----------------------------
// Documents of contents
// ----------------------------
db.getCollection("contents").insert([ {
    _id: ObjectId("603e751045d89d46e830734a"),
    fieldsId: "603e645cdc5d115e3c5071a3",
    text: "<html><head></head><body><p><strong>cat.model.ts</strong></p>\n<pre><code class=\"language-javascript\">import { prop } from \"@typegoose/typegoose\";\nimport { IsString } from \"class-validator\";\n\nexport class Cat {\n  @IsString()\n  @prop({ required: true })\n  name: string;\n}\n</code></pre>\n<p><strong>qweqwe</strong></p>\n<p><em>qweqw</em></p>\n<p><code>啊实打实的</code></p>\n<p><a href=\"\">asdasd</a></p>\n<blockquote>\n<p>123</p>\n</blockquote>\n<ol>\n<li>1</li>\n<li>2</li>\n<li>3</li>\n<li>4</li>\n<li>5</li>\n</ol>\n<ul>\n<li class=\"vditor-task\"><input checked=\"\" disabled=\"\" type=\"checkbox\"> 1</li>\n<li class=\"vditor-task\"><input checked=\"\" disabled=\"\" type=\"checkbox\"> 2</li>\n</ul>\n<h2 id=\"t0\">1</h2>\n<h1 id=\"t1\">1</h1>\n<p>[11]:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>cat.model.ts</strong></p>\n<pre><code class=\"language-javascript\">import { prop } from \"@typegoose/typegoose\";\nimport { IsString } from \"class-validator\";\n\nexport class Cat {\n  @IsString()\n  @prop({ required: true })\n  name: string;\n}\n</code></pre>\n<p><strong>qweqwe</strong></p>\n<p><em>qweqw</em></p>\n<p><code>啊实打实的</code></p>\n<p><a href=\"\">asdasd</a></p>\n<blockquote>\n<p>123</p>\n</blockquote>\n<ol>\n<li>1</li>\n<li>2</li>\n<li>3</li>\n<li>4</li>\n<li>5</li>\n</ol>\n<ul>\n<li class=\"vditor-task\"><input checked=\"\" disabled=\"\" type=\"checkbox\"> 1</li>\n<li class=\"vditor-task\"><input checked=\"\" disabled=\"\" type=\"checkbox\"> 2</li>\n</ul>\n<h2 id=\"t2\">1</h2>\n<h1 id=\"t3\">1</h1>\n<p>[11]:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<div class=\"footnotes-defs-div\"><hr class=\"footnotes-defs-hr\">\n<ol class=\"footnotes-defs-ol\"><li id=\"footnotes-def-1\"></li>\n</ol></div></body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:25:36.44Z"),
    updatedAt: ISODate("2021-06-01T14:52:03.014Z"),
    __v: NumberInt("0"),
    mdText: "**cat.model.ts**\n\n```javascript\nimport { prop } from \"@typegoose/typegoose\";\nimport { IsString } from \"class-validator\";\n\nexport class Cat {\n  @IsString()\n  @prop({ required: true })\n  name: string;\n}\n```\n\n**qweqwe**\n\n*qweqw*\n\n`啊实打实的`\n\n[asdasd]()\n\n> 123\n\n1. 1\n2. 2\n3. 3\n4. 4\n5. 5\n\n- [X] 1\n- [X] 2\n\n## 1\n\n# 1\n\n[^1]:\n    \n[11]:\n\n\n|   |   |   |\n| --- | --- | --- |\n|   |   |   |\n|   |   |   |\n|   |   |   |\n\n**cat.model.ts**\n\n```javascript\nimport { prop } from \"@typegoose/typegoose\";\nimport { IsString } from \"class-validator\";\n\nexport class Cat {\n  @IsString()\n  @prop({ required: true })\n  name: string;\n}\n```\n\n**qweqwe**\n\n*qweqw*\n\n`啊实打实的`\n\n[asdasd]()\n\n> 123\n\n1. 1\n2. 2\n3. 3\n4. 4\n5. 5\n\n- [X] 1\n- [X] 2\n\n## 1\n\n# 1\n\n[^1]:\n    \n[11]:\n\n\n|   |   |   |\n| --- | --- | --- |\n|   |   |   |\n|   |   |   |\n|   |   |   |\n",
    menus: {
        menus: [
            {
                type: "h2",
                target: "#t0",
                title: "1"
            },
            {
                type: "h1",
                target: "#t1",
                title: "1"
            },
            {
                type: "h2",
                target: "#t2",
                title: "1"
            },
            {
                type: "h1",
                target: "#t3",
                title: "1"
            }
        ],
        summary: "**cat.model.ts**```javascriptimport { prop } from \"@typegoose/typegoose\";import { IsString } from \"class-validator\";export class Cat {  @IsStri"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e756b45d89d46e830734b"),
    fieldsId: "603e645edc5d115e3c5071a4",
    text: "<html><head></head><body><p>test</p>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:27:07.993Z"),
    updatedAt: ISODate("2021-06-01T14:54:38.628Z"),
    __v: NumberInt("0"),
    mdText: "test\n",
    menus: {
        menus: [ ],
        summary: "test"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d0700bde471cfe5f20"),
    fieldsId: "603e645fdc5d115e3c5071a5",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:04.339Z"),
    updatedAt: ISODate("2021-03-02T17:33:04.339Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d0700bde471cfe5f21"),
    fieldsId: "603e645fdc5d115e3c5071a6",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:04.741Z"),
    updatedAt: ISODate("2021-03-02T17:33:04.741Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d1700bde471cfe5f22"),
    fieldsId: "603e6460dc5d115e3c5071a7",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:05.174Z"),
    updatedAt: ISODate("2021-03-07T18:07:46.086Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d1700bde471cfe5f24"),
    fieldsId: "603e6460dc5d115e3c5071a9",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:05.955Z"),
    updatedAt: ISODate("2021-03-02T17:33:05.955Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d2700bde471cfe5f25"),
    fieldsId: "603e6461dc5d115e3c5071aa",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:06.368Z"),
    updatedAt: ISODate("2021-03-02T17:33:06.368Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d2700bde471cfe5f26"),
    fieldsId: "603e6462dc5d115e3c5071ab",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:06.788Z"),
    updatedAt: ISODate("2021-03-02T17:33:06.788Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d3700bde471cfe5f27"),
    fieldsId: "603e6463dc5d115e3c5071ac",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:07.175Z"),
    updatedAt: ISODate("2021-03-02T17:33:07.175Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f28"),
    fieldsId: "603e6464dc5d115e3c5071ad",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08.106Z"),
    updatedAt: ISODate("2021-03-02T17:33:08.106Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f29"),
    fieldsId: "603e6465dc5d115e3c5071ae",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08.426Z"),
    updatedAt: ISODate("2021-03-02T17:33:08.426Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f2a"),
    fieldsId: "603e6465dc5d115e3c5071af",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08.766Z"),
    updatedAt: ISODate("2021-03-02T17:33:08.766Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2b"),
    fieldsId: "603e6466dc5d115e3c5071b0",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09.157Z"),
    updatedAt: ISODate("2021-03-02T17:33:09.157Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2c"),
    fieldsId: "603e6466dc5d115e3c5071b1",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09.56Z"),
    updatedAt: ISODate("2021-03-02T17:33:09.56Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2d"),
    fieldsId: "603e6466dc5d115e3c5071b2",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09.927Z"),
    updatedAt: ISODate("2021-03-02T17:33:09.927Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f2e"),
    fieldsId: "603e6467dc5d115e3c5071b3",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10.3Z"),
    updatedAt: ISODate("2021-03-02T17:33:10.3Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f2f"),
    fieldsId: "603e6467dc5d115e3c5071b4",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10.622Z"),
    updatedAt: ISODate("2021-03-02T17:33:10.622Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f30"),
    fieldsId: "603e6467dc5d115e3c5071b5",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10.958Z"),
    updatedAt: ISODate("2021-03-02T17:33:10.958Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d7700bde471cfe5f31"),
    fieldsId: "603e6467dc5d115e3c5071b6",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:11.29Z"),
    updatedAt: ISODate("2021-03-02T17:33:11.29Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f32"),
    fieldsId: "603e6467dc5d115e3c5071b7",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12.167Z"),
    updatedAt: ISODate("2021-03-02T17:33:12.167Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f33"),
    fieldsId: "603e6467dc5d115e3c5071b8",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12.495Z"),
    updatedAt: ISODate("2021-03-02T17:33:12.495Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f34"),
    fieldsId: "603e6467dc5d115e3c5071b9",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12.885Z"),
    updatedAt: ISODate("2021-03-02T17:33:12.885Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d9700bde471cfe5f35"),
    fieldsId: "603e6467dc5d115e3c5071ba",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:13.299Z"),
    updatedAt: ISODate("2021-03-02T17:33:13.299Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76dd700bde471cfe5f36"),
    fieldsId: "603e6468dc5d115e3c5071bb",
    text: "<html><head></head><body><p>test</p>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:17.915Z"),
    updatedAt: ISODate("2021-03-02T17:33:17.915Z"),
    __v: NumberInt("0"),
    mdText: "test",
    menus: "(Document) 2 Fields"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76de700bde471cfe5f37"),
    fieldsId: "603e6468dc5d115e3c5071bc",
    text: "<html><head></head><body><p><img src=\"http://api.03c3.cn/zb\" alt=\"\"></p>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:18.195Z"),
    updatedAt: ISODate("2021-06-01T15:01:42.683Z"),
    __v: NumberInt("0"),
    mdText: "![](http://api.03c3.cn/zb)\n",
    menus: {
        menus: [ ],
        summary: "![](http://api.03c3.cn/zb)"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76de700bde471cfe5f39"),
    fieldsId: "603e6468dc5d115e3c5071be",
    text: "<html><head></head><body><pre><code class=\"language-c\">//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &amp;old) &lt; 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &amp;= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &amp;= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &amp;old) &lt; 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &amp;buf, 1) &lt; 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &amp;old) &lt; 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j &lt; 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] &amp;&amp; a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i &lt; 2; i++)\n    {\n        if (a[i] - b[i] &gt; 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) &gt; abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] &gt; 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) &lt; fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] &gt; 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) &lt; fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r &lt; 1 || c &lt; 1 || r &gt;= displayPixelSize || c &gt;= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i &lt; 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j &lt; 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j &gt;= 0; j--)\n        {\n            if (dis[j][1] &gt; dis[j + 1][1])\n            {\n                fswap(&amp;dis[j][1], &amp;dis[j + 1][1]);\n                fswap(&amp;dis[j][0], &amp;dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i &lt; 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j &lt; 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 &amp;&amp; displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j &lt; 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) &gt; sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i &lt; 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i &lt; 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i &lt; 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) &lt; 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i &lt; displayPixelSize; i++)\n    {\n        for (int j = 0; j &lt; displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n</code></pre>\n<pre><code class=\"language-python\">import requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&amp;order=click\", \"&amp;order=pubdate\", \"&amp;order=dm\", \"&amp;order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\"&gt;', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n</code></pre>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:18.93Z"),
    updatedAt: ISODate("2021-06-01T15:01:07.681Z"),
    __v: NumberInt("0"),
    mdText: "```c\n//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    menus: {
        menus: [ ],
        summary: "```c//注释测试#include #include #include #ifdef _WIN32#include #include #endif#include struct point{    double x[3];};struct edge{    str"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76df700bde471cfe5f3a"),
    fieldsId: "603e6468dc5d115e3c5071bf",
    text: "<html><head></head><body><iframe id=\"test\" width=\"100%\" height=\"1200\" frameborder=\"0\" src=\"https://m.infinitynewtab.com/?i13EJi\" style=\"margin:0px;\"></iframe>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:19.426Z"),
    updatedAt: ISODate("2021-06-01T15:00:41.552Z"),
    __v: NumberInt("0"),
    mdText: "<iframe id=\"test\" width=\"100%\" height=\"1200\" frameborder=\"0\" src=\"https://m.infinitynewtab.com/?i13EJi\" style=\"margin:0px;\"></iframe>\n",
    menus: {
        menus: [ ],
        summary: "<iframe id=\"test\" width=\"100%\" height=\"1200\" frameborder=\"0\" src=\"https://m.infinitynewtab.com/?i13EJi\" style=\"margin:0px;\"></iframe>"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76df700bde471cfe5f3b"),
    fieldsId: "603e6468dc5d115e3c5071c0",
    text: "<html><head></head><body><h1 id=\"t0\">Docker自用Docker自用Docker自用</h1>\n<pre><code class=\"language-shell\">service docker start || systemctl start docker\t启动docker\nsystemctl enable docker\t将docker设定为开机自启\n退出容器\n\nexit \t\t\t# 直接退出容器并关闭\nCtrl + P + Q\t# 容器不关闭退出\n删除容器\n\ndocker rm -f 容器id\t\t\t\t\t\t# 删除指定容器\ndocker rm -f $(docker ps -aq)\t\t# 删除所有容器\ndocker ps -a -q|xargs docker rm -f\t# 删除所有的容器\n启动和停止容器的操作\n\ndocker start 容器id\t\t\t# 启动容器\ndocker restart 容器id\t\t\t# 重启容器\ndocker stop 容器id\t\t\t# 停止当前正在运行的容器\ndocker kill 容器id\t\t\t# 强制停止当前的容器\n\n进入当前正在运行的容器\n\n# 我们通常容器使用后台方式运行的， 需要进入容器，修改一些配置\n\n# 命令\ndocker exec -it 容器id /bin/bash\n\n# 测试\n[root@iZ2zeg4ytp0whqtmxbsqiiZ /]# docker exec -it df358bc06b17 /bin/bash\n[root@df358bc06b17 /]# ls   \nbin  etc   lib\t  lost+found  mnt  proc  run   srv  tmp  var\ndev  home  lib64  media       opt  root  sbin  sys  usr\n[root@df358bc06b17 /]# ps -ef\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0 Aug11 pts/0    00:00:00 /bin/bash\nroot        29     0  0 01:06 pts/1    00:00:00 /bin/bash\nroot        43    29  0 01:06 pts/1    00:00:00 ps -ef\n\n# 方式二\ndocker attach 容器id\n\n# docker exec\t\t# 进入容器后开启一个新的终端，可以在里面操作\n# docker attach\t\t# 进入容器正在执行的终端，不会启动新的进程\n使用数据卷\n\n直接使用命令来挂载 -v\n\n```shell\ndocker run -it -v 主机目录：容器目录\n\n\nMySQL的数据持久化的问题！\n\n```shell\n# 获取镜像\n[root@iZ2zeg4ytp0whqtmxbsqiiZ home]# docker pull mysql:5.7\n\n# 运行容器， 需要做数据挂载！ # 安装启动mysql，需要配置密码（注意）\n# 官方测试， docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag\n\n# 启动我们的\n-d\t\t# 后台运行\n-p\t\t# 端口隐射\n-v\t\t# 卷挂载\n-e\t\t# 环境配置\n--name\t# 容器的名字\n\n# 匿名挂载\n-v 容器内路径\ndocker run -d -P --name nginx01 -v /etc/nginx nginx\t\t# -P 随机指定端口\n\n\n# 具名挂载\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx\n26da1ec7d4994c76e80134d24d82403a254a4e1d84ec65d5f286000105c3da17\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                   NAMES\n26da1ec7d499        nginx               \"/docker-entrypoint.…\"   3 seconds ago       Up 2 seconds        0.0.0.0:32769-&gt;80/tcp   nginx02\n486de1da03cb        nginx               \"/docker-entrypoint.…\"   3 minutes ago       Up 3 minutes        0.0.0.0:32768-&gt;80/tcp   nginx01\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume ls\nDRIVER              VOLUME NAME\nlocal               561b81a03506f31d45ada3f9fb7bd8d7c9b5e0f826c877221a17e45d4c80e096\nlocal               36083fb6ca083005094cbd49572a0bffeec6daadfbc5ce772909bb00be760882\nlocal               juming-nginx\n\n# 通过-v 卷名：容器内的路径\n# 查看一下这个卷\n# docker volume inspect juming-nginx\n\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume inspect juming-nginx\n[\n  {\n      \"CreatedAt\": \"2020-08-12T18:15:21+08:00\",\n      \"Driver\": \"local\",\n      \"Labels\": null,\n      \"Mountpoint\": \"/var/lib/docker/volumes/juming-nginx/_data\",\n      \"Name\": \"juming-nginx\",\n      \"Options\": null,\n      \"Scope\": \"local\"\n  }\n]\n所有docker容器内的卷，没有指定目录的情况下都是在/var/lib/docker/volumes/xxxxx/_data\n\n我们通过具名挂载可以方便的找到我们的一个卷，大多数情况下使用的是具名挂载\n\n# 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！\n-v\t容器内路径\t\t\t\t\t# 匿名挂载\n-v\t卷名:容器内路径\t\t\t   # 具名挂载\n-v /主机路径:容器内路径\t\t\t  # 指定路径挂载\n拓展\n\n# 通过 -v 容器内容路径 ro rw 改变读写权限\nro\treadonly\t# 只读\nrw\treadwrite\t# 可读可写\n\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx\n\n# ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内容无法操作\n</code></pre>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:19.781Z"),
    updatedAt: ISODate("2021-06-01T15:00:25.436Z"),
    __v: NumberInt("0"),
    mdText: "# Docker自用Docker自用Docker自用\n\n```shell\nservice docker start || systemctl start docker\t启动docker\nsystemctl enable docker\t将docker设定为开机自启\n退出容器\n\nexit \t\t\t# 直接退出容器并关闭\nCtrl + P + Q\t# 容器不关闭退出\n删除容器\n\ndocker rm -f 容器id\t\t\t\t\t\t# 删除指定容器\ndocker rm -f $(docker ps -aq)\t\t# 删除所有容器\ndocker ps -a -q|xargs docker rm -f\t# 删除所有的容器\n启动和停止容器的操作\n\ndocker start 容器id\t\t\t# 启动容器\ndocker restart 容器id\t\t\t# 重启容器\ndocker stop 容器id\t\t\t# 停止当前正在运行的容器\ndocker kill 容器id\t\t\t# 强制停止当前的容器\n\n进入当前正在运行的容器\n\n# 我们通常容器使用后台方式运行的， 需要进入容器，修改一些配置\n\n# 命令\ndocker exec -it 容器id /bin/bash\n\n# 测试\n[root@iZ2zeg4ytp0whqtmxbsqiiZ /]# docker exec -it df358bc06b17 /bin/bash\n[root@df358bc06b17 /]# ls   \nbin  etc   lib\t  lost+found  mnt  proc  run   srv  tmp  var\ndev  home  lib64  media       opt  root  sbin  sys  usr\n[root@df358bc06b17 /]# ps -ef\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0 Aug11 pts/0    00:00:00 /bin/bash\nroot        29     0  0 01:06 pts/1    00:00:00 /bin/bash\nroot        43    29  0 01:06 pts/1    00:00:00 ps -ef\n\n# 方式二\ndocker attach 容器id\n\n# docker exec\t\t# 进入容器后开启一个新的终端，可以在里面操作\n# docker attach\t\t# 进入容器正在执行的终端，不会启动新的进程\n使用数据卷\n\n直接使用命令来挂载 -v\n\n```shell\ndocker run -it -v 主机目录：容器目录\n\n\nMySQL的数据持久化的问题！\n\n```shell\n# 获取镜像\n[root@iZ2zeg4ytp0whqtmxbsqiiZ home]# docker pull mysql:5.7\n\n# 运行容器， 需要做数据挂载！ # 安装启动mysql，需要配置密码（注意）\n# 官方测试， docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag\n\n# 启动我们的\n-d\t\t# 后台运行\n-p\t\t# 端口隐射\n-v\t\t# 卷挂载\n-e\t\t# 环境配置\n--name\t# 容器的名字\n\n# 匿名挂载\n-v 容器内路径\ndocker run -d -P --name nginx01 -v /etc/nginx nginx\t\t# -P 随机指定端口\n\n\n# 具名挂载\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx\n26da1ec7d4994c76e80134d24d82403a254a4e1d84ec65d5f286000105c3da17\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                   NAMES\n26da1ec7d499        nginx               \"/docker-entrypoint.…\"   3 seconds ago       Up 2 seconds        0.0.0.0:32769->80/tcp   nginx02\n486de1da03cb        nginx               \"/docker-entrypoint.…\"   3 minutes ago       Up 3 minutes        0.0.0.0:32768->80/tcp   nginx01\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume ls\nDRIVER              VOLUME NAME\nlocal               561b81a03506f31d45ada3f9fb7bd8d7c9b5e0f826c877221a17e45d4c80e096\nlocal               36083fb6ca083005094cbd49572a0bffeec6daadfbc5ce772909bb00be760882\nlocal               juming-nginx\n\n# 通过-v 卷名：容器内的路径\n# 查看一下这个卷\n# docker volume inspect juming-nginx\n\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume inspect juming-nginx\n[\n  {\n      \"CreatedAt\": \"2020-08-12T18:15:21+08:00\",\n      \"Driver\": \"local\",\n      \"Labels\": null,\n      \"Mountpoint\": \"/var/lib/docker/volumes/juming-nginx/_data\",\n      \"Name\": \"juming-nginx\",\n      \"Options\": null,\n      \"Scope\": \"local\"\n  }\n]\n所有docker容器内的卷，没有指定目录的情况下都是在/var/lib/docker/volumes/xxxxx/_data\n\n我们通过具名挂载可以方便的找到我们的一个卷，大多数情况下使用的是具名挂载\n\n# 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！\n-v\t容器内路径\t\t\t\t\t# 匿名挂载\n-v\t卷名:容器内路径\t\t\t   # 具名挂载\n-v /主机路径:容器内路径\t\t\t  # 指定路径挂载\n拓展\n\n# 通过 -v 容器内容路径 ro rw 改变读写权限\nro\treadonly\t# 只读\nrw\treadwrite\t# 可读可写\n\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx\n\n# ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内容无法操作\n```\n",
    menus: {
        menus: [
            {
                type: "h1",
                target: "#t0",
                title: "Docker自用Docker自用Docker自用"
            }
        ],
        summary: "# Docker自用Docker自用Docker自用```shellservice docker start || systemctl start docker\t启动dockersystemctl enable docker\t将docker设定为开机自启退出容器exit \t\t\t# 直接"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76e0700bde471cfe5f3c"),
    fieldsId: "603e6469dc5d115e3c5071c1",
    text: "<html><head></head><body><p><img src=\"http://api.03c3.cn/zb\" alt=\"\"></p>\n</body></html>",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:20.102Z"),
    updatedAt: ISODate("2021-06-01T05:59:43.594Z"),
    __v: NumberInt("0"),
    mdText: "![](http://api.03c3.cn/zb)\n",
    menus: {
        menus: [ ],
        summary: "![](http://api.03c3.cn/zb)"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60519b28ab170f1d4875e778"),
    text: "这是草稿 aaa",
    createdAt: ISODate("2021-03-17T06:01:12.613Z"),
    updatedAt: ISODate("2021-03-17T06:01:12.946Z"),
    __v: NumberInt("0"),
    fieldsId: "60519b28ab170f1d4875e779",
    mdText: "这是草稿 aaa",
    isPublish: false,
    allowComment: true,
    menus: null
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60519b8eab170f1d4875e77a"),
    text: "<p>zccs</p>",
    createdAt: ISODate("2021-03-17T06:02:54.831Z"),
    updatedAt: ISODate("2021-06-01T05:59:01.7Z"),
    __v: NumberInt("0"),
    fieldsId: "60519b8fab170f1d4875e77b",
    mdText: "2021-5-11 20:54:35\n\n@[TOC]\n\n# 一级标题123123\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n# 我展示的是一级标题\n\n## 我展示的是二级标题\n\n*斜体文本*\n\n*斜体文本*\n\n**粗体文本**\n\n**粗体文本**\n\n***粗斜体文本***\n\n***粗斜体文本***\n\n---\n\n---\n\n---\n\n---\n\n---\n\n[RUNOOB.COM](RUNOOB.COM)\n\n[GOOGLE.COM](GOOGLE.COM)\n\n~~[BAIDU.COM](BAIDU.COM)\n\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n\n1. 第一项：\n   * 第一项嵌套的第一个元素\n   * 第一项嵌套的第二个元素\n2. 第二项：\n   * 第二项嵌套的第一个元素\n   * 第二项嵌套的第二个元素\n\n> 区块引用\n>\n> 菜鸟教程\n>\n> 学的不仅是技术更是梦想\n\n`printf()` 函数\n\n```javascript\n$(document).ready(function () {\n    alert('RUNOOB');\n});\n```\n\n这是一个链接 [菜鸟教程](https://www.runoob.com)\n\n[https://www.runoob.com](https://www.runoob.com)\n\n![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)\n\n\n| 表头   | 表头   |\n| -------- | -------- |\n| 单元格 | 单元格 |\n| 单元格 | 单元格 |\n\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :------- | -------: | :--------: |\n| 单元格 | 单元格 |  单元格  |\n| 单元格 | 单元格 |  单元格  |\n\n使用 Ctrl+Alt+Del 重启电脑\n\n\\   反斜线\n\n`   反引号\n\n* 星号\n  _   下划线\n  {}  花括号\n  []  方括号\n  ()  小括号\n\n# 井字号\n\n* 加号\n* 减号\n  .   英文句点\n  !   感叹号\n\n```c\n//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    isPublish: true,
    allowComment: true,
    menus: {
        menus: [
            {
                type: "h1",
                target: "#t0",
                title: "一级标题123123"
            },
            {
                type: "h2",
                target: "#t1",
                title: "二级标题"
            },
            {
                type: "h3",
                target: "#t2",
                title: "三级标题"
            },
            {
                type: "h4",
                target: "#t3",
                title: "四级标题"
            },
            {
                type: "h5",
                target: "#t4",
                title: "五级标题"
            },
            {
                type: "h6",
                target: "#t5",
                title: "六级标题"
            },
            {
                type: "h1",
                target: "#t6",
                title: "我展示的是一级标题"
            },
            {
                type: "h2",
                target: "#t7",
                title: "我展示的是二级标题"
            },
            {
                type: "h1",
                target: "#t8",
                title: "井字号"
            }
        ],
        summary: "2021-5-11 20:54:35@[TOC]# 一级标题123123## 二级标题### 三级标题#### 四级标题##### 五级标题###### 六级标题# 我展示的是一级标题## 我展示的是二级标题*斜体文本**斜体文本***粗体文本**"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60a4ca29f934526fa8594919"),
    text: "<html><head></head><body><p><img src=\"http://api.03c3.cn/zb\" alt=\"\"></p>\n</body></html>",
    createdAt: ISODate("2021-05-19T08:19:53.375Z"),
    updatedAt: ISODate("2021-05-19T08:26:26.472Z"),
    __v: NumberInt("0"),
    fieldsId: "60a4ca29f934526fa859491a",
    mdText: "zccs\n",
    menus: "",
    isPublish: false,
    allowComment: false
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60a4d803a14c5f03d4e7d03b"),
    text: "<html><head></head><body><p>2021-5-11 20:54:35</p>\n<p>@[TOC]</p>\n<h1 id=\"t0\">一级标题123123</h1>\n<h2 id=\"t1\">二级标题</h2>\n<h3 id=\"t2\">三级标题</h3>\n<h4 id=\"t3\">四级标题</h4>\n<h5 id=\"t4\">五级标题</h5>\n<h6 id=\"t5\">六级标题</h6>\n<h1 id=\"t6\">我展示的是一级标题</h1>\n<h2 id=\"t7\">我展示的是二级标题</h2>\n<p><em>斜体文本</em></p>\n<p><em>斜体文本</em></p>\n<p><strong>粗体文本</strong></p>\n<p><strong>粗体文本</strong></p>\n<p><em><strong>粗斜体文本</strong></em></p>\n<p><em><strong>粗斜体文本</strong></em></p>\n<hr>\n<hr>\n<hr>\n<hr>\n<hr>\n<p><a href=\"RUNOOB.COM\">RUNOOB.COM</a></p>\n<p><a href=\"GOOGLE.COM\">GOOGLE.COM</a></p>\n<p>~~<a href=\"BAIDU.COM\">BAIDU.COM</a></p>\n<ul>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n</ul>\n<ol>\n<li>第一项：\n<ul>\n<li>第一项嵌套的第一个元素</li>\n<li>第一项嵌套的第二个元素</li>\n</ul>\n</li>\n<li>第二项：\n<ul>\n<li>第二项嵌套的第一个元素</li>\n<li>第二项嵌套的第二个元素</li>\n</ul>\n</li>\n</ol>\n<blockquote>\n<p>区块引用</p>\n<p>菜鸟教程</p>\n<p>学的不仅是技术更是梦想</p>\n</blockquote>\n<p><code>printf()</code> 函数</p>\n<pre><code class=\"language-javascript\">$(document).ready(function () {\n    alert('RUNOOB');\n});\n</code></pre>\n<p>这是一个链接 <a href=\"https://www.runoob.com\">菜鸟教程</a></p>\n<p><a href=\"https://www.runoob.com\">https://www.runoob.com</a></p>\n<p><img src=\"http://static.runoob.com/images/runoob-logo.png\" alt=\"RUNOOB 图标\"></p>\n<table>\n<thead>\n<tr>\n<th>表头</th>\n<th>表头</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>单元格</td>\n<td>单元格</td>\n</tr>\n<tr>\n<td>单元格</td>\n<td>单元格</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th align=\"left\">左对齐</th>\n<th align=\"right\">右对齐</th>\n<th align=\"center\">居中对齐</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"left\">单元格</td>\n<td align=\"right\">单元格</td>\n<td align=\"center\">单元格</td>\n</tr>\n<tr>\n<td align=\"left\">单元格</td>\n<td align=\"right\">单元格</td>\n<td align=\"center\">单元格</td>\n</tr>\n</tbody>\n</table>\n<p>使用 Ctrl+Alt+Del 重启电脑</p>\n<p>\\   反斜线</p>\n<p>`   反引号</p>\n<ul>\n<li>星号<br>\n_   下划线<br>\n{}  花括号<br>\n[]  方括号<br>\n()  小括号</li>\n</ul>\n<h1 id=\"t8\">井字号</h1>\n<ul>\n<li>加号</li>\n<li>减号<br>\n.   英文句点<br>\n!   感叹号</li>\n</ul>\n<pre><code class=\"language-c\">//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &amp;old) &lt; 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &amp;= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &amp;= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &amp;old) &lt; 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &amp;buf, 1) &lt; 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &amp;old) &lt; 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j &lt; 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] &amp;&amp; a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i &lt; 2; i++)\n    {\n        if (a[i] - b[i] &gt; 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) &gt; abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] &gt; 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) &lt; fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] &gt; 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) &lt; fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r &lt; 1 || c &lt; 1 || r &gt;= displayPixelSize || c &gt;= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i &lt; 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j &lt; 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j &gt;= 0; j--)\n        {\n            if (dis[j][1] &gt; dis[j + 1][1])\n            {\n                fswap(&amp;dis[j][1], &amp;dis[j + 1][1]);\n                fswap(&amp;dis[j][0], &amp;dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i &lt; 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j &lt; 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 &amp;&amp; displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j &lt; 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) &gt; sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i &lt; 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i &lt; 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i &lt; 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) &lt; 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i &lt; displayPixelSize; i++)\n    {\n        for (int j = 0; j &lt; displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n</code></pre>\n<pre><code class=\"language-python\">import requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&amp;order=click\", \"&amp;order=pubdate\", \"&amp;order=dm\", \"&amp;order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\"&gt;', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n</code></pre>\n</body></html>",
    mdText: "2021-5-11 20:54:35\n\n@[TOC]\n\n# 一级标题123123\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n# 我展示的是一级标题\n\n## 我展示的是二级标题\n\n*斜体文本*\n\n*斜体文本*\n\n**粗体文本**\n\n**粗体文本**\n\n***粗斜体文本***\n\n***粗斜体文本***\n\n---\n\n---\n\n---\n\n---\n\n---\n\n[RUNOOB.COM](RUNOOB.COM)\n\n[GOOGLE.COM](GOOGLE.COM)\n\n~~[BAIDU.COM](BAIDU.COM)\n\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n\n1. 第一项：\n   * 第一项嵌套的第一个元素\n   * 第一项嵌套的第二个元素\n2. 第二项：\n   * 第二项嵌套的第一个元素\n   * 第二项嵌套的第二个元素\n\n> 区块引用\n>\n> 菜鸟教程\n>\n> 学的不仅是技术更是梦想\n\n`printf()` 函数\n\n```javascript\n$(document).ready(function () {\n    alert('RUNOOB');\n});\n```\n\n这是一个链接 [菜鸟教程](https://www.runoob.com)\n\n[https://www.runoob.com](https://www.runoob.com)\n\n![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)\n\n\n| 表头   | 表头   |\n| -------- | -------- |\n| 单元格 | 单元格 |\n| 单元格 | 单元格 |\n\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :------- | -------: | :--------: |\n| 单元格 | 单元格 |  单元格  |\n| 单元格 | 单元格 |  单元格  |\n\n使用 Ctrl+Alt+Del 重启电脑\n\n\\   反斜线\n\n`   反引号\n\n* 星号\n  _   下划线\n  {}  花括号\n  []  方括号\n  ()  小括号\n\n# 井字号\n\n* 加号\n* 减号\n  .   英文句点\n  !   感叹号\n\n```c\n//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    isPublish: true,
    allowComment: false,
    createdAt: ISODate("2021-05-19T09:18:59.194Z"),
    updatedAt: ISODate("2021-06-01T15:01:24.169Z"),
    __v: NumberInt("0"),
    fieldsId: "60a4d803a14c5f03d4e7d03c",
    menus: {
        menus: [
            {
                type: "h1",
                target: "#t0",
                title: "一级标题123123"
            },
            {
                type: "h2",
                target: "#t1",
                title: "二级标题"
            },
            {
                type: "h3",
                target: "#t2",
                title: "三级标题"
            },
            {
                type: "h4",
                target: "#t3",
                title: "四级标题"
            },
            {
                type: "h5",
                target: "#t4",
                title: "五级标题"
            },
            {
                type: "h6",
                target: "#t5",
                title: "六级标题"
            },
            {
                type: "h1",
                target: "#t6",
                title: "我展示的是一级标题"
            },
            {
                type: "h2",
                target: "#t7",
                title: "我展示的是二级标题"
            },
            {
                type: "h1",
                target: "#t8",
                title: "井字号"
            }
        ],
        summary: "2021-5-11 20:54:35@[TOC]# 一级标题123123## 二级标题### 三级标题#### 四级标题##### 五级标题###### 六级标题# 我展示的是一级标题## 我展示的是二级标题*斜体文本**斜体文本***粗体文本**"
    }
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("60a8e3ab77535e3424b9591c"),
    text: "<html><head></head><body><p>2021-5-11 20:54:35</p>\n<p>@[TOC]</p>\n<h1 id=\"t0\">一级标题123123</h1>\n<h2 id=\"t1\">二级标题</h2>\n<h3 id=\"t2\">三级标题</h3>\n<h4 id=\"t3\">四级标题</h4>\n<h5 id=\"t4\">五级标题</h5>\n<h6 id=\"t5\">六级标题</h6>\n<h1 id=\"t6\">我展示的是一级标题</h1>\n<h2 id=\"t7\">我展示的是二级标题</h2>\n<p><em>斜体文本</em></p>\n<p><em>斜体文本</em></p>\n<p><strong>粗体文本</strong></p>\n<p><strong>粗体文本</strong></p>\n<p><em><strong>粗斜体文本</strong></em></p>\n<p><em><strong>粗斜体文本</strong></em></p>\n<hr>\n<hr>\n<hr>\n<hr>\n<hr>\n<p><a href=\"RUNOOB.COM\">RUNOOB.COM</a></p>\n<p><a href=\"GOOGLE.COM\">GOOGLE.COM</a></p>\n<p>~~<a href=\"BAIDU.COM\">BAIDU.COM</a></p>\n<ul>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n<li>第一项</li>\n<li>第二项</li>\n<li>第三项</li>\n</ul>\n<ol>\n<li>第一项：\n<ul>\n<li>第一项嵌套的第一个元素</li>\n<li>第一项嵌套的第二个元素</li>\n</ul>\n</li>\n<li>第二项：\n<ul>\n<li>第二项嵌套的第一个元素</li>\n<li>第二项嵌套的第二个元素</li>\n</ul>\n</li>\n</ol>\n<blockquote>\n<p>区块引用</p>\n<p>菜鸟教程</p>\n<p>学的不仅是技术更是梦想</p>\n</blockquote>\n<p><code>printf()</code> 函数</p>\n<pre><code class=\"language-javascript\">$(document).ready(function () {\n    alert('RUNOOB');\n});\n</code></pre>\n<p>这是一个链接 <a href=\"https://www.runoob.com\">菜鸟教程</a></p>\n<p><a href=\"https://www.runoob.com\">https://www.runoob.com</a></p>\n<p><img src=\"http://static.runoob.com/images/runoob-logo.png\" alt=\"RUNOOB 图标\"></p>\n<table>\n<thead>\n<tr>\n<th>表头</th>\n<th>表头</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>单元格</td>\n<td>单元格</td>\n</tr>\n<tr>\n<td>单元格</td>\n<td>单元格</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th align=\"left\">左对齐</th>\n<th align=\"right\">右对齐</th>\n<th align=\"center\">居中对齐</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"left\">单元格</td>\n<td align=\"right\">单元格</td>\n<td align=\"center\">单元格</td>\n</tr>\n<tr>\n<td align=\"left\">单元格</td>\n<td align=\"right\">单元格</td>\n<td align=\"center\">单元格</td>\n</tr>\n</tbody>\n</table>\n<p>使用 Ctrl+Alt+Del 重启电脑</p>\n<p>\\   反斜线</p>\n<p>`   反引号</p>\n<ul>\n<li>星号<br>\n_   下划线<br>\n{}  花括号<br>\n[]  方括号<br>\n()  小括号</li>\n</ul>\n<h1 id=\"t8\">井字号</h1>\n<ul>\n<li>加号</li>\n<li>减号<br>\n.   英文句点<br>\n!   感叹号</li>\n</ul>\n<pre><code class=\"language-c\">//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &amp;old) &lt; 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &amp;= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &amp;= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &amp;old) &lt; 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &amp;buf, 1) &lt; 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &amp;old) &lt; 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i &lt; 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j &lt; 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] &amp;&amp; a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i &lt; 2; i++)\n    {\n        if (a[i] - b[i] &gt; 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) &gt; abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] &gt; 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) &lt; fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] &gt; 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) &lt; fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r &lt; 1 || c &lt; 1 || r &gt;= displayPixelSize || c &gt;= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i &lt; 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j &lt; 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j &gt;= 0; j--)\n        {\n            if (dis[j][1] &gt; dis[j + 1][1])\n            {\n                fswap(&amp;dis[j][1], &amp;dis[j + 1][1]);\n                fswap(&amp;dis[j][0], &amp;dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i &lt; 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j &lt; 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 &amp;&amp; displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j &lt; 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j &lt; 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) &gt; sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i &lt; 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i &lt; 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i &lt; 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) &lt; 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i &lt; displayPixelSize; i++)\n    {\n        for (int j = 0; j &lt; displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n</code></pre>\n<pre><code class=\"language-python\">import requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&amp;order=click\", \"&amp;order=pubdate\", \"&amp;order=dm\", \"&amp;order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\"&gt;', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n</code></pre>\n</body></html>",
    mdText: "2021-5-11 20:54:35\n\n@[TOC]\n\n# 一级标题123123\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n# 我展示的是一级标题\n\n## 我展示的是二级标题\n\n*斜体文本*\n\n*斜体文本*\n\n**粗体文本**\n\n**粗体文本**\n\n***粗斜体文本***\n\n***粗斜体文本***\n\n---\n\n---\n\n---\n\n---\n\n---\n\n[RUNOOB.COM](RUNOOB.COM)\n\n[GOOGLE.COM](GOOGLE.COM)\n\n~~[BAIDU.COM](BAIDU.COM)\n\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n* 第一项\n* 第二项\n* 第三项\n\n1. 第一项：\n   * 第一项嵌套的第一个元素\n   * 第一项嵌套的第二个元素\n2. 第二项：\n   * 第二项嵌套的第一个元素\n   * 第二项嵌套的第二个元素\n\n> 区块引用\n>\n> 菜鸟教程\n>\n> 学的不仅是技术更是梦想\n\n`printf()` 函数\n\n```javascript\n$(document).ready(function () {\n    alert('RUNOOB');\n});\n```\n\n这是一个链接 [菜鸟教程](https://www.runoob.com)\n\n[https://www.runoob.com](https://www.runoob.com)\n\n![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)\n\n\n| 表头   | 表头   |\n| -------- | -------- |\n| 单元格 | 单元格 |\n| 单元格 | 单元格 |\n\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :------- | -------: | :--------: |\n| 单元格 | 单元格 |  单元格  |\n| 单元格 | 单元格 |  单元格  |\n\n使用 Ctrl+Alt+Del 重启电脑\n\n\\   反斜线\n\n`   反引号\n\n* 星号\n  _   下划线\n  {}  花括号\n  []  方括号\n  ()  小括号\n\n# 井字号\n\n* 加号\n* 减号\n  .   英文句点\n  !   感叹号\n\n```c\n//注释测试\n#include \n#include \n#include \n#ifdef _WIN32\n#include \n#include \n#endif\n#include \n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include \n#include \nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'(.*?)', str(bfl), re.S)\nnewdm = re.findall(r'(.*?)', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    isPublish: true,
    allowComment: false,
    createdAt: ISODate("2021-05-22T10:57:47.747Z"),
    updatedAt: ISODate("2021-06-01T14:57:20.935Z"),
    __v: NumberInt("0"),
    fieldsId: "60a8e3ab77535e3424b9591d",
    menus: {
        menus: [
            {
                type: "h1",
                target: "#t0",
                title: "一级标题123123"
            },
            {
                type: "h2",
                target: "#t1",
                title: "二级标题"
            },
            {
                type: "h3",
                target: "#t2",
                title: "三级标题"
            },
            {
                type: "h4",
                target: "#t3",
                title: "四级标题"
            },
            {
                type: "h5",
                target: "#t4",
                title: "五级标题"
            },
            {
                type: "h6",
                target: "#t5",
                title: "六级标题"
            },
            {
                type: "h1",
                target: "#t6",
                title: "我展示的是一级标题"
            },
            {
                type: "h2",
                target: "#t7",
                title: "我展示的是二级标题"
            },
            {
                type: "h1",
                target: "#t8",
                title: "井字号"
            }
        ],
        summary: "2021-5-11 20:54:35@[TOC]# 一级标题123123## 二级标题### 三级标题#### 四级标题##### 五级标题###### 六级标题# 我展示的是一级标题## 我展示的是二级标题*斜体文本**斜体文本***粗体文本**"
    }
} ]);

// ----------------------------
// Collection structure for fields
// ----------------------------
db.getCollection("fields").drop();
db.createCollection("fields");
db.getCollection("fields").createIndex({
    title: NumberInt("1")
}, {
    name: "标题",
    weights: {
        title: NumberInt("1")
    },
    "default_language": "english",
    "language_override": "language",
    textIndexVersion: NumberInt("3")
});

// ----------------------------
// Documents of fields
// ----------------------------
db.getCollection("fields").insert([ {
    _id: ObjectId("603e645cdc5d115e3c5071a3"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e751045d89d46e830734a"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnjj15c5fsj30w20xc4gt.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2018-01-22T11:25:06.000Z"),
    updatedAt: ISODate("2021-06-01T15:30:32.352Z"),
    __v: NumberInt("0"),
    commentsNum: 124,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e645edc5d115e3c5071a4"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e756b45d89d46e830734b"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2018-01-22T11:25:06.000Z"),
    updatedAt: ISODate("2021-06-01T15:30:35.03Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e645fdc5d115e3c5071a5"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d0700bde471cfe5f20"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2018-01-22T11:25:06.000Z"),
    updatedAt: ISODate("2021-06-01T15:30:37.339Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e645fdc5d115e3c5071a6"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d0700bde471cfe5f21"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2018-01-22T11:25:06.000Z"),
    updatedAt: ISODate("2021-06-01T15:30:39.592Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6460dc5d115e3c5071a7"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d1700bde471cfe5f22"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2917876506,2101419022&fm=26&gp=0.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2019-02-27T05:29:28.000Z"),
    updatedAt: ISODate("2021-06-01T15:30:41.774Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6460dc5d115e3c5071a9"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d1700bde471cfe5f24"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2019-02-27T05:29:28.000Z"),
    updatedAt: ISODate("2021-02-27T05:29:48.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6461dc5d115e3c5071aa"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d2700bde471cfe5f25"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-27T05:30:00.000Z"),
    updatedAt: ISODate("2021-02-27T05:30:00.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6462dc5d115e3c5071ab"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d2700bde471cfe5f26"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-27T05:30:00.000Z"),
    updatedAt: ISODate("2021-02-27T05:30:00.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6463dc5d115e3c5071ac"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d3700bde471cfe5f27"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-27T05:30:08.000Z"),
    updatedAt: ISODate("2021-02-27T05:30:08.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6464dc5d115e3c5071ad"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d4700bde471cfe5f28"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-27T05:30:09.000Z"),
    updatedAt: ISODate("2021-02-27T05:30:09.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6465dc5d115e3c5071ae"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d4700bde471cfe5f29"),
    title: "标题",
    cover: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9BT2JZdzd5T3ZVNmlhZFhRWVZkNldBMjhhdkNTWkZYNWh2R1VIUW1MNFlpYmliOU51V1libkpOMklaOHduR3dZaWNMd215aWNUak1PU3ZoY2liT2ljOGJPT3JwN3cvNjQw?x-oss-process=image/format,png",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T12:33:25.000Z"),
    updatedAt: ISODate("2021-02-28T12:33:25.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6465dc5d115e3c5071af"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d4700bde471cfe5f2a"),
    title: "标题",
    cover: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9BT2JZdzd5T3ZVNmlhZFhRWVZkNldBMjhhdkNTWkZYNWh2R1VIUW1MNFlpYmliOU51V1libkpOMklaOHduR3dZaWNMd215aWNUak1PU3ZoY2liT2ljOGJPT3JwN3cvNjQw?x-oss-process=image/format,png",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T12:35:24.000Z"),
    updatedAt: ISODate("2021-02-28T12:35:24.000Z"),
    __v: NumberInt("0"),
    commentsNum: 7,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6466dc5d115e3c5071b0"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d5700bde471cfe5f2b"),
    title: "标题",
    cover: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9BT2JZdzd5T3ZVNmlhZFhRWVZkNldBMjhhdkNTWkZYNWh2R1VIUW1MNFlpYmliOU51V1libkpOMklaOHduR3dZaWNMd215aWNUak1PU3ZoY2liT2ljOGJPT3JwN3cvNjQw?x-oss-process=image/format,png",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T12:35:25.000Z"),
    updatedAt: ISODate("2021-02-28T12:35:25.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6466dc5d115e3c5071b1"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d5700bde471cfe5f2c"),
    title: "标题",
    cover: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9BT2JZdzd5T3ZVNmlhZFhRWVZkNldBMjhhdkNTWkZYNWh2R1VIUW1MNFlpYmliOU51V1libkpOMklaOHduR3dZaWNMd215aWNUak1PU3ZoY2liT2ljOGJPT3JwN3cvNjQw?x-oss-process=image/format,png",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T12:35:25.000Z"),
    updatedAt: ISODate("2021-06-01T16:53:35.794Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6466dc5d115e3c5071b2"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d5700bde471cfe5f2d"),
    title: "标题",
    cover: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9BT2JZdzd5T3ZVNmlhZFhRWVZkNldBMjhhdkNTWkZYNWh2R1VIUW1MNFlpYmliOU51V1libkpOMklaOHduR3dZaWNMd215aWNUak1PU3ZoY2liT2ljOGJPT3JwN3cvNjQw?x-oss-process=image/format,png",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T12:35:25.000Z"),
    updatedAt: ISODate("2021-02-28T12:35:25.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b3"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d6700bde471cfe5f2e"),
    title: "ccc",
    cover: "https://api.mtyqx.cn/tapi/random.php",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:29.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:29.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b4"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d6700bde471cfe5f2f"),
    title: "标题",
    cover: "https://api.mtyqx.cn/tapi/random.php",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:29.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:29.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b5"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d6700bde471cfe5f30"),
    title: "标题",
    cover: "https://api.mtyqx.cn/tapi/random.php",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:30.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:30.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b6"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d7700bde471cfe5f31"),
    title: "标题222",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:30.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:30.000Z"),
    __v: NumberInt("0"),
    commentsNum: 7,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b7"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f32"),
    title: "标题111",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "https://api.mtyqx.cn/tapi/random.php",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:31.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:31.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b8"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f33"),
    title: "标题123",
    cover: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:31.000Z"),
    updatedAt: ISODate("2021-02-28T18:11:31.000Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b9"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f34"),
    title: "标题5",
    cover: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32.000Z"),
    updatedAt: ISODate("2021-06-01T17:10:59.911Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071ba"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d9700bde471cfe5f35"),
    title: "标题4",
    cover: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32.000Z"),
    updatedAt: ISODate("2021-06-01T17:10:58.508Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bb"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76dd700bde471cfe5f36"),
    title: "标题3",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    coverSmall: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2917876506,2101419022&fm=26&gp=0.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32.000Z"),
    updatedAt: ISODate("2021-06-01T17:10:57.145Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 1
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bc"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76de700bde471cfe5f37"),
    title: "标题2",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mp06j30nc0ntq6g.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:33.000Z"),
    updatedAt: ISODate("2021-06-01T17:22:29.26Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 7
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071be"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76de700bde471cfe5f39"),
    title: "标题1",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mdujj30k70k70x2.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mdujj30k70k70x2.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:34.000Z"),
    updatedAt: ISODate("2021-06-02T09:26:23.303Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 13
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bf"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76df700bde471cfe5f3a"),
    title: "标题123",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137lfsdj30rx0rw0up.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137lfsdj30rx0rw0up.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:35.000Z"),
    updatedAt: ISODate("2021-06-02T09:26:21.715Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 12
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071c0"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432"),
        ObjectId("60394d8a0c96f20a64a4c930"),
        ObjectId("60394d910c96f20a64a4c937")
    ],
    contentsId: ObjectId("603e76df700bde471cfe5f3b"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:35.000Z"),
    updatedAt: ISODate("2021-06-02T09:02:39.413Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false,
    view: 8
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6469dc5d115e3c5071c1"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432"),
        ObjectId("60394d920c96f20a64a4c938"),
        ObjectId("60394d8f0c96f20a64a4c935")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    title: "123123",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:35.000Z"),
    updatedAt: ISODate("2021-06-02T08:40:10.418Z"),
    __v: NumberInt("0"),
    commentsNum: 7,
    isDraft: false,
    view: 14
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60519b28ab170f1d4875e779"),
    tag: [
        ObjectId("60394d8a0c96f20a64a4c930"),
        ObjectId("60394d8e0c96f20a64a4c932")
    ],
    title: "这是草稿 aaa",
    contentsId: ObjectId("60519b28ab170f1d4875e778"),
    cover: "https://api.mtyqx.cn/tapi/random.php",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    commentsNum: NumberInt("0"),
    isDraft: true,
    createdAt: ISODate("2021-03-17T06:01:12.628Z"),
    updatedAt: ISODate("2021-03-17T06:02:25.259Z"),
    __v: NumberInt("0"),
    classification: ObjectId("603928572684e22ec8291c67"),
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60519b8fab170f1d4875e77b"),
    tag: [
        ObjectId("60394d8e0c96f20a64a4c931"),
        ObjectId("60394d8f0c96f20a64a4c933"),
        ObjectId("60394d8f0c96f20a64a4c934"),
        ObjectId("60394d8a0c96f20a64a4c930")
    ],
    title: "md服务端渲染",
    contentsId: ObjectId("60519b8eab170f1d4875e77a"),
    classification: ObjectId("6039284a2684e22ec8291c64"),
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gomphp0l22j31hc0u0wiq.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gomphp0l22j31hc0u0wiq.jpg",
    commentsNum: NumberInt("25"),
    isDraft: false,
    createdAt: ISODate("2021-03-17T06:02:55.07Z"),
    updatedAt: ISODate("2021-06-02T08:54:42.72Z"),
    __v: NumberInt("0"),
    view: 39
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60a4ca29f934526fa859491a"),
    tag: [
        ObjectId("60394d8a0c96f20a64a4c930"),
        ObjectId("60394d8e0c96f20a64a4c931")
    ],
    title: "2021-5-19 16:19:42",
    contentsId: ObjectId("60a4ca29f934526fa8594919"),
    classification: ObjectId("603928572684e22ec8291c67"),
    cover: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    commentsNum: NumberInt("0"),
    isDraft: true,
    createdAt: ISODate("2021-05-19T08:19:53.711Z"),
    updatedAt: ISODate("2021-05-19T08:26:25.819Z"),
    __v: NumberInt("0"),
    view: 0
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60a4d803a14c5f03d4e7d03c"),
    tag: [
        ObjectId("60394d8a0c96f20a64a4c930"),
        ObjectId("60394d8e0c96f20a64a4c931")
    ],
    title: "目录测试",
    contentsId: ObjectId("60a4d803a14c5f03d4e7d03b"),
    classification: ObjectId("603928572684e22ec8291c67"),
    cover: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    commentsNum: NumberInt("0"),
    isDraft: false,
    createdAt: ISODate("2021-05-19T09:18:59.534Z"),
    updatedAt: ISODate("2021-06-02T09:06:02.5Z"),
    __v: NumberInt("0"),
    view: 39
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60a8e3ab77535e3424b9591d"),
    tag: [
        ObjectId("60394d8a0c96f20a64a4c930"),
        ObjectId("60394d8e0c96f20a64a4c931"),
        ObjectId("60394d8f0c96f20a64a4c933"),
        ObjectId("60394d8f0c96f20a64a4c934")
    ],
    title: "123",
    contentsId: ObjectId("60a8e3ab77535e3424b9591c"),
    classification: ObjectId("603928572684e22ec8291c67"),
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    commentsNum: NumberInt("1"),
    isDraft: false,
    view: NumberInt("198"),
    createdAt: ISODate("2021-05-22T10:57:47.981Z"),
    updatedAt: ISODate("2021-06-02T09:26:25.744Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for links
// ----------------------------
db.getCollection("links").drop();
db.createCollection("links");

// ----------------------------
// Documents of links
// ----------------------------
db.getCollection("links").insert([ {
    _id: ObjectId("6044905ac04c915b00956ad6"),
    linksUrl: "test",
    linksName: "Dwsy",
    linksAvatar: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    linksDescription: "one~~~",
    rank: NumberInt("0"),
    createdAt: ISODate("2021-03-07T08:35:38.616Z"),
    updatedAt: ISODate("2021-03-07T08:35:38.616Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("60449066c04c915b00956ad7"),
    linksUrl: "dwsy.link:88",
    linksName: "1",
    linksAvatar: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mdujj30k70k70x2.jpg",
    linksDescription: "one~~~",
    rank: NumberInt("1"),
    createdAt: ISODate("2021-03-07T08:35:50.251Z"),
    updatedAt: ISODate("2021-03-07T08:35:50.251Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("6044906cc04c915b00956ad8"),
    linksUrl: "dwsy.link:88",
    linksName: "2",
    linksAvatar: "https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100",
    linksDescription: "one~~~",
    rank: NumberInt("2"),
    createdAt: ISODate("2021-03-07T08:35:56.979Z"),
    updatedAt: ISODate("2021-03-07T08:35:56.979Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("60449072c04c915b00956ad9"),
    linksUrl: "dwsy.link:88",
    linksName: "3",
    linksAvatar: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    linksDescription: "one~~~",
    rank: null,
    createdAt: ISODate("2021-03-07T08:36:02.677Z"),
    updatedAt: ISODate("2021-03-07T08:36:02.677Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("60449086c04c915b00956ada"),
    linksUrl: "dwsy.link:88",
    linksName: "4",
    linksAvatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2917876506,2101419022&fm=26&gp=0.jpg",
    linksDescription: "one~~~",
    rank: null,
    createdAt: ISODate("2021-03-07T08:36:22.409Z"),
    updatedAt: ISODate("2021-03-07T08:36:22.409Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("604490a6c04c915b00956adb"),
    linksUrl: "dwsy.link:88",
    linksName: "4",
    linksAvatar: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    linksDescription: "one~~~",
    rank: 4,
    createdAt: ISODate("2021-03-07T08:36:54.933Z"),
    updatedAt: ISODate("2021-03-07T08:36:54.933Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);

// ----------------------------
// Collection structure for pptoptions
// ----------------------------
db.getCollection("pptoptions").drop();
db.createCollection("pptoptions");

// ----------------------------
// Documents of pptoptions
// ----------------------------
db.getCollection("pptoptions").insert([ {
    _id: ObjectId("603c720256a59f613c3750c7"),
    pptImage: "http://fp1.fghrsh.net/2020/11/10/1a0144878d0702b4624abac576177812.png",
    pptLink: "article/603e76e0700bde471cfe5f3c",
    pptTitle: "测试",
    createdAt: ISODate("2021-03-01T04:48:02.03Z"),
    updatedAt: ISODate("2021-05-19T08:19:26.244Z"),
    __v: NumberInt("0"),
    rank: NumberInt("2"),
    pptSubTitle: "副标题2"
} ]);
db.getCollection("pptoptions").insert([ {
    _id: ObjectId("603c722656a59f613c3750c8"),
    pptImage: "http://img.meishanren.com/forum/201912/31/142249za448h8mhap8oeep.jpg",
    pptLink: "tag",
    pptTitle: "后台修改测试",
    createdAt: ISODate("2021-03-01T04:48:38.939Z"),
    updatedAt: ISODate("2021-03-08T18:43:45.687Z"),
    __v: NumberInt("0"),
    rank: NumberInt("3"),
    pptSubTitle: "副标题3"
} ]);
db.getCollection("pptoptions").insert([ {
    _id: ObjectId("603c746afbcedb59005213cf"),
    pptImage: "http://browser9.qhimg.com/bdm/1440_900_100/t013a4ed4683039d101.jpg",
    pptLink: "article/603e76e0700bde471cfe5f3c",
    pptTitle: "置顶测试",
    rank: NumberInt("1"),
    createdAt: ISODate("2021-03-01T04:58:18.726Z"),
    updatedAt: ISODate("2021-03-01T04:58:18.726Z"),
    __v: NumberInt("0"),
    pptSubTitle: "副标题1"
} ]);

// ----------------------------
// Collection structure for tags
// ----------------------------
db.getCollection("tags").drop();
db.createCollection("tags");

// ----------------------------
// Documents of tags
// ----------------------------
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8a0c96f20a64a4c930"),
    name: "设计模式",
    colours: "primary",
    description: "设计模式是学习心得",
    contentsNum: NumberInt("29"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:38.887Z"),
    updatedAt: ISODate("2021-05-22T10:57:48.299Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8e0c96f20a64a4c931"),
    name: "java",
    colours: "secondary",
    description: "java",
    contentsNum: NumberInt("12"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:42.477Z"),
    updatedAt: ISODate("2021-05-22T10:57:48.3Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-java"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8e0c96f20a64a4c932"),
    name: "css",
    colours: "red",
    description: "mdi-language-c",
    contentsNum: NumberInt("1"),
    order: NumberInt("0"),
    createdAt: ISODate("1970-01-01T00:00:00.000Z"),
    updatedAt: ISODate("2021-05-22T10:57:27.724Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-css3"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c933"),
    name: "c",
    colours: "error",
    description: "c",
    contentsNum: NumberInt("10"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43.272Z"),
    updatedAt: ISODate("2021-05-22T10:57:48.301Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c934"),
    name: "c#",
    colours: "info",
    description: "c#",
    contentsNum: NumberInt("12"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43.401Z"),
    updatedAt: ISODate("2021-05-22T10:57:48.302Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c935"),
    name: "c++",
    colours: "primary",
    description: "c++",
    contentsNum: NumberInt("46"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43.72Z"),
    updatedAt: ISODate("2021-03-19T06:15:01.009Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d910c96f20a64a4c936"),
    name: "js",
    colours: "success",
    description: "js",
    contentsNum: NumberInt("44"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:45.425Z"),
    updatedAt: ISODate("2021-03-08T20:23:43.849Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-javascript"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d910c96f20a64a4c937"),
    name: "go",
    colours: "primary",
    description: "go",
    contentsNum: NumberInt("22"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:45.876Z"),
    updatedAt: ISODate("2021-03-18T17:57:07.655Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-go"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d920c96f20a64a4c938"),
    name: "php",
    colours: "warning",
    description: "php",
    contentsNum: NumberInt("5"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:46.277Z"),
    updatedAt: ISODate("2021-03-08T20:23:22.386Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-php"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603bec07b139000093003432"),
    name: "测试",
    description: "测试",
    contentsNum: 9,
    order: 1,
    colours: "accent",
    createdAt: "2021-02-28 19:35:46.277",
    updatedAt: ISODate("2021-06-01T15:01:41.767Z"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603befa8b139000093003433"),
    name: "后台测试",
    colours: "warning",
    description: "tt",
    contentsNum: NumberInt("121"),
    order: NumberInt("1"),
    createdAt: "2021-02-28 19:35:46.277",
    updatedAt: ISODate("2021-06-01T15:01:41.765Z"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603c79872cc612292c1ec6fa"),
    name: "Java",
    colours: "primary",
    description: "Java",
    contentsNum: NumberInt("10"),
    order: NumberInt("11"),
    icon: "mdi-language-java",
    createdAt: ISODate("2021-03-01T05:20:07.469Z"),
    updatedAt: ISODate("2021-03-01T05:20:07.469Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603c79992cc612292c1ec6fb"),
    name: "JS",
    colours: "primary",
    description: "js",
    contentsNum: NumberInt("16"),
    order: NumberInt("11"),
    icon: "mdi-language-javascript",
    createdAt: ISODate("2021-03-01T05:20:25.716Z"),
    updatedAt: ISODate("2021-03-01T05:20:25.716Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603c7a272cc612292c1ec6fc"),
    name: "Python",
    colours: "#6b9ac9",
    description: "js",
    contentsNum: NumberInt("66"),
    order: NumberInt("11"),
    icon: "mdi-language-python",
    createdAt: ISODate("2021-03-01T05:22:47.553Z"),
    updatedAt: ISODate("2021-03-01T05:22:47.553Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603c7a3e2cc612292c1ec6fd"),
    name: "C",
    colours: "deep-purple accent-1",
    description: "js",
    contentsNum: NumberInt("6"),
    order: NumberInt("11"),
    icon: "mdi-language-c",
    createdAt: ISODate("2021-03-01T05:23:10.08Z"),
    updatedAt: ISODate("2021-03-01T05:23:10.08Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for themes
// ----------------------------
db.getCollection("themes").drop();
db.createCollection("themes");

// ----------------------------
// Documents of themes
// ----------------------------
db.getCollection("themes").insert([ {
    _id: ObjectId("60449bc9de18f269005ff108"),
    themeName: "dark",
    navigationImage: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3zb8v92j308p0kan2h.jpg",
    topImage: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3upue5sj31ea07ctkm.jpg",
    color: "{primary: '#21CFF3',accent: '#FF4081',secondary: '#9c36b5', success: '#4CAF50',info: '#2196F3',warning: '#FB8C00',error: '#FF5252' }",
    createdAt: ISODate("2021-03-07T09:24:25.014Z"),
    updatedAt: ISODate("2021-03-17T02:58:40.186Z"),
    __v: NumberInt("0"),
    accent: "#9c36b5",
    error: "#FF5252",
    info: "#ef6c00",
    primary: "#00b0ff",
    secondary: "#FF4081",
    success: "#4CAF50",
    warning: "#a325da"
} ]);
db.getCollection("themes").insert([ {
    _id: ObjectId("60449c1dde18f269005ff10a"),
    themeName: "light",
    navigationImage: "http://tva1.sinaimg.cn/large/005NWBIgly1gomplzktnmj30aw0txtb9.jpg",
    topImage: "http://tva1.sinaimg.cn/large/005NWBIgly1gompn54m93j31hh069405.jpg",
    color: "{primary: '#1976D2',accent: '#e91e63',secondary: '#30b1dc',success: '#4CAF50',info: '#2196F3',warning: '#FB8C00',error: '#FF5252'}",
    createdAt: ISODate("2021-03-07T09:25:49.136Z"),
    updatedAt: ISODate("2021-03-17T02:58:00.984Z"),
    __v: NumberInt("0"),
    accent: "#30b1dc",
    error: "#FB8C00",
    info: "#9565b1",
    primary: "#1e88e5",
    secondary: "#e91e63",
    success: "#4CAF50",
    warning: "#FF5252"
} ]);
db.getCollection("themes").insert([ {
    _id: ObjectId("604674ead5f2d070e02954db"),
    themeName: "后台测试",
    navigationImage: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
    topImage: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
    primary: "#b5f5ec",
    secondary: "#722ed2",
    accent: "",
    error: "",
    info: "#722ed1",
    success: "",
    warning: "",
    createdAt: ISODate("2021-03-08T19:03:06.574Z"),
    updatedAt: ISODate("2021-05-19T02:51:59.782Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for upfiles
// ----------------------------
db.getCollection("upfiles").drop();
db.createCollection("upfiles");

// ----------------------------
// Documents of upfiles
// ----------------------------
db.getCollection("upfiles").insert([ {
    _id: ObjectId("6033959377d8b861b0a59207"),
    fileName: "xx-xxx-xxx",
    contentsId: "6030e7f7381fd347b4c604fc",
    url: "http://tva1.sinaimg.cn/large/005NWBIgly1gnjj15c5fsj30w20xc4gt.jpg",
    group: "image",
    createdAt: ISODate("2021-02-22T11:29:23.931Z"),
    updatedAt: ISODate("2021-02-22T11:29:23.931Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60478f4aa6990d0bd00e252c"),
    username: "admin",
    password: "$2a$10$2hgvP0udoLLp7XBWeXNVOONKaafmiFYVT54Oi.2v.RA44uy.AOBEO",
    createdAt: ISODate("2021-03-09T15:07:54.829Z"),
    updatedAt: ISODate("2021-03-09T15:07:54.829Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60479779c4f0dd42543f230b"),
    username: "123123",
    password: "$2a$10$3kZ.J1lCieFDJgumcdZZj.ENVyLYL8BppeEbN.6Ufd5YlUly6o1Iu",
    createdAt: ISODate("2021-03-09T15:42:49.821Z"),
    updatedAt: ISODate("2021-03-09T15:42:49.821Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60a4856141165a64d880532f"),
    username: "string",
    password: "$2a$10$k57/1OAb720tKtQ4U/ESOuVvzmw01JwrMB0QuSadc5LuHZBveaRBO",
    createdAt: ISODate("2021-05-19T03:26:25.207Z"),
    updatedAt: ISODate("2021-05-19T03:26:25.207Z"),
    __v: NumberInt("0")
} ]);
