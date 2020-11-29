import { isObj } from '../modules/index';
describe("判断是否Object", function () {
    it("用例1:isObj([])", function () {
        expect(isObj([])).toBe(false);
    });
    it("用例2:isObj({})", function () {
        expect(isObj({})).toBe(true);
    });
    it("用例3:isObj(1)", function () {
        expect(isObj(1)).toBe(false);
    });
});
