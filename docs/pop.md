{{#template name="Pop"}}
You should always use the `pop()` method to pop values from the fields of array type. Let's take a look at the example.

```js
Phone = Astro.Class({
  name: 'Phone',
  fields: {
    number: 'number'
  }
});

User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    phones: {
      type: 'array',
      nested: 'Phone',
      default: function() {
        return [];
      }
    }
  }
});

var user = Users.findOne();
user.pop('phones', 1);
```

In the listing above, we've popped the most top value from the `phones` field. You may wonder that's for the second argument of the `pop()` method. It tells if an element should be popped from the top (`1`) or from the bottom (`-1`) of the array. They correspond to the `pop()` and `unshift()` JavaScript methods accordingly.

**Popping from multiple fields at once**

You can also pop values from multiple fields at once. Instead passing a field name and `1` or `-1` number you pass object with key-value pairs where the key is a field name and the value is `1` or `-`. Let's take a look at the example.

```js
user.pop({
  'phones': 1, // Pop from the top.
  'addresses': -1 // Pop from the bottom.
});
```

**Popping from nested fields**

Popping values from nested fields follow the same rules as previously described functions. We use the "." notation to access nested fields. Let's take a look at the example.

```js
user.pop('nested.field', 1);
```
{{/template}}
