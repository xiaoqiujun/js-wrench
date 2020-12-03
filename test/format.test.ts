import {format} from '../modules/index';

describe('格式化', () => {
	it("example_1:format.money('11')", () => {
		expect(format.money('11')).toBe("11")
	})
	it('example_2:format.money("1")', () => {
		expect(format.money("1")).toBe("1")
	})
	it('example_3:format.money("127.0.0.1")', () => {
		expect(format.money('127.0.0.1')).toBe("127.0")
	})
	it("example_4:format.money('1257945.5678',3)", () => {
		expect(format.money('1257945.5678',3)).toBe("1,257,945.567")
	})
})
