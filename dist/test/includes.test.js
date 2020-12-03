import { includes } from "../modules/index";
describe("includes搜索", () => {
    it("example_1:includes([], 1)", () => {
        expect(includes([], 1)).toBe(false);
    });
    it("example_2:includes([2], 2)", () => {
        expect(includes([2], 2)).toBe(true);
    });
    it("example_3:includes('abcw', 'd')", () => {
        expect(includes('abcw', 'd')).toBe(false);
    });
    it("example_4:includes('abcw', 'c')", () => {
        expect(includes('abcw', 'c')).toBe(true);
    });
    it("example_5:includes([{a:1}, {a:1,b:2}], {a:1})", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }], { a: 1, c: 2 })).toBe(false);
    });
    it("example_6:includes([{a:1}, {a:1,b:2}], 1)", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }], 1)).toBe(false);
    });
    it("example_6:includes([{a:1}, {a:1,b:2}, {c:1}], {c:1})", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }, { c: 1 }], { c: 1 })).toBe(true);
    });
    it("example_7:includes([{a:1}, {a:1,b:2}, {c:1}], 1)", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }, { c: 1 }], 1)).toBe(false);
    });
    it("example_8:includes([{a:1}, {a:1,b:2}, {c:1}], {c:1,b:2})", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }, { c: 1 }], { c: 1, b: 2 }, 3)).toBe(false);
    });
    it("example_9:includes([{a:1}, {a:1,b:2}, {c:1}], [1])", () => {
        expect(includes([{ a: 1 }, { a: 1, b: 2 }, { c: 1 }], [1])).toBe(false);
    });
});
