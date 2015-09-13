{{#template name="DefaultValues"}}
If you need to provide more information than just field's type, let's say a default value, then you can pass an object with a field's definition. Take a look at the example.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: {
      type: 'string',
      default: ''
    }
  }
});

var user = new User();
user.firstName; // '' - empty string
```

If we don't provide a default value of the field, then it will be set to `null` on a document creation. As a default value, we can pass a plain JavaScript object or a function that will be executed on a document creation and returned value will be used as a default value.

*NOTE: If you want to set a default value of a field to object (an array is also object) you should always use a function that returns such object. It's important because values in JavaScript are passed by reference and we want every instance of the class to have it's own copy of the object not the one that will be shared among all documents.*

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    address: {
      type: 'object',
      default: function() {
        return {};
      }
    }
  }
});
```
{{/template}}
