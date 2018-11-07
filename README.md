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
