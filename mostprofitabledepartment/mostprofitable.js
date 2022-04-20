function mostProfitableDepartment(salesData) {
    var departments = {};
    var departmentSales = [];
    var mostProfitableDepartment;
    var mostProfitableDepartmentSales;

    for (var i = 0; i < salesData.length; i++) {
        var department = salesData[i].department;
        var totalSales = salesData[i].sales;

        if (departments[department] === undefined) {
            departments[department] = totalSales;
        } else {
            departments[department] += totalSales;
        }
    }

    for (var department in departments) {
        departmentSales.push({
            department: department,
            sales: departments[department]
        });
    }

    departmentSales.sort(function(a, b) {
        if (a.sales > b.sales) {
            return -1;
        } else if (a.sales < b.sales) {
            return 1;
        } else {
            if (a.department < b.department) {
                return -1;
            } else if (a.department > b.department) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    mostProfitableDepartment = departmentSales[0].department;
    mostProfitableDepartmentSales = departmentSales[0].sales;

    return mostProfitableDepartment;
}

function mostProfitableDay(salesData) {
    var days = {};
    var daySales = [];
    var mostProfitableDay;
    var mostProfitableDaySales;

    for (var i = 0; i < salesData.length; i++) {
        var day = salesData[i].day;
        var totalSales = salesData[i].sales;

        if (days[day] === undefined) {
            days[day] = totalSales;
        } else {
            days[day] += totalSales;
        }
    }

    for (var day in days) {
        daySales.push({
            day: day,
            sales: days[day]
        });
    }

    daySales.sort(function(a, b) {
        if (a.sales > b.sales) {
            return -1;
        } else if (a.sales < b.sales) {
            return 1;
        } else {
            if (a.day < b.day) {
                return -1;
            } else if (a.day > b.day) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    mostProfitableDay = daySales[0].day;
    mostProfitableDaySales = daySales[0].sales;

    return mostProfitableDay;
}

//unit tests these functions using Mocha and Chai assertions  
