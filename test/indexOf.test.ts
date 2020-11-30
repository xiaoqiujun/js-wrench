import {
    indexOf
} from "../modules/index";
describe("indexOf搜索", () => {
    it("用例1:indexOf([], 1)", () => {
        expect(indexOf([], 1)).toBe(-1);
    });
    it("用例2:indexOf([2], 2)", () => {
        expect(indexOf([2], 2)).toBe(0);
    });
    it("用例3:indexOf('abcw', 'd')", () => {
        expect(indexOf('abcw', 'd')).toBe(-1);
    });
    it("用例4:indexOf('abcw', 'c')", () => {
        expect(indexOf('abcw', 'c')).toBe(2);
    });
});