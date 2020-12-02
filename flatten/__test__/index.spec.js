it('lodash flatten', (done) => {
  const { flatten }  = require('../index')
  // 断言
  expect(flatten([[3, 2, 1], 3, [[1, 3]], [4, 2]])).toEqual([3, 2, 1, 3, [1, 3], 4, 2])
  expect(flatten([[3, 2, 1], 3, [[1, [3]]], [4, 2]], 2)).toEqual([3, 2, 1, 3, [1, 3], 4, 2])

  done()
})