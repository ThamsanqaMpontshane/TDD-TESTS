//the unit test for this function is are in the test.finditemmover.js file.//

function findItemsOver20 (itemList){
    var results = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20) {
        results.push(itemList[i]);
        }
    }
    return results;
}

function findItemsOver20(itemList2){
    var results2 = [];
    for (var i = 0; i < itemList2.length; i++) {
        if (itemList2[i].qty > 20) {
        results2.push(itemList2[i]);
        }
    }
    return results2;
}

function findItemsOver20(itemList3){
    var results3 = [];
    for (var i = 0; i < itemList3.length; i++) {
        if (itemList3[i].qty > 20) {
        results3.push(itemList3[i]);
        }
    }
    return results3;
}

function findItemsOver(itemList, threshold){
    var results = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > threshold) {
        results.push(itemList[i]);
        }
    }
    return results;
}

function findItemsOver(itemList2, threshold){
    var results2 = [];
    for (var i = 0; i < itemList2.length; i++) {
        if (itemList2[i].qty > threshold) {
        results2.push(itemList2[i]);
        }
    }
    return results2;
}

function findItemsOver(itemList3, threshold){
    var results3 = [];
    for (var i = 0; i < itemList3.length; i++) {
        if (itemList3[i].qty > threshold) {
        results3.push(itemList3[i]);
        }
    }
    return results3;
};