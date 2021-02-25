// Your code here
function saturdayFun(action="roller-skate") {
    return `This Saturday, I want to ${action}!`
}

function mondayWork(action="go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(param1="*") {
    return function (param2="special") {
        return `You are ${param1}${param2}${param1}!`
    };
}

let Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function actionApplyer(start, arr) {
    let int = start;
    for (let fn of arr) {
        int = fn(int)
    }
    return int;
}