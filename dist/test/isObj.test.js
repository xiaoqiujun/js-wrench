import { isObj } from '../modules/index';
describe("判断是否Object", () => {
    it("用例1:isObj([])", () => {
        expect(isObj([])).toBe(false);
    });
    it("用例2:isObj({})", () => {
        expect(isObj({})).toBe(true);
    });
    it("用例3:isObj(1)", () => {
        expect(isObj(1)).toBe(false);
    });
});
