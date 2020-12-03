import {unique} from '../modules/index';

describe('去重', () => {
	it("example_1:unique('11')", () => {
		expect(unique('11')).toBe("1")
	})
	it('example_2:unique(1)', () => {
		expect(unique(1)).toBe(1)
	})
	it('example_3:unique([1,2,3,3,3,2,1,1])', () => {
		expect(unique([1,2,3,3,3,2,1,1])).toStrictEqual([1,2,3])
	})
	it("example_4:unique([{a:1,b:2}, {a:1}, {b:2}, {a:1}, {c:2}, 1,2,2, [1,2], [3], [1,2]])", () => {
		expect(unique([{a:1,b:2}, {a:1}, {b:2}, {a:1}, {c:2}, 1,2,2, [1,2], [3], [1,2]])).toStrictEqual([{a:1,b:2}, {a:1}, {b:2}, {c:2}, 1,2, [1,2], [3]])
	})
})
