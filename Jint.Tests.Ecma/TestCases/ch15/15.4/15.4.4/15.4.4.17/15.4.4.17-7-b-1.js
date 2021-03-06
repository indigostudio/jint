/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-b-1.js
 * @description Array.prototype.some - callbackfn not called for indexes never been assigned values
 */


function testcase() { 

  var callCnt = 0; 
  function callbackfn(val, idx, obj)
  {
    callCnt++;
    return false;
  }

  var arr = new Array(10);
  arr[1] = undefined;
  arr.some(callbackfn);
  if(callCnt === 1)    
      return true;  
  
 }
runTestCase(testcase);
