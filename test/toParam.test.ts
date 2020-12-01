import { toParam } from '../modules/index'
describe('object解析param字符串', () => {
	it('example_1:toParam([])', () => {
		expect(toParam([])).toBe('')
	})
	it('example_2:toParam({a:1,b:3,c:"key"})', () => {
		expect(toParam({ a: 1, b: 3, c: 'key' })).toBe('a=1&b=3&c=key')
	})
})
