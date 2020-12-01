import {isObj} from '../modules/index';
describe("判断是否Object", () => {
    it("example_1:isObj([])", () => {
        expect(isObj([])).toBe(false);
    });
    it("example_2:isObj({})", () => {
        expect(isObj({})).toBe(true);
    });
    it("example_3:isObj(1)", () => {
        expect(isObj(1)).toBe(false);
    });
});