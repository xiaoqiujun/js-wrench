import { isArray } from "../modules/index";
describe("判断是否数组", () => {
    it("example_1:isArray([])", () => {
        expect(isArray([])).toBe(true);
    });
    it("example_2:isArray({})", () => {
        expect(isArray({})).toBe(false);
    });
});
