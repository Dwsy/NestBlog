/*
 Navicat Premium Data Transfer

 Source Server         : localMongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40404
 Source Host           : localhost:27017
 Source Schema         : myblog

 Target Server Type    : MongoDB
 Target Server Version : 40404
 File Encoding         : 65001

 Date: 09/03/2021 05:34:20
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
    contentsNum: NumberInt("112"),
    createdAt: ISODate("2021-02-26T16:56:42Z"),
    updatedAt: ISODate("2021-03-08T13:25:37Z"),
    __v: NumberInt("0"),
    icon: "mdi-note-multiple",
    rank: NumberInt("1")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928522684e22ec8291c65"),
    name: "test后台测试",
    description: "test",
    contentsNum: NumberInt("1"),
    createdAt: ISODate("2021-02-26T16:56:50Z"),
    updatedAt: ISODate("2021-03-08T17:57:54Z"),
    __v: NumberInt("0"),
    icon: "mdi-test-tube",
    rank: NumberInt("4")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928552684e22ec8291c66"),
    name: "吐槽",
    description: "吐槽",
    contentsNum: NumberInt("11"),
    createdAt: ISODate("2021-02-26T16:56:53Z"),
    updatedAt: ISODate("2021-03-08T13:25:53Z"),
    __v: NumberInt("0"),
    icon: "mdi-home-edit",
    rank: NumberInt("2")
} ]);
db.getCollection("classifications").insert([ {
    _id: ObjectId("603928572684e22ec8291c67"),
    name: "加密分类",
    description: "加密分类",
    contentsNum: NumberInt("1"),
    createdAt: ISODate("2021-02-26T16:56:55Z"),
    updatedAt: ISODate("2021-02-26T16:56:55Z"),
    __v: NumberInt("0"),
    icon: "mdi-book-lock",
    rank: 3
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
    _id: ObjectId("603f7139be597b3a6078f917"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    createdAt: ISODate("2021-03-03T11:21:29Z"),
    updatedAt: ISODate("2021-03-03T11:21:29Z"),
    __v: NumberInt("0"),
    isChild: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f713fbe597b3a6078f918"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "123123",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    createdAt: ISODate("2021-03-03T11:21:35Z"),
    updatedAt: ISODate("2021-03-03T11:21:35Z"),
    __v: NumberInt("0"),
    isChild: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7140be597b3a6078f919"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    createdAt: ISODate("2021-03-03T11:21:36Z"),
    updatedAt: ISODate("2021-03-03T11:21:36Z"),
    __v: NumberInt("0"),
    isChild: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f72552b65446d28c35ec0"),
    childId: [
        ObjectId("603f713fbe597b3a6078f918"),
        ObjectId("603f7139be597b3a6078f917"),
        ObjectId("603f7140be597b3a6078f919"),
        ObjectId("60407787c7357104947c62f6"),
        ObjectId("60407839c7357104947c62fd"),
        ObjectId("60407a43c7357104947c6302")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "1123123",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T11:26:14Z"),
    updatedAt: ISODate("2021-03-04T06:12:19Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7d80e82fad54241c2d08"),
    childId: [
        ObjectId("60407827c7357104947c62fc"),
        ObjectId("60407863c7357104947c62fe"),
        ObjectId("60407891c7357104947c62ff"),
        ObjectId("604078b4c7357104947c6300")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T12:13:52Z"),
    updatedAt: ISODate("2021-03-04T06:05:40Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7d92e82fad54241c2d09"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "123123",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T12:14:10Z"),
    updatedAt: ISODate("2021-03-03T12:14:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7d94e82fad54241c2d0a"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T12:14:12Z"),
    updatedAt: ISODate("2021-03-03T12:14:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7d94e82fad54241c2d0b"),
    childId: [
        "603f7d98e82fad54241c2d0c",
        ObjectId("604083f1c7357104947c6309")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "112312",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T12:14:12Z"),
    updatedAt: ISODate("2021-03-04T06:53:37Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7d98e82fad54241c2d0c"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T12:14:16Z"),
    updatedAt: ISODate("2021-03-03T12:14:16Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7edde82fad54241c2d0d"),
    childId: [
        "603f7f60e82fad54241c2d0e",
        ObjectId("603f9353b95f7d10d06a5cd5"),
        ObjectId("603f9360b95f7d10d06a5cd6"),
        ObjectId("60408463c7357104947c630a"),
        ObjectId("60408490c7357104947c630b")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "",
    authorName: "123",
    ip: "0.0.0.0",
    url: "123",
    text: "123",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    createdAt: ISODate("2021-03-03T12:19:41Z"),
    updatedAt: ISODate("2021-03-04T06:56:16Z"),
    __v: NumberInt("0"),
    isChild: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f7f60e82fad54241c2d0e"),
    childId: [
        "603f8755117300009f004a23",
        ObjectId("603fb3d3be8acd56b4db0c05"),
        ObjectId("603fb3d4be8acd56b4db0c06"),
        ObjectId("603fb3d5be8acd56b4db0c07"),
        ObjectId("603fb3ddbe8acd56b4db0c08")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "",
    authorName: "子评论测试",
    ip: "0.0.0.0",
    url: "子评论测试",
    text: "子评论测试",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-03T12:21:52Z"),
    updatedAt: ISODate("2021-03-03T16:05:49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f8755117300009f004a23"),
    contentsId: "603e76e0700bde471cfe5f3c",
    authorName: "子评论测试子评论测试",
    text: "子评论测试子评论测试",
    ip: "0.0.0.0",
    url: "子评论测试",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    createdAt: "2021-03-03 12:21:52.157",
    updatedAt: "2021-03-03 12:21:52.157",
    __v: 0,
    isChild: true,
    childId: [ ]
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f925dca65ea4e44a66bda"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: false,
    createdAt: ISODate("2021-03-03T13:42:53Z"),
    updatedAt: ISODate("2021-03-03T13:42:53Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f92bdffea492c84e399e5"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T13:44:29Z"),
    updatedAt: ISODate("2021-03-03T13:44:29Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f92beffea492c84e399e6"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T13:44:30Z"),
    updatedAt: ISODate("2021-03-03T13:44:30Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f92bfffea492c84e399e7"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T13:44:31Z"),
    updatedAt: ISODate("2021-03-03T13:44:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f9353b95f7d10d06a5cd5"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评111论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T13:46:59Z"),
    updatedAt: ISODate("2021-03-03T13:46:59Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603f9360b95f7d10d06a5cd6"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "评论所属内容作者id",
    authorName: "Dwsy",
    text: "评111论内容",
    ip: "233.233.233.233",
    url: "dwsy.link:88",
    MD5email: "md5",
    email: "1@1.c",
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
    isChild: true,
    createdAt: ISODate("2021-03-03T13:47:12Z"),
    updatedAt: ISODate("2021-03-03T13:47:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fa642979d8962a8873c38"),
    childId: [
        ObjectId("604080e2c7357104947c6307")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "",
    authorName: "1",
    ip: "0.0.0.0",
    url: "1",
    text: "1",
    MD5email: "d83f67c56c7699c3178ba10a8daa767b",
    email: "1@1",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: false,
    createdAt: ISODate("2021-03-03T15:07:46Z"),
    updatedAt: ISODate("2021-03-04T06:40:34Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb20d979d8962a8873c39"),
    childId: [
        ObjectId("603fb69bbe8acd56b4db0c0d"),
        ObjectId("603fb948be8acd56b4db0c0e")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "",
    authorName: "弹窗子评论测试",
    ip: "0.0.0.0",
    url: "弹窗子评论测试",
    text: "弹窗子评论测试",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: false,
    createdAt: ISODate("2021-03-03T15:58:05Z"),
    updatedAt: ISODate("2021-03-03T16:28:56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb4b1be8acd56b4db0c0a"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "弹窗子评论测试",
    ip: "0.0.0.0",
    url: "弹窗子评论测试",
    text: "弹窗子评论测试111",
    MD5email: "609edd99fcb457cbbe58dbeea4382df6",
    email: "1.1@1",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-03T16:09:21Z"),
    updatedAt: ISODate("2021-03-03T16:09:21Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb54abe8acd56b4db0c0b"),
    childId: [
        ObjectId("6040803dc7357104947c6305"),
        ObjectId("604080b9c7357104947c6306"),
        ObjectId("604083cdc7357104947c6308")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "",
    authorName: "Cast to O",
    ip: "0.0.0.0",
    url: "Cast to ObjectId failed for value",
    text: "Cast to ObjectId failed for value",
    MD5email: "d83f67c56c7699c3178ba10a8daa767b",
    email: "1@1",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: false,
    createdAt: ISODate("2021-03-03T16:11:54Z"),
    updatedAt: ISODate("2021-03-04T06:53:01Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb5e3be8acd56b4db0c0c"),
    childId: [
        ObjectId("603fb20d979d8962a8873c39")
    ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "弹窗子评论测试1",
    ip: "0.0.0.0",
    url: "弹窗子评论测试1",
    text: "弹窗子评论测试1",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-03T16:14:27Z"),
    updatedAt: ISODate("2021-03-03T16:14:27Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb69bbe8acd56b4db0c0d"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "弹窗子评论测试1",
    ip: "0.0.0.0",
    url: "弹窗子评论测试1",
    text: "弹窗子评论测试1",
    MD5email: "a2bf28428587074d43e7f0eefa8fdfe7",
    email: "1@1.c",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-03T16:17:31Z"),
    updatedAt: ISODate("2021-03-03T16:17:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("603fb948be8acd56b4db0c0e"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "Dwsy",
    ip: "0.0.0.0",
    url: "wdsy",
    text: "回复@弹窗子评论测试1:就二级评论好了多级占地方",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-03T16:28:56Z"),
    updatedAt: ISODate("2021-03-03T16:28:56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6040803dc7357104947c6305"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "123",
    ip: "0.0.0.0",
    url: "123123123",
    text: "回复@Cast to O:123123",
    MD5email: "53e6086284353cb73d4979f08537d950",
    email: "123@123",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:37:49Z"),
    updatedAt: ISODate("2021-03-04T06:37:49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("604080b9c7357104947c6306"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "123123",
    ip: "0.0.0.0",
    url: "123",
    text: "回复@Cast to O:123123123123",
    MD5email: "d83f67c56c7699c3178ba10a8daa767b",
    email: "1@1",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:39:53Z"),
    updatedAt: ISODate("2021-03-04T06:39:53Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("604080e2c7357104947c6307"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "123",
    ip: "0.0.0.0",
    url: "123",
    text: "回复@1:123",
    MD5email: "e350260cf20a9f364a05c9a133e77604",
    email: "123@1",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:40:34Z"),
    updatedAt: ISODate("2021-03-04T06:40:34Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("604083cdc7357104947c6308"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "Dwsy1",
    ip: "0.0.0.0",
    url: "dwsy.link",
    text: "回复@123123:",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:53:01Z"),
    updatedAt: ISODate("2021-03-04T06:53:01Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("604083f1c7357104947c6309"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "123",
    ip: "0.0.0.0",
    url: "123",
    text: "回复@Dwsy:123",
    MD5email: "1816ac0b4bf213b0cfaacd48b6127f12",
    email: "123@",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:53:37Z"),
    updatedAt: ISODate("2021-03-04T06:53:37Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60408463c7357104947c630a"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "回复@子评论测试:",
    ip: "0.0.0.0",
    url: "回复@子评论测试:",
    text: "回复@子评论测试:",
    MD5email: "9f27ba80b29c88a1dd9fc5acdb2deeb9",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:55:31Z"),
    updatedAt: ISODate("2021-03-04T06:55:31Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60408490c7357104947c630b"),
    childId: [ ],
    contentsId: ObjectId("603e76e0700bde471cfe5f3c"),
    authorId: "777",
    authorName: "回复@123:",
    ip: "0.0.0.0",
    url: "回复@123:",
    text: "回复@123:",
    MD5email: "2e059e056dbf92db280b273f2e78bf1e",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4421.0 Safari/537.36 Edg/90.0.810.0",
    isChild: true,
    createdAt: ISODate("2021-03-04T06:56:16Z"),
    updatedAt: ISODate("2021-03-04T06:56:16Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("60420ab80ec6ca532cbf5bfa"),
    childId: [ ],
    contentsId: ObjectId("603e751045d89d46e830734a"),
    authorId: "",
    authorName: "后台测试",
    ip: "18.162.112.188",
    url: "2",
    text: "后台测试",
    MD5email: "a0b7b30cbef507e1fad31e75c6a134ee",
    email: "123456@qq.com",
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4426.0 Safari/537.36 Edg/90.0.816.0",
    isChild: false,
    createdAt: ISODate("2021-03-05T10:40:56Z"),
    updatedAt: ISODate("2021-03-08T17:56:59Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for contents
// ----------------------------
db.getCollection("contents").drop();
db.createCollection("contents");

// ----------------------------
// Documents of contents
// ----------------------------
db.getCollection("contents").insert([ {
    _id: ObjectId("603e751045d89d46e830734a"),
    fieldsId: "603e645cdc5d115e3c5071a3",
    text: "**cat.model.ts**\r\n\r\n```javascript\r\nimport { prop } from \"@typegoose/typegoose\";\r\nimport { IsString } from \"class-validator\";\r\n\r\nexport class Cat {\r\n  @IsString()\r\n  @prop({ required: true })\r\n  name: string;\r\n}\r\n```\r\n\r\n**qweqwe**\r\n\r\n*qweqw*\r\n\r\n`啊实打实的`\r\n\r\n[asdasd]()\r\n\r\n> 123\r\n\r\n1. 1\r\n2. 2\r\n3. 3\r\n4. 4\r\n5. 5\r\n\r\n- [x] 1\r\n- [x] 2\r\n\r\n## 1\r\n\r\n# 1\r\n\r\n[^1]: \r\n\r\n[11]: \r\n\r\n|      |      |      |\r\n| ---- | ---- | ---- |\r\n|      |      |      |\r\n|      |      |      |\r\n|      |      |      |\r\n\r\n**cat.model.ts**\r\n\r\n```javascript\r\nimport { prop } from \"@typegoose/typegoose\";\r\nimport { IsString } from \"class-validator\";\r\n\r\nexport class Cat {\r\n  @IsString()\r\n  @prop({ required: true })\r\n  name: string;\r\n}\r\n```\r\n\r\n**qweqwe**\r\n\r\n*qweqw*\r\n\r\n`啊实打实的`\r\n\r\n[asdasd]()\r\n\r\n> 123\r\n\r\n1. 1\r\n2. 2\r\n3. 3\r\n4. 4\r\n5. 5\r\n\r\n- [x] 1\r\n- [x] 2\r\n\r\n## 1\r\n\r\n# 1\r\n\r\n[^1]: \r\n\r\n[11]: \r\n\r\n|      |      |      |\r\n| ---- | ---- | ---- |\r\n|      |      |      |\r\n|      |      |      |\r\n|      |      |      |\r\n\r\n",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:25:36Z"),
    updatedAt: ISODate("2021-03-02T17:25:36Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e756b45d89d46e830734b"),
    fieldsId: "603e645edc5d115e3c5071a4",
    text: "文章2",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:27:07Z"),
    updatedAt: ISODate("2021-03-02T17:27:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d0700bde471cfe5f20"),
    fieldsId: "603e645fdc5d115e3c5071a5",
    text: "文章13",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:04Z"),
    updatedAt: ISODate("2021-03-02T17:33:04Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d0700bde471cfe5f21"),
    fieldsId: "603e645fdc5d115e3c5071a6",
    text: "文章4",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:04Z"),
    updatedAt: ISODate("2021-03-02T17:33:04Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d1700bde471cfe5f22"),
    fieldsId: "603e6460dc5d115e3c5071a7",
    text: "修改测试",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:05Z"),
    updatedAt: ISODate("2021-03-07T18:07:46Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d1700bde471cfe5f23"),
    fieldsId: "603e6460dc5d115e3c5071a8",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:05Z"),
    updatedAt: ISODate("2021-03-02T17:33:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d1700bde471cfe5f24"),
    fieldsId: "603e6460dc5d115e3c5071a9",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:05Z"),
    updatedAt: ISODate("2021-03-02T17:33:05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d2700bde471cfe5f25"),
    fieldsId: "603e6461dc5d115e3c5071aa",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:06Z"),
    updatedAt: ISODate("2021-03-02T17:33:06Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d2700bde471cfe5f26"),
    fieldsId: "603e6462dc5d115e3c5071ab",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:06Z"),
    updatedAt: ISODate("2021-03-02T17:33:06Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d3700bde471cfe5f27"),
    fieldsId: "603e6463dc5d115e3c5071ac",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:07Z"),
    updatedAt: ISODate("2021-03-02T17:33:07Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f28"),
    fieldsId: "603e6464dc5d115e3c5071ad",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08Z"),
    updatedAt: ISODate("2021-03-02T17:33:08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f29"),
    fieldsId: "603e6465dc5d115e3c5071ae",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08Z"),
    updatedAt: ISODate("2021-03-02T17:33:08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d4700bde471cfe5f2a"),
    fieldsId: "603e6465dc5d115e3c5071af",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:08Z"),
    updatedAt: ISODate("2021-03-02T17:33:08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2b"),
    fieldsId: "603e6466dc5d115e3c5071b0",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09Z"),
    updatedAt: ISODate("2021-03-02T17:33:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2c"),
    fieldsId: "603e6466dc5d115e3c5071b1",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09Z"),
    updatedAt: ISODate("2021-03-02T17:33:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d5700bde471cfe5f2d"),
    fieldsId: "603e6466dc5d115e3c5071b2",
    text: "new文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:09Z"),
    updatedAt: ISODate("2021-03-02T17:33:09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f2e"),
    fieldsId: "603e6467dc5d115e3c5071b3",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10Z"),
    updatedAt: ISODate("2021-03-02T17:33:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f2f"),
    fieldsId: "603e6467dc5d115e3c5071b4",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10Z"),
    updatedAt: ISODate("2021-03-02T17:33:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d6700bde471cfe5f30"),
    fieldsId: "603e6467dc5d115e3c5071b5",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:10Z"),
    updatedAt: ISODate("2021-03-02T17:33:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d7700bde471cfe5f31"),
    fieldsId: "603e6467dc5d115e3c5071b6",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:11Z"),
    updatedAt: ISODate("2021-03-02T17:33:11Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f32"),
    fieldsId: "603e6467dc5d115e3c5071b7",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12Z"),
    updatedAt: ISODate("2021-03-02T17:33:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f33"),
    fieldsId: "603e6467dc5d115e3c5071b8",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12Z"),
    updatedAt: ISODate("2021-03-02T17:33:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d8700bde471cfe5f34"),
    fieldsId: "603e6467dc5d115e3c5071b9",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:12Z"),
    updatedAt: ISODate("2021-03-02T17:33:12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76d9700bde471cfe5f35"),
    fieldsId: "603e6467dc5d115e3c5071ba",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:13Z"),
    updatedAt: ISODate("2021-03-02T17:33:13Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76dd700bde471cfe5f36"),
    fieldsId: "603e6468dc5d115e3c5071bb",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:17Z"),
    updatedAt: ISODate("2021-03-02T17:33:17Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76de700bde471cfe5f37"),
    fieldsId: "603e6468dc5d115e3c5071bc",
    text: "text文字",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:18Z"),
    updatedAt: ISODate("2021-03-02T17:33:18Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76de700bde471cfe5f39"),
    fieldsId: "603e6468dc5d115e3c5071be",
    text: "```c\n//注释测试\n#include <stdio.h>\n#include <math.h>\n#include <string.h>\n#ifdef _WIN32\n#include <windows.h>\n#include <conio.h>\n#endif\n#include <time.h>\n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include <termios.h>\n#include <unistd.h>\nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'</i>(.*?)</span>', str(bfl), re.S)\nnewdm = re.findall(r'</i>(.*?)</span>', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:18Z"),
    updatedAt: ISODate("2021-03-02T17:33:18Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76df700bde471cfe5f3a"),
    fieldsId: "603e6468dc5d115e3c5071bf",
    text: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:19Z"),
    updatedAt: ISODate("2021-03-02T17:33:19Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76df700bde471cfe5f3b"),
    fieldsId: "603e6468dc5d115e3c5071c0",
    text: "# Docker自用\n\n```shell\nservice docker start || systemctl start docker\t启动docker\nsystemctl enable docker\t将docker设定为开机自启\n退出容器\n\nexit \t\t\t# 直接退出容器并关闭\nCtrl + P + Q\t# 容器不关闭退出\n删除容器\n\ndocker rm -f 容器id\t\t\t\t\t\t# 删除指定容器\ndocker rm -f $(docker ps -aq)\t\t# 删除所有容器\ndocker ps -a -q|xargs docker rm -f\t# 删除所有的容器\n启动和停止容器的操作\n\ndocker start 容器id\t\t\t# 启动容器\ndocker restart 容器id\t\t\t# 重启容器\ndocker stop 容器id\t\t\t# 停止当前正在运行的容器\ndocker kill 容器id\t\t\t# 强制停止当前的容器\n\n进入当前正在运行的容器\n\n# 我们通常容器使用后台方式运行的， 需要进入容器，修改一些配置\n\n# 命令\ndocker exec -it 容器id /bin/bash\n\n# 测试\n[root@iZ2zeg4ytp0whqtmxbsqiiZ /]# docker exec -it df358bc06b17 /bin/bash\n[root@df358bc06b17 /]# ls     \nbin  etc   lib\t  lost+found  mnt  proc  run   srv  tmp  var\ndev  home  lib64  media       opt  root  sbin  sys  usr\n[root@df358bc06b17 /]# ps -ef\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0 Aug11 pts/0    00:00:00 /bin/bash\nroot        29     0  0 01:06 pts/1    00:00:00 /bin/bash\nroot        43    29  0 01:06 pts/1    00:00:00 ps -ef\n\n# 方式二\ndocker attach 容器id\n\n# docker exec\t\t# 进入容器后开启一个新的终端，可以在里面操作\n# docker attach\t\t# 进入容器正在执行的终端，不会启动新的进程\n使用数据卷\n\n直接使用命令来挂载 -v\n\n```shell\ndocker run -it -v 主机目录：容器目录\n\n\nMySQL的数据持久化的问题！\n\n```shell\n# 获取镜像\n[root@iZ2zeg4ytp0whqtmxbsqiiZ home]# docker pull mysql:5.7\n\n# 运行容器， 需要做数据挂载！ # 安装启动mysql，需要配置密码（注意）\n# 官方测试， docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag\n\n# 启动我们的\n-d\t\t# 后台运行\n-p\t\t# 端口隐射\n-v\t\t# 卷挂载\n-e\t\t# 环境配置\n--name\t# 容器的名字\n\n# 匿名挂载\n-v 容器内路径\ndocker run -d -P --name nginx01 -v /etc/nginx nginx\t\t# -P 随机指定端口\n\n\n# 具名挂载\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx\n26da1ec7d4994c76e80134d24d82403a254a4e1d84ec65d5f286000105c3da17\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                   NAMES\n26da1ec7d499        nginx               \"/docker-entrypoint.…\"   3 seconds ago       Up 2 seconds        0.0.0.0:32769->80/tcp   nginx02\n486de1da03cb        nginx               \"/docker-entrypoint.…\"   3 minutes ago       Up 3 minutes        0.0.0.0:32768->80/tcp   nginx01\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume ls\nDRIVER              VOLUME NAME\nlocal               561b81a03506f31d45ada3f9fb7bd8d7c9b5e0f826c877221a17e45d4c80e096\nlocal               36083fb6ca083005094cbd49572a0bffeec6daadfbc5ce772909bb00be760882\nlocal               juming-nginx\n\n# 通过-v 卷名：容器内的路径\n# 查看一下这个卷\n# docker volume inspect juming-nginx\n\n[root@iZ2zeg4ytp0whqtmxbsqiiZ ~]# docker volume inspect juming-nginx\n[\n  {\n      \"CreatedAt\": \"2020-08-12T18:15:21+08:00\",\n      \"Driver\": \"local\",\n      \"Labels\": null,\n      \"Mountpoint\": \"/var/lib/docker/volumes/juming-nginx/_data\",\n      \"Name\": \"juming-nginx\",\n      \"Options\": null,\n      \"Scope\": \"local\"\n  }\n]\n所有docker容器内的卷，没有指定目录的情况下都是在/var/lib/docker/volumes/xxxxx/_data\n\n我们通过具名挂载可以方便的找到我们的一个卷，大多数情况下使用的是具名挂载\n\n# 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！\n-v\t容器内路径\t\t\t\t\t# 匿名挂载\n-v\t卷名:容器内路径\t\t\t   # 具名挂载\n-v /主机路径:容器内路径\t\t\t  # 指定路径挂载\n拓展\n\n# 通过 -v 容器内容路径 ro rw 改变读写权限\nro\treadonly\t# 只读\nrw\treadwrite\t# 可读可写\n\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx\ndocker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx\n\n# ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内容无法操作\n```\n",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:19Z"),
    updatedAt: ISODate("2021-03-02T17:33:19Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("603e76e0700bde471cfe5f3c"),
    fieldsId: "603e751045d89d46e830734a",
    text: "\r\n# 一级标题\r\n## 二级标题\r\n### 三级标题\r\n#### 四级标题\r\n##### 五级标题\r\n###### 六级标题\r\n\r\n\r\n\r\n我展示的是一级标题\r\n=================\r\n\r\n我展示的是二级标题\r\n-----------------\r\n\r\n\r\n\r\n*斜体文本*\r\n_斜体文本_\r\n**粗体文本**\r\n__粗体文本__\r\n***粗斜体文本***\r\n___粗斜体文本___\r\n\r\n\r\n\r\n***\r\n\r\n* * *\r\n\r\n*****\r\n\r\n- - -\r\n\r\n----------\r\n\r\n\r\n\r\nRUNOOB.COM\r\nGOOGLE.COM\r\n~~BAIDU.COM\r\n\r\n\r\n* 第一项\r\n* 第二项\r\n* 第三项\r\n\r\n+ 第一项\r\n+ 第二项\r\n+ 第三项\r\n\r\n\r\n- 第一项\r\n- 第二项\r\n- 第三项\r\n\r\n\r\n\r\n1. 第一项：\r\n    - 第一项嵌套的第一个元素\r\n    - 第一项嵌套的第二个元素\r\n2. 第二项：\r\n    - 第二项嵌套的第一个元素\r\n    - 第二项嵌套的第二个元素\r\n\r\n\r\n\r\n> 区块引用\r\n> 菜鸟教程\r\n> 学的不仅是技术更是梦想\r\n\r\n\r\n\r\n`printf()` 函数\r\n\r\n\r\n```​javascript\r\n​javascript\r\n$(document).ready(function () {\r\n    alert('RUNOOB');\r\n});\r\n​\r\n```\r\n\r\n\r\n这是一个链接 [菜鸟教程](https://www.runoob.com)\r\n\r\n\r\n\r\n<https://www.runoob.com>\r\n\r\n\r\n\r\n![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)\r\n\r\n\r\n\r\n|  表头   | 表头  |\r\n|  ----  | ----  |\r\n| 单元格  | 单元格 |\r\n| 单元格  | 单元格 |\r\n\r\n\r\n\r\n| 左对齐 | 右对齐 | 居中对齐 |\r\n| :-----| ----: | :----: |\r\n| 单元格 | 单元格 | 单元格 |\r\n| 单元格 | 单元格 | 单元格 |\r\n\r\n\r\n\r\n使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑\r\n\r\n\r\n\r\n\\   反斜线\r\n`   反引号\r\n*   星号\r\n_   下划线\r\n{}  花括号\r\n[]  方括号\r\n()  小括号\r\n#   井字号\r\n+   加号\r\n-   减号\r\n.   英文句点\r\n!   感叹号\r\n\r\n\r\n\r\n```c\r\n//注释测试\r\n#include <stdio.h>\r\n#include <math.h>\r\n#include <string.h>\r\n#ifdef _WIN32\r\n#include <windows.h>\r\n#include <conio.h>\r\n#endif\r\n#include <time.h>\r\n\r\nstruct point\r\n{\r\n    double x[3];\r\n};\r\nstruct edge\r\n{\r\n    struct point a, b;\r\n};\r\nstruct plane\r\n{\r\n    // k[0]x+k[1]y+k[2]z=d\r\n    double k[3], d;\r\n};\r\ntypedef struct point point;\r\ntypedef struct edge edge;\r\ntypedef struct plane plane;\r\n\r\n#define PI 3.14159265358\r\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\r\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\r\nint PlaneNumber[6];\r\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\r\ndouble cube2dPoint[8][2];\r\nint cubeDisplayPoint[8][2];\r\npoint camera = {2, 1.5, 2};\r\npoint cameraY = {-2, 2, 2};\r\nconst double cameraR = 3.5;\r\ndouble displayPlaneSize = 4;\r\nconst int displayPixelSize = 30;\r\n// 终端英文字符宽高比例需要1:2\r\nconst int displayPixelWidth = 60;\r\nchar displayBuff[30][60];\r\ndouble angleA = -PI / 4;\r\ndouble angleB = PI / 4;\r\ndouble speed = 0.05;\r\n\r\nvoid draw();\r\n\r\n#ifndef _WIN32\r\n#include <termios.h>\r\n#include <unistd.h>\r\nchar getch()\r\n{\r\n    char buf = 0;\r\n    struct termios old = {0};\r\n    fflush(stdout);\r\n    if (tcgetattr(0, &old) < 0)\r\n        perror(\"tcsetattr()\");\r\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\r\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\r\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\r\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\r\n    if (tcsetattr(0, TCSANOW, &old) < 0)\r\n        perror(\"tcsetattr ICANON\");\r\n    if (read(0, &buf, 1) < 0)\r\n        perror(\"read()\");\r\n    old.c_lflag |= ICANON; // local modes = Canonical mode\r\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\r\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\r\n        perror(\"tcsetattr ~ICANON\");\r\n    return buf;\r\n}\r\n#endif\r\n\r\nplane getDisplayPlane()\r\n{\r\n    double d = 0;\r\n    for (int i = 0; i < 3; i++)\r\n    {\r\n        d += camera.x[i] * camera.x[i];\r\n    }\r\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\r\n}\r\n\r\npoint getDisplayCenter()\r\n{\r\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\r\n}\r\n\r\npoint getVector(point a, point b)\r\n{\r\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\r\n}\r\n\r\ndouble innerProduct(point a, point b)\r\n{\r\n    double res = 0;\r\n    for (int i = 0; i < 3; i++)\r\n    {\r\n        res += a.x[i] * b.x[i];\r\n    }\r\n    return res;\r\n}\r\n\r\npoint crossProduct(point a, point b)\r\n{\r\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\r\n}\r\n\r\ndouble getLength(point a)\r\n{\r\n    double sqr = 0;\r\n    for (int i = 0; i < 3; i++)\r\n    {\r\n        sqr += a.x[i] * a.x[i];\r\n    }\r\n    return sqrt(sqr);\r\n}\r\n\r\npoint getPoint(edge a, plane b)\r\n{\r\n    point res;\r\n    for (int i = 0; i < 3; i++)\r\n    {\r\n        double k = b.k[i];\r\n        double d = b.d;\r\n        for (int j = 0; j < 3; j++)\r\n        {\r\n            if (i != j)\r\n            {\r\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\r\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\r\n            }\r\n        }\r\n        res.x[i] = d / k;\r\n    }\r\n    return res;\r\n}\r\n\r\nvoid initCamera()\r\n{\r\n\r\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\r\n    camera.x[1] = sin(angleA) * cameraR;\r\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\r\n\r\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\r\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\r\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\r\n}\r\n\r\nvoid drawLine(const int a[2], const int b[2])\r\n{\r\n\r\n    if (a[0] == b[0] && a[1] == b[1])\r\n    {\r\n        return;\r\n    }\r\n    int step[2];\r\n    for (int i = 0; i < 2; i++)\r\n    {\r\n        if (a[i] - b[i] > 0)\r\n        {\r\n            step[i] = -1;\r\n        }\r\n        else if (a[i] - b[i] == 0)\r\n        {\r\n            step[i] = 0;\r\n        }\r\n        else\r\n        {\r\n            step[i] = 1;\r\n        }\r\n    }\r\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\r\n    {\r\n        int j = a[1];\r\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\r\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\r\n        {\r\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\r\n            {\r\n                j += step[1];\r\n            }\r\n            if (displayBuff[i][j] == 0)\r\n            {\r\n                displayBuff[i][j] = '*';\r\n            }\r\n        }\r\n    }\r\n    else\r\n    {\r\n        int j = a[0];\r\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\r\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\r\n        {\r\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\r\n            {\r\n                j += step[0];\r\n            }\r\n            if (displayBuff[j][i] == 0)\r\n            {\r\n                displayBuff[j][i] = '*';\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nvoid fswap(double *a, double *b)\r\n{\r\n    double tmp = *a;\r\n    *a = *b;\r\n    *b = tmp;\r\n}\r\n\r\nvoid fill(int r, int c, char ch)\r\n{\r\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\r\n    {\r\n        return;\r\n    }\r\n    if (displayBuff[r][c] != 0)\r\n    {\r\n        return;\r\n    }\r\n    displayBuff[r][c] = ch;\r\n    fill(r + 1, c, ch);\r\n    fill(r - 1, c, ch);\r\n    fill(r, c + 1, ch);\r\n    fill(r, c - 1, ch);\r\n}\r\n\r\nint sqr(int x)\r\n{\r\n    return x * 2;\r\n}\r\n\r\nvoid drawCube()\r\n{\r\n    memset(displayBuff, 0, sizeof(displayBuff));\r\n    double dis[6][2] = {0};\r\n\r\n    for (int i = 0; i < 6; i++)\r\n    {\r\n        dis[i][0] = i;\r\n        for (int j = 0; j < 4; j++)\r\n        {\r\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\r\n        }\r\n        for (int j = i - 1; j >= 0; j--)\r\n        {\r\n            if (dis[j][1] > dis[j + 1][1])\r\n            {\r\n                fswap(&dis[j][1], &dis[j + 1][1]);\r\n                fswap(&dis[j][0], &dis[j + 1][0]);\r\n            }\r\n        }\r\n    }\r\n    for (int i = 0; i < 6; i++)\r\n    {\r\n        int planeId = (int)dis[i][0];\r\n        int hide = 0;\r\n        int xy[4][2];\r\n        for (int j = 0; j < 4; j++)\r\n        {\r\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\r\n        }\r\n        for (int j = 0; j < 4; j++)\r\n        {\r\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\r\n            {\r\n                hide = 1;\r\n            }\r\n        }\r\n        if (hide)\r\n        {\r\n            continue;\r\n        }\r\n\r\n        for (int j = 0; j < 4; j++)\r\n        {\r\n            drawLine(xy[j], xy[(j + 1) % 4]);\r\n        }\r\n        for (int j = 0; j < 4; j++)\r\n        {\r\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\r\n        }\r\n        int center[2];\r\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\r\n        {\r\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\r\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\r\n        }\r\n        else\r\n        {\r\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\r\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\r\n        }\r\n        fill(center[0], center[1], ' ');\r\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\r\n    }\r\n}\r\n\r\nvoid randomCast()\r\n{\r\n    int tableIdx = rand() % 6;\r\n    int offset = rand();\r\n    for (int i = 0; i < 4; i++)\r\n    {\r\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\r\n    }\r\n    for (int i = 4; i < 6; i++)\r\n    {\r\n        PlaneNumber[i] = table[tableIdx][i];\r\n    }\r\n}\r\n\r\nvoid cls()\r\n{\r\n#ifdef _WIN32\r\n    COORD pos = {0, 0};\r\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\r\n    SetConsoleCursorPosition(out, pos);\r\n#endif\r\n#ifndef _WIN32\r\n    printf(\"\\033c\");\r\n#endif\r\n}\r\n\r\nvoid draw()\r\n{\r\n    initCamera();\r\n    for (int i = 0; i < 8; i++)\r\n    {\r\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\r\n        point v = getVector(getDisplayCenter(), p);\r\n        double vlen = getLength(v);\r\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\r\n        double sin = sqrt(fabs(1 - cos * cos));\r\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\r\n        double y = cos * vlen;\r\n        double x = -sin * vlen;\r\n        if (largeThanPi)\r\n        {\r\n            x *= -1;\r\n        }\r\n        cube2dPoint[i][0] = x;\r\n        cube2dPoint[i][1] = y;\r\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\r\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\r\n    }\r\n    drawCube();\r\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\r\n    int idx = 0;\r\n    for (int i = 0; i < displayPixelSize; i++)\r\n    {\r\n        for (int j = 0; j < displayPixelSize * 2; j++)\r\n        {\r\n            if (displayBuff[i][j] == 0)\r\n            {\r\n                displayBuff[i][j] = '.';\r\n            }\r\n            output[idx++] = displayBuff[i][j];\r\n        }\r\n        output[idx++] = '\\n';\r\n    }\r\n    output[idx++] = 0;\r\n    cls();\r\n    printf(\"%s\", output);\r\n}\r\nvoid start()\r\n{\r\n    while (1)\r\n    {\r\n        int key = getch();\r\n        switch (key)\r\n        {\r\n        case 27:\r\n        {\r\n            exit(0);\r\n        }\r\n        case 'w':\r\n        {\r\n            angleA -= speed;\r\n            break;\r\n        }\r\n        case 's':\r\n        {\r\n            angleA += speed;\r\n            break;\r\n        }\r\n        case 'a':\r\n        {\r\n            angleB += speed;\r\n            break;\r\n        }\r\n        case 'd':\r\n        {\r\n            angleB -= speed;\r\n            break;\r\n        }\r\n        case 'r':\r\n            randomCast();\r\n            break;\r\n        };\r\n        draw();\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n#ifdef _WIN32\r\n    system(\"cls\");\r\n#endif\r\n    srand(time(0));\r\n    randomCast();\r\n    draw();\r\n    start();\r\n}\r\n```\r\n\r\n```python\r\nimport requests\r\nfrom bs4 import BeautifulSoup\r\nimport re\r\nvalue = ''\r\nvalue = str(input('输入搜索标题文字:'))\r\nif value == '':\r\n    value = \"御坂美琴\"\r\nprint('''\r\n------------\r\n|  1.综合   |\r\n|  2.播放   |\r\n|  3.最新   |\r\n|  4.弹幕   |\r\n|  5.收藏   |\r\n------------\r\n''')\r\nssfs = 0\r\n\r\nssfs = input('请输入排序方式:')\r\nif ssfs=='':\r\n    ssfs = 2\r\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\r\nif ssfs == 1:\r\n    ssfs = fs[0]\r\nelif ssfs == 2:\r\n    ssfs = fs[1]\r\nelif ssfs == 3:\r\n    ssfs = fs[2]\r\nelif ssfs == 4:\r\n    ssfs = fs[3]\r\nelif ssfs == 5:\r\n    ssfs = fs[4]\r\nhead = {\r\n    'user-agent':\r\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\r\n    Chrome/80.0.3987.88 Safari/537.36'\r\n}\r\nurl = 'https://search.bilibili.com/all?keyword='+ \\\r\n    value +ssfs\r\ndef geturl(url):\r\n    try:\r\n        a = requests.get(url, headers=head)\r\n        if a.status_code == 200:\r\n            return a.text\r\n    except requests.RequestException:\r\n        return None\r\nhtml = geturl(url)\r\nbf = BeautifulSoup(html, 'lxml')\r\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\r\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\r\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\r\nhref = re.findall('href=\"//(.*?)\"', str(titles))\r\nnewt = re.findall('title=\"(.*?)\">', str(titles))\r\nnewb = re.findall(r'</i>(.*?)</span>', str(bfl), re.S)\r\nnewdm = re.findall(r'</i>(.*?)</span>', str(dm), re.S)\r\na = ''\r\nb = ''\r\nlent = len(newt)\r\nfor i in range(lent):\r\n    printf = str(newt[i])\r\n    a = a + printf + '\\n'\r\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\r\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\r\n    print(sc)\r\n    print(\"------------------------------------------------\")\r\n    b += (sc + \"\\n------------------------------------------------\\n\")\r\ny = input('是否保存？(y,n)')\r\nif y == 'y':\r\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\r\n        f.write(b)\r\n        print(\"保存成功！\")\r\n```\r\n",
    isPublish: true,
    allowComment: true,
    createdAt: ISODate("2021-03-02T17:33:20Z"),
    updatedAt: ISODate("2021-03-02T17:33:20Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("6045bf172aa5bd0ca88a3004"),
    text: "# 一级标题123123\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\n##### 五级标题\n\n###### 六级标题\n\n我展示的是一级标题\n==================\n\n我展示的是二级标题\n------------------\n\n*斜体文本*\n_斜体文本_\n**粗体文本**\n__粗体文本__\n***粗斜体文本***\n___粗斜体文本___\n\n---\n\n---\n\n---\n\n---\n\n---\n\nRUNOOB.COM\nGOOGLE.COM\n~~BAIDU.COM\n\n* 第一项\n* 第二项\n* 第三项\n\n+ 第一项\n+ 第二项\n+ 第三项\n\n- 第一项\n- 第二项\n- 第三项\n\n1. 第一项：\n   - 第一项嵌套的第一个元素\n   - 第一项嵌套的第二个元素\n2. 第二项：\n   - 第二项嵌套的第一个元素\n   - 第二项嵌套的第二个元素\n\n> 区块引用\n> 菜鸟教程\n> 学的不仅是技术更是梦想\n\n`printf()` 函数\n\n```javascript\njavascript\n$(document).ready(function () {\n    alert('RUNOOB');\n});\n\n```\n\n这是一个链接 [菜鸟教程](https://www.runoob.com)\n\n[https://www.runoob.com](https://www.runoob.com)\n\n![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)\n\n\n| 表头   | 表头   |\n| -------- | -------- |\n| 单元格 | 单元格 |\n| 单元格 | 单元格 |\n\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :------- | -------: | :--------: |\n| 单元格 | 单元格 |  单元格  |\n| 单元格 | 单元格 |  单元格  |\n\n使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑\n\n\\   反斜线\n`   反引号\n\n* 星号\n  _   下划线\n  {}  花括号\n  []  方括号\n  ()  小括号\n\n# 井字号\n\n+ 加号\n\n- 减号\n  .   英文句点\n  !   感叹号\n\n```c\n//注释测试\n#include <stdio.h>\n#include <math.h>\n#include <string.h>\n#ifdef _WIN32\n#include <windows.h>\n#include <conio.h>\n#endif\n#include <time.h>\n\nstruct point\n{\n    double x[3];\n};\nstruct edge\n{\n    struct point a, b;\n};\nstruct plane\n{\n    // k[0]x+k[1]y+k[2]z=d\n    double k[3], d;\n};\ntypedef struct point point;\ntypedef struct edge edge;\ntypedef struct plane plane;\n\n#define PI 3.14159265358\npoint cubePoint[8] = {{0.5, 0.5, -0.5}, {0.5, 0.5, 0.5}, {-0.5, 0.5, 0.5}, {-0.5, 0.5, -0.5}, {0.5, -0.5, -0.5}, {0.5, -0.5, 0.5}, {-0.5, -0.5, 0.5}, {-0.5, -0.5, -0.5}};\nint cubePlaneGroup[6][4] = {{0, 1, 5, 4}, {1, 2, 6, 5}, {2, 3, 7, 6}, {3, 0, 4, 7}, {0, 1, 2, 3}, {4, 5, 6, 7}};\nint PlaneNumber[6];\nint table[6][6] = {{2, 4, 5, 3, 1, 6}, {1, 3, 6, 4, 2, 5}, {1, 5, 6, 2, 3, 4}, {2, 6, 5, 1, 4, 3}, {4, 6, 3, 1, 5, 2}, {3, 5, 4, 2, 6, 1}};\ndouble cube2dPoint[8][2];\nint cubeDisplayPoint[8][2];\npoint camera = {2, 1.5, 2};\npoint cameraY = {-2, 2, 2};\nconst double cameraR = 3.5;\ndouble displayPlaneSize = 4;\nconst int displayPixelSize = 30;\n// 终端英文字符宽高比例需要1:2\nconst int displayPixelWidth = 60;\nchar displayBuff[30][60];\ndouble angleA = -PI / 4;\ndouble angleB = PI / 4;\ndouble speed = 0.05;\n\nvoid draw();\n\n#ifndef _WIN32\n#include <termios.h>\n#include <unistd.h>\nchar getch()\n{\n    char buf = 0;\n    struct termios old = {0};\n    fflush(stdout);\n    if (tcgetattr(0, &old) < 0)\n        perror(\"tcsetattr()\");\n    old.c_lflag &= ~ICANON; // local modes = Non Canonical mode\n    old.c_lflag &= ~ECHO;   // local modes = Disable echo.\n    old.c_cc[VMIN] = 1;     // control chars (MIN value) = 1\n    old.c_cc[VTIME] = 0;    // control chars (TIME value) = 0 (No time)\n    if (tcsetattr(0, TCSANOW, &old) < 0)\n        perror(\"tcsetattr ICANON\");\n    if (read(0, &buf, 1) < 0)\n        perror(\"read()\");\n    old.c_lflag |= ICANON; // local modes = Canonical mode\n    old.c_lflag |= ECHO;   // local modes = Enable echo.\n    if (tcsetattr(0, TCSADRAIN, &old) < 0)\n        perror(\"tcsetattr ~ICANON\");\n    return buf;\n}\n#endif\n\nplane getDisplayPlane()\n{\n    double d = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        d += camera.x[i] * camera.x[i];\n    }\n    return (plane){{camera.x[0], camera.x[1], camera.x[2]}, -d};\n}\n\npoint getDisplayCenter()\n{\n    return (point){-camera.x[0], -camera.x[1], -camera.x[2]};\n}\n\npoint getVector(point a, point b)\n{\n    return (point){b.x[0] - a.x[0], b.x[1] - a.x[1], b.x[2] - a.x[2]};\n}\n\ndouble innerProduct(point a, point b)\n{\n    double res = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        res += a.x[i] * b.x[i];\n    }\n    return res;\n}\n\npoint crossProduct(point a, point b)\n{\n    return (point){a.x[1] * b.x[2] - a.x[2] * b.x[1], a.x[2] * b.x[0] - a.x[0] * b.x[2], a.x[0] * b.x[1] - a.x[1] * b.x[0]};\n}\n\ndouble getLength(point a)\n{\n    double sqr = 0;\n    for (int i = 0; i < 3; i++)\n    {\n        sqr += a.x[i] * a.x[i];\n    }\n    return sqrt(sqr);\n}\n\npoint getPoint(edge a, plane b)\n{\n    point res;\n    for (int i = 0; i < 3; i++)\n    {\n        double k = b.k[i];\n        double d = b.d;\n        for (int j = 0; j < 3; j++)\n        {\n            if (i != j)\n            {\n                k += b.k[j] * (a.a.x[j] - a.b.x[j]) / (a.a.x[i] - a.b.x[i]);\n                d -= b.k[j] * (a.b.x[j] * a.a.x[i] - a.a.x[j] * a.b.x[i]) / (a.a.x[i] - a.b.x[i]);\n            }\n        }\n        res.x[i] = d / k;\n    }\n    return res;\n}\n\nvoid initCamera()\n{\n\n    camera.x[0] = cos(angleA) * cos(angleB) * cameraR;\n    camera.x[1] = sin(angleA) * cameraR;\n    camera.x[2] = cos(angleA) * sin(angleB) * cameraR;\n\n    cameraY.x[0] = cos(angleA + PI / 2) * cos(angleB) * cameraR;\n    cameraY.x[1] = sin(angleA + PI / 2) * cameraR;\n    cameraY.x[2] = cos(angleA + PI / 2) * sin(angleB) * cameraR;\n}\n\nvoid drawLine(const int a[2], const int b[2])\n{\n\n    if (a[0] == b[0] && a[1] == b[1])\n    {\n        return;\n    }\n    int step[2];\n    for (int i = 0; i < 2; i++)\n    {\n        if (a[i] - b[i] > 0)\n        {\n            step[i] = -1;\n        }\n        else if (a[i] - b[i] == 0)\n        {\n            step[i] = 0;\n        }\n        else\n        {\n            step[i] = 1;\n        }\n    }\n    if (abs(a[0] - b[0]) > abs(a[1] - b[1]))\n    {\n        int j = a[1];\n        double k = (a[1] - b[1]) * 1.0 / (a[0] - b[0]);\n        for (int i = a[0] + step[0]; (b[0] - i) / step[0] > 0; i += step[0])\n        {\n            if (fabs(1.0 * (j + step[1] - a[1]) / (i - a[0]) - k) < fabs(1.0 * (j - a[1]) / (i - a[0]) - k))\n            {\n                j += step[1];\n            }\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '*';\n            }\n        }\n    }\n    else\n    {\n        int j = a[0];\n        double k = (a[0] - b[0]) * 1.0 / (a[1] - b[1]);\n        for (int i = a[1] + step[1]; (b[1] - i) / step[1] > 0; i += step[1])\n        {\n            if (fabs(1.0 * (j + step[0] - a[0]) / (i - a[1]) - k) < fabs(1.0 * (j - a[0]) / (i - a[1]) - k))\n            {\n                j += step[0];\n            }\n            if (displayBuff[j][i] == 0)\n            {\n                displayBuff[j][i] = '*';\n            }\n        }\n    }\n}\n\nvoid fswap(double *a, double *b)\n{\n    double tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nvoid fill(int r, int c, char ch)\n{\n    if (r < 1 || c < 1 || r >= displayPixelSize || c >= displayPixelWidth)\n    {\n        return;\n    }\n    if (displayBuff[r][c] != 0)\n    {\n        return;\n    }\n    displayBuff[r][c] = ch;\n    fill(r + 1, c, ch);\n    fill(r - 1, c, ch);\n    fill(r, c + 1, ch);\n    fill(r, c - 1, ch);\n}\n\nint sqr(int x)\n{\n    return x * 2;\n}\n\nvoid drawCube()\n{\n    memset(displayBuff, 0, sizeof(displayBuff));\n    double dis[6][2] = {0};\n\n    for (int i = 0; i < 6; i++)\n    {\n        dis[i][0] = i;\n        for (int j = 0; j < 4; j++)\n        {\n            dis[i][1] += getLength(getVector(camera, cubePoint[cubePlaneGroup[i][j]]));\n        }\n        for (int j = i - 1; j >= 0; j--)\n        {\n            if (dis[j][1] > dis[j + 1][1])\n            {\n                fswap(&dis[j][1], &dis[j + 1][1]);\n                fswap(&dis[j][0], &dis[j + 1][0]);\n            }\n        }\n    }\n    for (int i = 0; i < 6; i++)\n    {\n        int planeId = (int)dis[i][0];\n        int hide = 0;\n        int xy[4][2];\n        for (int j = 0; j < 4; j++)\n        {\n            memcpy(xy[j], cubeDisplayPoint[cubePlaneGroup[planeId][j]], sizeof(xy[j]));\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            if (displayBuff[xy[j][0]][xy[j][1]] != 0 && displayBuff[xy[j][0]][xy[j][1]] != '+')\n            {\n                hide = 1;\n            }\n        }\n        if (hide)\n        {\n            continue;\n        }\n\n        for (int j = 0; j < 4; j++)\n        {\n            drawLine(xy[j], xy[(j + 1) % 4]);\n        }\n        for (int j = 0; j < 4; j++)\n        {\n            displayBuff[xy[j][0]][xy[j][1]] = '+';\n        }\n        int center[2];\n        if (sqr(xy[0][0] - xy[2][0]) + sqr(xy[0][1] - xy[2][1]) > sqr(xy[1][0] - xy[3][0]) + sqr(xy[1][1] - xy[3][1]))\n        {\n            center[0] = (xy[0][0] + xy[2][0]) / 2.0 + 0.5;\n            center[1] = (xy[0][1] + xy[2][1]) / 2.0 + 0.5;\n        }\n        else\n        {\n            center[0] = (xy[1][0] + xy[3][0]) / 2.0 + 0.5;\n            center[1] = (xy[1][1] + xy[3][1]) / 2.0 + 0.5;\n        }\n        fill(center[0], center[1], ' ');\n        displayBuff[center[0]][center[1]] = '0' + PlaneNumber[planeId];\n    }\n}\n\nvoid randomCast()\n{\n    int tableIdx = rand() % 6;\n    int offset = rand();\n    for (int i = 0; i < 4; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][(i + offset) % 4];\n    }\n    for (int i = 4; i < 6; i++)\n    {\n        PlaneNumber[i] = table[tableIdx][i];\n    }\n}\n\nvoid cls()\n{\n#ifdef _WIN32\n    COORD pos = {0, 0};\n    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);\n    SetConsoleCursorPosition(out, pos);\n#endif\n#ifndef _WIN32\n    printf(\"\\033c\");\n#endif\n}\n\nvoid draw()\n{\n    initCamera();\n    for (int i = 0; i < 8; i++)\n    {\n        point p = getPoint((edge){camera, cubePoint[i]}, getDisplayPlane());\n        point v = getVector(getDisplayCenter(), p);\n        double vlen = getLength(v);\n        double cos = innerProduct(v, cameraY) / getLength(cameraY) / vlen;\n        double sin = sqrt(fabs(1 - cos * cos));\n        int largeThanPi = innerProduct(crossProduct(cameraY, v), camera) < 0;\n        double y = cos * vlen;\n        double x = -sin * vlen;\n        if (largeThanPi)\n        {\n            x *= -1;\n        }\n        cube2dPoint[i][0] = x;\n        cube2dPoint[i][1] = y;\n        cubeDisplayPoint[i][1] = ((x + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize * 2 + 0.5);\n        cubeDisplayPoint[i][0] = ((y + displayPlaneSize / 2) / displayPlaneSize * displayPixelSize + 0.5);\n    }\n    drawCube();\n    char output[displayPixelSize * displayPixelSize * 2 + displayPixelSize + 1];\n    int idx = 0;\n    for (int i = 0; i < displayPixelSize; i++)\n    {\n        for (int j = 0; j < displayPixelSize * 2; j++)\n        {\n            if (displayBuff[i][j] == 0)\n            {\n                displayBuff[i][j] = '.';\n            }\n            output[idx++] = displayBuff[i][j];\n        }\n        output[idx++] = '\\n';\n    }\n    output[idx++] = 0;\n    cls();\n    printf(\"%s\", output);\n}\nvoid start()\n{\n    while (1)\n    {\n        int key = getch();\n        switch (key)\n        {\n        case 27:\n        {\n            exit(0);\n        }\n        case 'w':\n        {\n            angleA -= speed;\n            break;\n        }\n        case 's':\n        {\n            angleA += speed;\n            break;\n        }\n        case 'a':\n        {\n            angleB += speed;\n            break;\n        }\n        case 'd':\n        {\n            angleB -= speed;\n            break;\n        }\n        case 'r':\n            randomCast();\n            break;\n        };\n        draw();\n    }\n}\n\nint main()\n{\n#ifdef _WIN32\n    system(\"cls\");\n#endif\n    srand(time(0));\n    randomCast();\n    draw();\n    start();\n}\n```\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport re\nvalue = ''\nvalue = str(input('输入搜索标题文字:'))\nif value == '':\n    value = \"御坂美琴\"\nprint('''\n------------\n|  1.综合   |\n|  2.播放   |\n|  3.最新   |\n|  4.弹幕   |\n|  5.收藏   |\n------------\n''')\nssfs = 0\n\nssfs = input('请输入排序方式:')\nif ssfs=='':\n    ssfs = 2\nfs = [\"\", \"&order=click\", \"&order=pubdate\", \"&order=dm\", \"&order=stow\"]\nif ssfs == 1:\n    ssfs = fs[0]\nelif ssfs == 2:\n    ssfs = fs[1]\nelif ssfs == 3:\n    ssfs = fs[2]\nelif ssfs == 4:\n    ssfs = fs[3]\nelif ssfs == 5:\n    ssfs = fs[4]\nhead = {\n    'user-agent':\n    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \\\n    Chrome/80.0.3987.88 Safari/537.36'\n}\nurl = 'https://search.bilibili.com/all?keyword='+ \\\n    value +ssfs\ndef geturl(url):\n    try:\n        a = requests.get(url, headers=head)\n        if a.status_code == 200:\n            return a.text\n    except requests.RequestException:\n        return None\nhtml = geturl(url)\nbf = BeautifulSoup(html, 'lxml')\ntitles = bf.find_all(\"div\", class_=\"headline clearfix\")\nbfl = bf.find_all(\"span\", class_=\"so-icon watch-num\")\ndm = bf.find_all(\"span\", class_=\"so-icon hide\")\nhref = re.findall('href=\"//(.*?)\"', str(titles))\nnewt = re.findall('title=\"(.*?)\">', str(titles))\nnewb = re.findall(r'</i>(.*?)</span>', str(bfl), re.S)\nnewdm = re.findall(r'</i>(.*?)</span>', str(dm), re.S)\na = ''\nb = ''\nlent = len(newt)\nfor i in range(lent):\n    printf = str(newt[i])\n    a = a + printf + '\\n'\n    sc = str(i + 1) + printf + \"\\n        播放量\" + str(\n        newb[i]) + \"  弹幕\" + '\\t' + str(newdm[i]) + \"\\n链接\" + str(href[i])\n    print(sc)\n    print(\"------------------------------------------------\")\n    b += (sc + \"\\n------------------------------------------------\\n\")\ny = input('是否保存？(y,n)')\nif y == 'y':\n    with open(value + str(ssfs) + '.txt', 'w+') as f:\n        f.write(b)\n        print(\"保存成功！\")\n```\n",
    createdAt: ISODate("2021-03-08T06:07:19Z"),
    updatedAt: ISODate("2021-03-08T09:14:54Z"),
    __v: NumberInt("0"),
    fieldsId: "6045bf172aa5bd0ca88a3005"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("6045bfb02aa5bd0ca88a3007"),
    text: "hello,Vditor+Vue!test1\n",
    createdAt: ISODate("2021-03-08T06:09:52Z"),
    updatedAt: ISODate("2021-03-08T06:09:52Z"),
    __v: NumberInt("0"),
    fieldsId: "6045bfb02aa5bd0ca88a3008"
} ]);
db.getCollection("contents").insert([ {
    _id: ObjectId("6045c0232aa5bd0ca88a3009"),
    text: "hello,Vditor+Vue!\n\n草稿测试草稿测试草稿测试\n",
    createdAt: ISODate("2021-03-08T06:11:47Z"),
    updatedAt: ISODate("2021-03-08T06:11:47Z"),
    __v: NumberInt("0"),
    fieldsId: "6045c0232aa5bd0ca88a300a"
} ]);

// ----------------------------
// Collection structure for fields
// ----------------------------
db.getCollection("fields").drop();
db.createCollection("fields");

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
    createdAt: ISODate("2021-02-22T11:25:06Z"),
    updatedAt: ISODate("2021-02-22T11:25:06Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-26T18:09:12Z"),
    updatedAt: ISODate("2021-02-26T18:09:12Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-26T18:09:21Z"),
    updatedAt: ISODate("2021-02-26T18:09:21Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:29:25Z"),
    updatedAt: ISODate("2021-02-27T05:29:25Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:29:28Z"),
    updatedAt: ISODate("2021-02-27T05:29:28Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6460dc5d115e3c5071a8"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d1700bde471cfe5f23"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-27T05:29:48Z"),
    updatedAt: ISODate("2021-02-27T05:29:48Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:29:48Z"),
    updatedAt: ISODate("2021-02-27T05:29:48Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:30:00Z"),
    updatedAt: ISODate("2021-02-27T05:30:00Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:30:00Z"),
    updatedAt: ISODate("2021-02-27T05:30:00Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:30:08Z"),
    updatedAt: ISODate("2021-02-27T05:30:08Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-27T05:30:09Z"),
    updatedAt: ISODate("2021-02-27T05:30:09Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T12:33:25Z"),
    updatedAt: ISODate("2021-02-28T12:33:25Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T12:35:24Z"),
    updatedAt: ISODate("2021-02-28T12:35:24Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T12:35:25Z"),
    updatedAt: ISODate("2021-02-28T12:35:25Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T12:35:25Z"),
    updatedAt: ISODate("2021-02-28T12:35:25Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T12:35:25Z"),
    updatedAt: ISODate("2021-02-28T12:35:25Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b3"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d6700bde471cfe5f2e"),
    title: "标题",
    cover: "https://api.mtyqx.cn/tapi/random.php",
    coverSmall: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:29Z"),
    updatedAt: ISODate("2021-02-28T18:11:29Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T18:11:29Z"),
    updatedAt: ISODate("2021-02-28T18:11:29Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T18:11:30Z"),
    updatedAt: ISODate("2021-02-28T18:11:30Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b6"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d7700bde471cfe5f31"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:30Z"),
    updatedAt: ISODate("2021-02-28T18:11:30Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b7"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f32"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "https://api.mtyqx.cn/tapi/random.php",
    classification: ObjectId("603928522684e22ec8291c65"),
    createdAt: ISODate("2021-02-28T18:11:31Z"),
    updatedAt: ISODate("2021-02-28T18:11:31Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b8"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f33"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137joftj30pc0oe75u.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:31Z"),
    updatedAt: ISODate("2021-02-28T18:11:31Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071b9"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d8700bde471cfe5f34"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32Z"),
    updatedAt: ISODate("2021-02-28T18:11:32Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6467dc5d115e3c5071ba"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76d9700bde471cfe5f35"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/907e892031300f2d9ffc560e3362e0f8.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32Z"),
    updatedAt: ISODate("2021-02-28T18:11:32Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bb"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76dd700bde471cfe5f36"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1gnuiuahnd5j30nk0xce04.jpg",
    coverSmall: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2917876506,2101419022&fm=26&gp=0.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:32Z"),
    updatedAt: ISODate("2021-02-28T18:11:32Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bc"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76de700bde471cfe5f37"),
    title: "标题",
    cover: "http://fp1.fghrsh.net/2021/02/11/9b86f781ed016c5f66bf0334bf6eeb57.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mp06j30nc0ntq6g.jpg",
    classification: ObjectId("6039284a2684e22ec8291c64"),
    createdAt: ISODate("2021-02-28T18:11:33Z"),
    updatedAt: ISODate("2021-02-28T18:11:33Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071be"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76de700bde471cfe5f39"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mdujj30k70k70x2.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mdujj30k70k70x2.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:34Z"),
    updatedAt: ISODate("2021-02-28T18:11:34Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("603e6468dc5d115e3c5071bf"),
    tag: [
        ObjectId("603befa8b139000093003433"),
        ObjectId("603bec07b139000093003432")
    ],
    contentsId: ObjectId("603e76df700bde471cfe5f3a"),
    title: "标题",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137lfsdj30rx0rw0up.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137lfsdj30rx0rw0up.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:35Z"),
    updatedAt: ISODate("2021-02-28T18:11:35Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    createdAt: ISODate("2021-02-28T18:11:35Z"),
    updatedAt: ISODate("2021-02-28T18:11:35Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
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
    title: "标题1",
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    classification: ObjectId("603928552684e22ec8291c66"),
    createdAt: ISODate("2021-02-28T18:11:35Z"),
    updatedAt: ISODate("2021-02-28T18:11:35Z"),
    __v: NumberInt("0"),
    commentsNum: 123,
    isDraft: false
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("6045bf172aa5bd0ca88a3005"),
    tag: [
        ObjectId("60394d910c96f20a64a4c937"),
        ObjectId("60394d910c96f20a64a4c936"),
        ObjectId("603bec07b139000093003432")
    ],
    title: "test2021年3月8日17:14:51",
    contentsId: ObjectId("6045bf172aa5bd0ca88a3004"),
    classification: ObjectId("603928552684e22ec8291c66"),
    cover: "http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    coverSmall: "http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    commentsNum: NumberInt("0"),
    createdAt: ISODate("2021-03-08T06:07:19Z"),
    updatedAt: ISODate("2021-03-08T09:14:54Z"),
    __v: NumberInt("0"),
    isDraft: true
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("6045bfb02aa5bd0ca88a3008"),
    tag: [
        ObjectId("603bec07b139000093003432")
    ],
    title: "草稿测试",
    contentsId: ObjectId("6045bfb02aa5bd0ca88a3007"),
    classification: ObjectId("603928572684e22ec8291c67"),
    cover: " http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    coverSmall: " http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    commentsNum: NumberInt("0"),
    createdAt: ISODate("2021-03-08T06:09:52Z"),
    updatedAt: ISODate("2021-03-08T06:09:52Z"),
    __v: NumberInt("0"),
    isDraft: true
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("6045c0232aa5bd0ca88a300a"),
    tag: [
        ObjectId("603bec07b139000093003432")
    ],
    title: "草稿测试",
    contentsId: ObjectId("6045c0232aa5bd0ca88a3009"),
    classification: ObjectId("603928572684e22ec8291c67"),
    cover: " http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    coverSmall: " http://tva1.sinaimg.cn/large/005NWBIgly1go817vkbb4j30vl0jencd.jpg",
    commentsNum: NumberInt("0"),
    isDraft: true,
    createdAt: ISODate("2021-03-08T06:11:47Z"),
    updatedAt: ISODate("2021-03-08T06:11:47Z"),
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
    linksUrl: "dwsy.link:88",
    linksName: "Dwsy",
    linksAvatar: "http://tva1.sinaimg.cn/large/005NWBIgly1go8137mc2jj30vp0wzjyr.jpg",
    linksDescription: "one~~~",
    rank: NumberInt("0"),
    createdAt: ISODate("2021-03-07T08:35:38Z"),
    updatedAt: ISODate("2021-03-07T08:35:38Z"),
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
    createdAt: ISODate("2021-03-07T08:35:50Z"),
    updatedAt: ISODate("2021-03-07T08:35:50Z"),
    __v: NumberInt("0"),
    linksEmail: "1@1.1"
} ]);
db.getCollection("links").insert([ {
    _id: ObjectId("6044906cc04c915b00956ad8"),
    linksUrl: "dwsy.link:88",
    linksName: "2",
    linksAvatar: "https://q.qlogo.cn/g?b=qq&nk=123456&s=100",
    linksDescription: "one~~~",
    rank: NumberInt("2"),
    createdAt: ISODate("2021-03-07T08:35:56Z"),
    updatedAt: ISODate("2021-03-07T08:35:56Z"),
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
    createdAt: ISODate("2021-03-07T08:36:02Z"),
    updatedAt: ISODate("2021-03-07T08:36:02Z"),
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
    createdAt: ISODate("2021-03-07T08:36:22Z"),
    updatedAt: ISODate("2021-03-07T08:36:22Z"),
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
    createdAt: ISODate("2021-03-07T08:36:54Z"),
    updatedAt: ISODate("2021-03-07T08:36:54Z"),
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
    pptImage: "http://fp1.fghrsh.net/2020/11/10/88922accb4acea6af31b9fc6d459e219.jpg",
    pptLink: "article/603e76e0700bde471cfe5f3c",
    pptTitle: "md语法测试",
    createdAt: ISODate("2021-03-01T04:48:02Z"),
    updatedAt: ISODate("2021-03-01T04:48:02Z"),
    __v: NumberInt("0"),
    rank: 2,
    pptSubTitle: "副标题2"
} ]);
db.getCollection("pptoptions").insert([ {
    _id: ObjectId("603c722656a59f613c3750c8"),
    pptImage: "http://img.meishanren.com/forum/201912/31/142249za448h8mhap8oeep.jpg",
    pptLink: "tag",
    pptTitle: "后台修改测试",
    createdAt: ISODate("2021-03-01T04:48:38Z"),
    updatedAt: ISODate("2021-03-08T18:43:45Z"),
    __v: NumberInt("0"),
    rank: NumberInt("3"),
    pptSubTitle: "副标题3"
} ]);
db.getCollection("pptoptions").insert([ {
    _id: ObjectId("603c746afbcedb59005213cf"),
    pptImage: "http://fp1.fghrsh.net/2020/11/10/1a0144878d0702b4624abac576177812.png",
    pptLink: "article/603e76e0700bde471cfe5f3c",
    pptTitle: "置顶测试",
    rank: NumberInt("1"),
    createdAt: ISODate("2021-03-01T04:58:18Z"),
    updatedAt: ISODate("2021-03-01T04:58:18Z"),
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
    contentsNum: NumberInt("22"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:38Z"),
    updatedAt: ISODate("2021-02-26T19:35:38Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8e0c96f20a64a4c931"),
    name: "java",
    colours: "secondary",
    description: "java",
    contentsNum: NumberInt("6"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:42Z"),
    updatedAt: ISODate("2021-03-08T20:24:52Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-java"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8e0c96f20a64a4c932"),
    name: "css",
    colours: "red",
    description: "mdi-language-c",
    contentsNum: NumberInt("0"),
    order: NumberInt("0"),
    createdAt: ISODate("1970-01-01T00:00:00Z"),
    updatedAt: ISODate("2021-03-08T20:25:37Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-css3"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c933"),
    name: "c",
    colours: "error",
    description: "c",
    contentsNum: NumberInt("7"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43Z"),
    updatedAt: ISODate("2021-02-26T19:35:43Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c934"),
    name: "c#",
    colours: "info",
    description: "c#",
    contentsNum: NumberInt("11"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43Z"),
    updatedAt: ISODate("2021-02-26T19:35:43Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d8f0c96f20a64a4c935"),
    name: "c++",
    colours: "primary",
    description: "c++",
    contentsNum: NumberInt("43"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:43Z"),
    updatedAt: ISODate("2021-02-26T19:35:43Z"),
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
    createdAt: ISODate("2021-02-26T19:35:45Z"),
    updatedAt: ISODate("2021-03-08T20:23:43Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-javascript"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("60394d910c96f20a64a4c937"),
    name: "go",
    colours: "primary",
    description: "go",
    contentsNum: NumberInt("23"),
    order: NumberInt("1"),
    createdAt: ISODate("2021-02-26T19:35:45Z"),
    updatedAt: ISODate("2021-03-08T20:23:30Z"),
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
    createdAt: ISODate("2021-02-26T19:35:46Z"),
    updatedAt: ISODate("2021-03-08T20:23:22Z"),
    __v: NumberInt("0"),
    icon: "mdi-language-php"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603bec07b139000093003432"),
    name: "测试",
    description: "测试",
    contentsNum: 11,
    order: 1,
    colours: "accent",
    createdAt: "2021-02-28 19:35:46.277",
    updatedAt: "2021-02-28 19:35:46.277",
    icon: "mdi-language-c"
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("603befa8b139000093003433"),
    name: "后台测试",
    colours: "warning",
    description: "tt",
    contentsNum: NumberInt("123"),
    order: NumberInt("1"),
    createdAt: "2021-02-28 19:35:46.277",
    updatedAt: ISODate("2021-03-08T18:04:38Z"),
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
    createdAt: ISODate("2021-03-01T05:20:07Z"),
    updatedAt: ISODate("2021-03-01T05:20:07Z"),
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
    createdAt: ISODate("2021-03-01T05:20:25Z"),
    updatedAt: ISODate("2021-03-01T05:20:25Z"),
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
    createdAt: ISODate("2021-03-01T05:22:47Z"),
    updatedAt: ISODate("2021-03-01T05:22:47Z"),
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
    createdAt: ISODate("2021-03-01T05:23:10Z"),
    updatedAt: ISODate("2021-03-01T05:23:10Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tags").insert([ {
    _id: ObjectId("6046665fd575b0091858a012"),
    name: "后台测试",
    colours: "red",
    icon: "后台测试",
    contentsNum: NumberInt("0"),
    createdAt: ISODate("2021-03-08T18:01:03Z"),
    updatedAt: ISODate("2021-03-08T18:01:03Z"),
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
    createdAt: ISODate("2021-03-07T09:24:25Z"),
    updatedAt: ISODate("2021-03-07T09:24:25Z"),
    __v: NumberInt("0"),
    accent: "#9c36b5",
    error: "#FF5252",
    info: "#2196F3",
    primary: "#21CFF3",
    secondary: "#FF4081",
    success: "#4CAF50",
    warning: "#a325da"
} ]);
db.getCollection("themes").insert([ {
    _id: ObjectId("60449c1dde18f269005ff10a"),
    themeName: "light",
    navigationImage: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
    topImage: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
    color: "{primary: '#1976D2',accent: '#e91e63',secondary: '#30b1dc',success: '#4CAF50',info: '#2196F3',warning: '#FB8C00',error: '#FF5252'}",
    createdAt: ISODate("2021-03-07T09:25:49Z"),
    updatedAt: ISODate("2021-03-08T19:02:48Z"),
    __v: NumberInt("0"),
    accent: "#30b1dc",
    error: "#FB8C00",
    info: "#2196F3",
    primary: "#1976D2",
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
    secondary: "#722ed1",
    accent: "",
    error: "",
    info: "#722ed1",
    success: "",
    warning: "",
    createdAt: ISODate("2021-03-08T19:03:06Z"),
    updatedAt: ISODate("2021-03-08T19:03:28Z"),
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
    createdAt: ISODate("2021-02-22T11:29:23Z"),
    updatedAt: ISODate("2021-02-22T11:29:23Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60338ca3f49b9c5d04a419f0"),
    userName: "dwsy",
    password: "dwsy",
    screenName: "雲靝",
    group: "subscriber",
    createdAt: ISODate("2021-02-22T10:51:15Z"),
    updatedAt: ISODate("2021-02-22T10:51:15Z"),
    __v: NumberInt("0")
} ]);
