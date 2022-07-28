## Sumimasen WTF

```js
var o = { a: 1, valueOf: function() { return this.a } };
console.log( o + 1 );//2
```