it('lodash difference', (done) => {
  const { difference }  = require('../index')
  // 断言
  expect(difference([3, 2, 1], [4, 2])).toEqual([3, 1])

  done()
})