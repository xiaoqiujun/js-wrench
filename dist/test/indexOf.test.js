import { indexOf } from "../modules/index";
describe("indexOf搜索", () => {
    it("用例1:indexOf([], 1)", () => {
        expect(indexOf([2], 1)).toBe(-1);
    });
    it("用例2:indexOf({}, 1)", () => {
        console.log(indexOf([2], 2));
        expect(indexOf([2], 2)).toBe(-1);
    });
});
