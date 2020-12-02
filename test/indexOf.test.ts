import {
    indexOf
} from "../modules/index";
describe("indexOf搜索", () => {
    it("example_1:indexOf([], 1)", () => {
        expect(indexOf([], 1)).toBe(-1);
    });
    it("example_2:indexOf([2], 2)", () => {
        expect(indexOf([2], 2)).toBe(0);
    });
    it("example_3:indexOf('abcw', 'd')", () => {
        expect(indexOf('abcw', 'd')).toBe(-1);
    });
    it("example_4:indexOf('abcw', 'c')", () => {
        expect(indexOf('abcw', 'c')).toBe(2);
    });
    it("example_5:indexOf([{a:1}, {a:1,b:2}], {a:1})", () => {
        expect(indexOf([{a:1}, {a:1,b:2}], {a:1, c:2})).toBe(-1);
    });
    it("example_6:indexOf([{a:1}, {a:1,b:2}], 1)", () => {
        expect(indexOf([{a:1}, {a:1,b:2}], 1)).toBe(-1);
    });
    it("example_6:indexOf([{a:1}, {a:1,b:2}, {c:1}], {c:1})", () => {
        expect(indexOf([{a:1}, {a:1,b:2}, {c:1}], {c:1})).toBe(2);
    });
    it("example_7:indexOf([{a:1}, {a:1,b:2}, {c:1}], 1)", () => {
        expect(indexOf([{a:1}, {a:1,b:2}, {c:1}], 1)).toBe(-1);
    });
    it("example_8:indexOf([{a:1}, {a:1,b:2}, {c:1}], {c:1,b:2})", () => {
        expect(indexOf([{a:1}, {a:1,b:2}, {c:1}], {c:1,b:2}, 3)).toBe(-1);
    });
    it("example_9:indexOf([{a:1}, {a:1,b:2}, {c:1}], [1])", () => {
        expect(indexOf([{a:1}, {a:1,b:2}, {c:1}], [1])).toBe(-1);
    });
});