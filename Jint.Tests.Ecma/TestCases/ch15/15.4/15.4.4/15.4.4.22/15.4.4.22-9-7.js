/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-7.js
 * @description Array.prototype.reduceRight not affect call when the array is deleted during the call
 */


function testcase() {
        function callbackfn(prevVal, curVal, idx, obj) {
            delete o.arr;
            return prevVal + curVal;
        }

        var o = new Object();
        o.arr = ['1', 2, 3, 4, 5];
        return o.arr.reduceRight(callbackfn) === "141" && !o.hasOwnProperty("arr");
    }
runTestCase(testcase);
