describe("greet", function() { 
    it("should greet 'Hello' plus Thamsanqa", function() {
        assert.equal(greet("Thamsanqa"), "Hello, Thamsanqa");
    });
    it("should greet 'Hello' plus Sisipho", function() {
        assert.equal(greet("Sisipho"), "Hello, Sisipho");
});
});