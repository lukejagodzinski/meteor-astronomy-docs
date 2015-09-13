{{#template name="NestedFields"}}
MongoDB is a document-oriented database. Thanks to that, you can not only store plain values in the fields of documents but also objects and arrays. Astronomy provides two types (`object` and `array`) for storing object and array values. Let's take a look at how to defined fields with these types.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    'address': {
      type: 'object',
      default: function() {
        return {};
      }
    },
    'phones': {
      type: 'array',
      default: function() {
        return [];
      }
    }
  }
});
```

In the example, we've defined the `address` field that can store objects and the `phones` field that can store arrays of objects or arrays of any other value.

**Default value of nested field**

But what if we want to define a default value or the nested object? We can do it by defining a nested class for a field.

```js
Address = Astro.Class({
  name: 'Address',
  /* No collection attribute */
  fields: {
    city: {
      type: 'string',
      /* The default value of the nested field */
      default: 'San Francisco'
    },
    state: {
      type: 'string',
      /* The default value of the nested field */
      default: 'CA'
    }
  }
});

User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    'address': {
      type: 'object',
      // The "address" field can store an instance of the Address class.
      nested: 'Address',
      default: function() {
        return {};
      }
    }
  }
});
```

They key for the nested classes is providing a class name for the `nested` property in a field definition. At the beginning it may look awkward, but after using it for a while you'll like this approach.

Now let's try defining the `User` class, that has the `addresses` field for storing an array of addresses.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    'addresses': {
      type: 'array',
      // The "addresses" field can store multiple instances of the Address class.
      nested: 'Address',
      default: function() {
        return [];
      }
    }
  }
});
```

**Inline nested class definition**

It's also possible to provide nested class definition as a value of the `nested` property instead of a class name. Take a look at the example.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    'address': {
      type: 'object',
      default: function() {
        return {};
      },
      nested: {
        name: 'Address',
        fields: {
          city: 'string',
          state: 'string'
        }
      }
    }
  }
});
```

As you can see, we just provided a regular class definition, however this time without using the `Astro.Class` method. Astronomy calls this method for you with the provided definition. Ok, but what if you want to create instance of the `Address` class? You don't have a constructor. You can get it using the `Astro.getClass()` method.

```js
var Address = Astro.getClass('Address');
var user = new User();
user.set('address', new Address());
```

**Complex default value**

A nested field can also have more complex default value.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    'address': {
      type: 'object',
      nested: 'Address',
      default: function() {
        return {
          city: 'Miami',
          state: 'FL'
        };
      }
    }
  }
});
```

**Array of plain values**

But what if we want to store let's say multiple number values? In the `nested` property for array fields we can provide not only a class name but also simple type like `number` or `string`.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    'phones': {
      type: 'array',
      nested: 'string'
    },
    'numbers': {
      type: 'array',
      nested: 'number'
    }
  }
});
```
{{/template}}
