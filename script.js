//Lodash Math
var add = function(augend,addend) {
    result = +augend + +addend;
    console.log(result);
}
//var ceil
var divide = function(dividend,divisor) {
    result = dividend / divisor;
    console.log(result);
}
// var floor = function(number,precision) {
//     if (precision === undefined || precision == 0) {
//         result = Math.floor(number);
//         console.log(result);
//     } 
//     if (precision > 0) {
//         result = number.toPrecision(precision);
//         console.log(result);
//     }    
// }
var max = function(arr) {
    var largestNumber = 0;
    for (i = 0; i < arr.length; i++) {
        if(arr[i] > largestNumber) {
            largestNumber = arr[i];            
        }
    }
console.log(largestNumber);
}
var mean = function(arr) {
    var averageNumber = 0;
    var sum = 0;    
    for (i = 0; i < arr.length; i++) {        
        sum += arr[i];           
    }
    averageNumber = sum / arr.length;
console.log(averageNumber);
}
var min = function(arr) {
    var smallestNumber = arr[1];
    for (i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i];            
        }
    }
console.log(smallestNumber);
}
var multiply = function(multiplier,multiplicant) {
    result = multiplier * multiplicant;
    console.log(result);
}
//var round
var subtract = function(minuend,subtrahend) {
    result = minuend - subtrahend;
    console.log(result);
}
var sum = function(arr) {    
    var sum = 0;    
    for (i = 0; i < arr.length; i++) {        
        sum += arr[i];           
    }    
console.log(sum);
}
//Lodash Number 
var clamp = function(number,lower,upper) {    
    if (number >= lower && number <= upper) {
        console.log(number);
    }
    else if (number < lower) {
        number = lower;
        console.log(number);
    }
    else if (number > upper) {
        number = upper;
        console.log(upper);
    }
}
var inRange = function(number,start,end) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if ( start > end ) {
        var swap = end;
        end = start;
        start = swap;
    }
    console.log(number,start,end)
    if (number > start && number < end) {
        number = true;
        console.log(number);
    }
    else {
        number = false;
        console.log(number);
    }
}
var random = function(min,max,float) {
    if (min % 1 !== 0 || max % 1 !== 0 || float === true) {
        var result = Math.random() * (max - min) + min;
        console.log(result);
    }
    else {
        var result = Math.floor(Math.random() * (max - min) + min);
        console.log(result);        
    }

}
//Lodash Array
//var chunk
var compact = function(arr) {
    var result = [];
    for (i = 0; i < arr.length; i++){
        for (j = i; j < arr.length; j++) {
            if (arr[i] != 0 && arr[i] != false) {
                result[j] = arr[i];
            }
            else result[j] = "falsey"; //How do I handle this?
        }
    }
    console.log(result);
}
//var concat

