describe("CountRegNumber",function(){
    it("should return the number of registrations",function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3)
        assert.equal(countRegNumber('CA 182736'),1)
    });
});