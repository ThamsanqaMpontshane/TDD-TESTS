
assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));
assert.equal('R2.75', totalPhoneBill('call'));
assert.equal('R0.65', totalPhoneBill('sms'));
assert.equal('R0.00', totalPhoneBill(''));


// create a function that will pass the tests
function totalPhoneBill(phoneBill) {
    var total = 0;
    var bill = phoneBill.split(', ');
    for (var i = 0; i < bill.length; i++) {
        if (bill[i] === 'call') {
        total += 2.75;
        } else if (bill[i] === 'sms') {
        total += 0.65;
        }
    }
    return 'R' + total.toFixed(2);
    };


