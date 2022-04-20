describe("IsFromBellville", function(){
    it("should return true if registration number is from Bellville", function(){
        assert.equal(isFromBellville("CY 123"),true );
    });
    it("should return false if registration number is not from Bellville", function(){
        assert.equal(isFromBellville("CJ 123"),false );
    });
});