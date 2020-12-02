function difference(array, diffArray) {
  
  // 自己实现方式 
  let result = []
  array.forEach(item => {
    if(!diffArray.includes(item)){
      result.push(item)
    }
  })
  return result
  
  // lodash库实现方式
  
}

module.exports = { difference }
