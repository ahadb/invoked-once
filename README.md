## `invoked-once`

Invoke a function only once. Useful, depending on situations and especially with initializion.

### Installation

`npm install --save invoked-once` 

### Usage

```javascript
const invokedOnce = require('invoked-once')

// a:
let j = 1
const once = invokedOnce(() => ++j)

once() // 2
once() // 2

// b:
let once = invokeOnce(() => console.log('Invoked!'))
once() //=> Invoked!
once() //=> undefined
```

### Test

Make sure you `npm install` to fetch tape:

`node test.js`

```bash
TAP version 13
# invokedOnce
ok 1 should be equal
ok 2 should be equal
ok 3 should be equal
ok 4 should throw
ok 5 should throw
# should invoke the function once
ok 6 should be equivalent

1..6
# tests 6
# pass  6

# ok
```

