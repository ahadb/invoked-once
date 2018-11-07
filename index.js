module.exports = invokedOnce

function invokedOnce(fn, ctx) {
  let invoked
  let result

  if (typeof fn !== 'function') {
    throw new Error(`Function expected, but got  + ${fn}`)
  }

  return function() {
    if (invoked) {
      return result
    }
    invoked = true
    result = fn.apply(ctx || this, arguments)
    return result
  }
}
