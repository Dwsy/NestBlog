"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_controller_1 = require("./crud.controller");
const mongoose = require("mongoose");
const DB = process.env.DB || "mongodb://localhost/nestjs-mongoose-crud-test";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const UserModel = mongoose.model("User", new mongoose.Schema({
    username: String,
    age: Number
}, {
    timestamps: true
}));
describe("CrudController", () => {
    let crudController;
    beforeAll(async () => {
        await UserModel.deleteMany({}).exec();
        crudController = new crud_controller_1.CrudController(UserModel);
    });
    afterAll(() => {
        mongoose.disconnect();
    });
    describe("create", () => {
        it("should return created user", async () => {
            const dto = {
                username: "user1",
                age: 18
            };
            expect(await crudController.create(dto)).toHaveProperty("_id");
        });
        it("should return paginated users", async () => {
            expect(await crudController.find()).toMatchObject({
                total: 1
            });
        });
        // end of it()
    });
});
