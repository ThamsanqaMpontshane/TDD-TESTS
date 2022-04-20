describe("FromWhere", function() {

    describe("Bellville", function() {
        it("should return Bellville", function() {
            assert.equal(fromWhere('CY'), 'Bellville');
        });
    });

    describe("Paarl", function() {
        it("should return Paarl", function() {
            assert.equal(fromWhere('CJ'), 'Paarl');
        });
    });

    describe("Cape Town", function() {
        it("should return Cape Town", function() {
            assert.equal(fromWhere('CA'), 'Cape Town');
        });
    });

    describe("Some other place", function() {
        it("should return Some other place", function() {
            assert.equal(fromWhere('CC'), 'Some other place!');
        });
    });
    
});