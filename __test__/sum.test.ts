const { sum } = require('../src/index')

describe("Test sum function", () => {
	it("Should return for sum(10,5)", () => {
		expect(sum(10,5)).toBe(15);
	});
	it("Should return 100 for sum(91,9)", () => {
		expect(sum(91,9)).toBe(100);
	});
});
