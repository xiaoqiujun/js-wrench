import { isArray } from "../modules/index";
describe("判断是否数组", function () {
    it("用例1:isArray([])", function () {
        expect(isArray([])).toBe(true);
    });
    it("用例2:isArray({})", function () {
        expect(isArray({})).toBe(false);
    });
});
