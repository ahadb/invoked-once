const test = require('tape')
const invokedOnce = require('./index')

test('invokedOnce', function(t) {
  let j = 1
  const onceStr = invokedOnce(
    () => {
      return 'Firing lasers!'
    })
  const onceIncr = invokedOnce(
    () => {
      return ++j
    })
  const expectedStr = 'Firing lasers!'
  const expectedNum = 2

  t.equal(typeof onceStr, 'function')
  t.equal(onceStr(), expectedStr)
  t.equal(onceIncr(), expectedNum)
  t.throws(() => invokedOnce('foo'))
  t.throws(() => invokedOnce({}))
  t.end()
})

test('should invoke the function once', function(t) {
  let j = 1

  function fn(cb) {
    ++j
    cb(null, j)
  }

  const testFn = invokedOnce(fn)

  testFn(function(err, val) {
    t.deepEqual(val, 2)

    testFn(function(err, val) {
      t.equal(val, 2)
    })
    t.end()
  })
})
