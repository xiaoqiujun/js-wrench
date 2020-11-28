import { toParam } from '../modules/index'
describe('object解析param字符串', () => {
	it('用例1:toParam([])', () => {
		expect(toParam([])).toBe('')
	})
	it('用例2:toParam({a:1,b:3,c:"key"})', () => {
		expect(toParam({ a: 1, b: 3, c: 'key' })).toBe('a=1&b=3&c=key')
	})
})
