{{#template name="Get"}}
The `get()` method is responsible for getting a plain value from a document's field. It means that if a given field stores nested object being an instance of Astronomy class, it will return a plain JavaScript object instead.

**Getting a single value**

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    'address': {
      type: 'object',
      nested: 'Address'
    }
  }
});

var user = Users.findOne();
// Getting plain value of the "address" field.
user.get('address'); // {city: 'San Francisco', state: 'CA'}
```

**Getting multiple fields**

You can also get multiple fields at once, by providing an array of fields names.

```js
user.get(['firstName', 'lastName', 'age']);
```

The code above will return an object of key-value pairs, where the key is a field name and the value is a plain field value.

**Getting all fields**

Sometime you may want to get values of the all fields in a document. You just have to use the `get()` method without any argument.

```js
user.get(); // Get all values.
```

**Getting nested fields**

The example below shows a way of accessing nested fields.

```js
var user = new User();
user.set('address', {
  city: 'San Francisco',
  state: 'CA'
});
user.get('address.city'); // Returns "San Francisco".
```

As you can see, we've used the `.` notation to access nested field. The `get` method will return the `San Francisco` string.
{{/template}}
