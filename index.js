'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 
 * identity: takes in a value and returns it unchanged
 * 
 * @param: {*} any value
 * 
 * @return: {*} any value
 * 
 **/
 
function identity (value){
    return value;
};
module.exports.identity = identity;

/**
 * 
 * typeOf: takes any value and returns the type of value as a string.
 * 
 * @param: {*} any value
 * 
 * @return: {*} as a string
 * 
 **/

function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }else if(typeof value === "object"){
        return "object";
    }else if(typeof value === "string"){
        return "string";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(typeof value === "undefined"){
        return "undefined";
    }else if(typeof value === "function"){
        return "function";
    }
};
module.exports.typeOf = typeOf;

/**
 * 
 * first: takes an array & number, loops through the array, and returns the first element in an array or first number of items in an array
 * 
 * @param: {Array} 
 * @param: {Number}
 * 
 * @return: first element in {Array} or first {Number} of items in array
 * 
 **/
 
 function first (array, num){
    //if array is not an array return array literal
        if(!Array.isArray(array) || num < 0){
            return [];
            //if number is not a number or not given (undefined), return first element in array
        }else if(isNaN(num) || num === undefined){
            return array[0];
        }else{
            //else return the first number of items in array (start: @ 0, stop: @ num param)
            return array.slice(0,  num);
        }
};
module.exports.first = first;

/**
 * 
 * last: takes an array & number, loops through the array, and returns the last element in an array or last number of items in an array
 * 
 * @param: {Array} 
 * @param: {Number}
 * 
 * @return: last element in {Array} or last {Number} of items in array
 * 
 **/
 
 function last (array, num){
    //if array is not an array return array literal or num is negative
        if(!Array.isArray(array) || num < 0){
            return [];
            //else if number is not a number or not given (undefined), return last element in array
        }else if(isNaN(num) || num === undefined){
            return array[array.length -1];
        }else{
            //else return the last number items in array (start: @ the end of array - num (the "last index" is num param) stop: @ length of array (array.length)
            return array.slice(-num, array.length);
        }
};
module.exports.last = last;

/**
 * 
 * indexOf: loops through an array and retuns an index where it is the first occurance of a given value
 * 
 * @param: {Array} 
 * @param: {*} a value
 * 
 * @return: the index of {Array} that is the first occurance of {value}
 * @return: Return -1 if {value} is not in {array}
 * 
 **/
 
 function indexOf(array, value){
    //loop through array & return index (i) if that is first occurrance
    for(let i = 0; i <= array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
    //else return -1 if not in array
    return -1;
};
module.exports.indexOf = indexOf;

/**
 * 
 * contains: loops over an array and checks if value is inside array
 * 
 * @param: {Array} 
 * @param: {*} a value
 * 
 * @return: true if {Array} contains {value}
 * @return: false if {Array} does not contain {value}
 * 
 **/
 
 function contains (array, value){
    //store boolean in variable
    //loop array
  for(let i = 0; i <= array.length; i++){
      //if array @ index has value && value is not undefined, return true: else return false
      if(array[i] === value && value !== undefined ? true: false){
          return true;
      }
  }
  //return false outside of loop
  return false;
};
module.exports.contains = contains;

/**
 * 
 * each: checks if a collection is an array or object, calls function on each element, index, and collection
 * 
 * @param: {CArray or Object} 
 * @param: {Function}
 * 
 **/
 
 function each (collection, funct){
    //if collection is array, call funct on each element (i). arguments: element, index, & collection
    if(Array.isArray(collection)){
        //loop array (if it is an array) & call function on each element - e, i, collection
        for(let i = 0; i < collection.length; i++){
            funct(collection[i], i, collection);
        }
    } else {
        //if collection is object, call funct on each prop with prop values, key, and collection
        //loop object & call function on each prop value, key, & collection
        for (var key in collection){
            funct(collection[key], key, collection);
        }
    }
};
module.exports.each = each;

/**
 * 
 * unique: loops over an array and returns a new array with duplicates from original removed
 * 
 * @param: {Array}
 * 
 * @return: a new array of all elements from {Array} no duplicates
 * 
 **/
 
 function unique(array){
    //return a new array of all elements from array with no duplicates
    //new array to push values into and return
     let newArr = [];
      //loop array(parent parameter) 
      for(let i = 0; i < array.length; i++){
         //indexof loops through an array & returns the first occurance of a value. takes an array and a value
         //indexof returns a value, either the first occurrence of a value in an array or -1 if value is not in array
         //store the return value of indexof inside variable 
         let value = indexOf(newArr, array[i]);
         //if function that indexOf runs returns -1(value is not in array) so we push the value thats not in it, into the array (newArr)
            if(value === -1){
                newArr.push(array[i]);
            } 
     }
   
   return newArr;
};
module.exports.unique = unique;

/**
 * 
 * filter: applies a function to each element, index, & array and pushes it into a new array
 * 
 * @param: {Array}
 * @param: {Function} 
 * 
 * @return: a new <array> with elements, index, & array that passes function call
 * 
 **/
 
 function filter (array, funct){
    //create new array to return, push elements into & return 
    let finalArr = [];
    //each loops an array and calls a function on each element, index, & on the array
    //each takes an array & function
    each(array, function(element, index, array){
        //if we call funct & pass the element, index, & array & they are true, push element into array
        if(funct(element, index, array)){
            finalArr.push(element);
        }
    });
    //return the new array outside the loop and if statement
    return finalArr;
        
  };
module.exports.filter = filter;

/**
 * 
 * reject: takes an {Array} & applies a function to each element in the array. Returns a new 
 * <array> of elements that returned false.
 * 
 * @param: {Array} 
 * @param: {Function}
 * 
 * @return: a new <array> of elements that the function returned false
 * 
 **/
 
 function reject (array, funct){
    //return a new array
    let  newArr = [];
    //use each function to loop array and call funct on each element, index & array
    each(array, function(element, index, array){
        //if function call returns false, push elements into array
        if(funct(element, index, array) === false){
            newArr.push(element);
        }
    });
    return newArr;
};
module.exports.reject = reject;

/**
 * 
 * partition: takes an {Array} and applies a function to each element. Makes a
 * new <array> of what elements pass or fail the function call.
 * 
 * @param: {Array}
 * @param: {Function} 
 * 
 * @return: an <array> made up of two sub arrays
 * 
 **/
 
 function partition(array, funct){
    //returning nested array
    //true array
    let trueArr = [];
    //false array
    let falseArr = [];
    //array that holds them both
    let subArr = [];
    //call funct on each element, key, & the array
    //can use each
    each(array, function(element, key, array){
        //if elements return true when funct called
        if(funct(element, key, array)){
            trueArr.push(element);
        }else{
            //if elements return false when funct is called
            falseArr.push(element);
        }
    });
    //add separate arrays inside subArr, surround in brackets to include them in subArr
    //return subArr outside of loop/if statement
    subArr = [[...trueArr],[...falseArr]];
    return subArr;
};
module.exports.partition = partition;

/**
 * 
 * map: loops through an array or object and returns a new array filled with elements of array or object
 * 
 * @param: {Array or Object}
 * @param: {Function}
 * 
 * @return: a new <array> filled with array elements that pass {Function} call
 * @return: a new <array> filled with object properties that pass {Function} call
 * 
 **/
 
 function map(collection, funct){
    //return new array
    let newArr = [];
    //if <collection> is an array
    if(Array.isArray(collection)){
        //do something: loop array and call funct on each element, index, & array
        for(let i = 0; i < collection.length; i++){
             //push into elements into newArr
            newArr.push(funct(collection[i], i, collection));
        }
    }else{//else if collection is object
        //do something else: loop object and call funct on each prop value, key, & obj
            for(let key in collection){
                //push into elements into newArr
               newArr.push(funct(collection[key], key, collection));
            }
    }
    //return newArr outside of loops/if statements
    return newArr;
};
module.exports.map = map;

/**
 * 
 * pluck: searches an array and returns elements properties
 * 
 * @param: {Array}
 * @param: {Property}
 * 
 * @return: an {Array} with all the values of property in the {Array}
 * 
 **/
 
 function pluck (arrayOfObjs, prop){
   return map(arrayOfObjs, function(element){
        return element[prop];
    });
};
module.exports.pluck = pluck;

/**
 * 
 * every: calls function on each array & object, if all (every one of them)
 *        elements, index & collection pass return boolean
 * 
 * @param: {Array or Object}
 * @param: {Function}
 * 
 * @return: a boolean based on whether the function call returned true or false
 *  when used to each element, index, and array/or object. 
 * 
 **/
 
 function every(collection, funct){
    //if funct returns true
    if(funct){
        //if collection is array
        if(Array.isArray(collection)){
            //loop array
            for(let i = 0; i < collection.length; i++){
                //if any element, index, or array is not true
                if(!funct(collection[i], i, collection)){
                    //return false
                    return false;
                }
            }
            //if funct is true, return true (line 436)
            return true;
        }else {
            //if collection is object
            for(let key in collection){
                //if any property, index, object is not true
                if(!funct(collection[key], key, collection)){
                    //return false
                    return false;
                }
            }
            //if object props with funct called are true, return true
            return true;
        }
    }else{
        //if collection is array
        if(Array.isArray(collection)){
            //loop array 
            for(let y = 0; y < collection.length; y++){
                //if there is no value at index
                if(!collection[y]){
                    //return false
                    return false;
                }
            }
            //else return true
            return true;
        }
    }
};
module.exports.every = every;

/**
 * 
 * some: takes a collection, runs a function on them and returns whether any element is true
 * 
 * @param: {Array or Object}
 * @param: {Function} 
 * 
 * @return: boolean, true if even only one element passes for true 
 * @return false if all elements are false
 * 
 **/
 
 function some(collection, funct){
    let boolean = false;
    //use each to call function on each element, index, and collection
    each(collection, function(ele, ind, collection){
        //is funct is not given - go to line 515 
        if(typeof funct !== 'function'){
            //if one element is true
            if(ele){
                //return true
                boolean = true;
            }
        }//if funct can be called on each element, idex, & collection, return true
        else if(funct(ele, ind, collection)){
            boolean = true;
        }
        
    });
    //if no funct given, return false
    return boolean;
};
module.exports.some = some;

/**
 * 
 * reduce: applies a function to to every element, index, & array in an array 
 * 
 * @param: {Array} to iterate over
 * @param: {Function} to call on each element, index, and array
 * 
 * 
 * @return: adds all values into array into one value
 * 
 **/
 
 function reduce (array, funct, seed){
    //needs to do something if there is a seed
    //if person passes in seed,
    if(seed !== undefined){
        //we want to use the prev value as starting point
        let finalResult = seed;
        //loop through array startying at index 0 with each function
         each(array, function(element, index, array){
            //assign the result of passing each element to finalResult variable
            finalResult = funct(finalResult, element, index, array)
        })
        return finalResult;
        //if seed in undefined
    }else {
        //create new result variable and initialize it to the first input/index
        let finalResult = array[0];
        
        each(array, function(element, index, array){
            if(index !== 0){
                finalResult = funct(finalResult, element, index, array);
            }
        });
        return finalResult;
        
    }
}
module.exports.reduce = reduce;

/**
 * 
 * extend: takes many objects and returns one object with all the values copied
 * 
 * @param: {Objects} (lots of them)
 * 
 * @return: an object with all the properties of objects passed to function
 * 
 **/
 
 function extend (...obj){
    return Object.assign(...obj);
};
module.exports.extend = extend;
