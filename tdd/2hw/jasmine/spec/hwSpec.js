describe("Hello World Test", function() {
	it("says Hello", function() {
		expect(helloWorld()).toEqual("Hello World");
	});

	it("Contains Hello", function() {
		expect(helloWorld()).toContain("Hello");
	});
});