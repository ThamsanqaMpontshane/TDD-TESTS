describe("Yearsago", function() {

  it("should return the correct number of years ago", function() {
    assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
  });
  it("This also should return the correct number of years ago", function() {
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
  });

});