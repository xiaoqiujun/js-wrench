import check from '../modules/check';
describe('正则检测', () => {
    it("example_1:check.number('11')", () => {
        expect(check.number('11')).toBe(false);
    });
    it('example_2:check.number(1)', () => {
        expect(check.number(1)).toBe(true);
    });
    it('example_3:check.ip("127.0.0.1")', () => {
        expect(check.IPv4('127.0.0.1')).toBe(true);
    });
    it("example_4:check.ip('127.257.256.1')", () => {
        expect(check.IPv4('127.257.256.1')).toBe(false);
    });
});
