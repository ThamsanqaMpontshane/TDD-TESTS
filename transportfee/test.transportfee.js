describe("TransportFee", function() {
       
     it("Morning Shift" ,function(){
        assert.equal(transportFee('morning'), 'R20');
     });

     it("AfterNoon Shift", function(){
        assert.equal(transportFee('afternoon'), 'R10');
     });

     it("NightShift", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
     });

});