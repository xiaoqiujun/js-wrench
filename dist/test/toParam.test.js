import { toParam } from '../modules/index';
describe('object解析param字符串', function () {
    it('用例1:toParam([])', function () {
        expect(toParam([])).toBe('');
    });
    it('用例2:toParam({a:1,b:3,c:"key"})', function () {
        expect(toParam({ a: 1, b: 3, c: 'key' })).toBe('a=1&b=3&c=key');
    });
});
