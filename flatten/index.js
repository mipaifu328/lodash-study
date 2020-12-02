function flatten(array, deep=1) {
  
  // 自己实现方式 
  
  let result = []
  let length = array ? array.length : 0;

  for (let i = 0; i < length; i ++) {
    if(array[i] instanceof Array && deep >0){
      result = result.concat(flatten(array[i], deep-1))
    }else{
      result.push(array[i])
    }
  }

  return result
  
  
  // lodash库实现方式

  // function flatten(array) {
  //   var length = array == null ? 0 : array.length;
  //   return length ? baseFlatten(array, 1) : [];
  // }

  // function baseFlatten(array, depth, predicate, isStrict, result) {
  //   var index = -1,
  //       length = array.length;
  
  //   predicate || (predicate = isFlattenable);
  //   result || (result = []);
  
  //   while (++index < length) {
  //     var value = array[index];
  //     if (depth > 0 && predicate(value)) {
  //       if (depth > 1) {
  //         // Recursively flatten arrays (susceptible to call stack limits).
  //         baseFlatten(value, depth - 1, predicate, isStrict, result);
  //       } else {
  //         arrayPush(result, value);
  //       }
  //     } else if (!isStrict) {
  //       result[result.length] = value;
  //     }
  //   }
  //   return result;
  // }
  
}

module.exports = { flatten }
