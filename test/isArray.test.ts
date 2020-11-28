import {
    isArray
} from "../modules/index";
describe("判断是否数组", () => {
    it("用例1:isArray([])", () => {
        expect(isArray([])).toBe(true);
    });
    it("用例2:isArray({})", () => {
        expect(isArray({})).toBe(false);
    });
});