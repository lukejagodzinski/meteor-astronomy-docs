{{#template name="DefiningFields"}}
We have several ways of defining fields. Let's discuss each one.

**Simple fields list**

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: ['firstName', 'createdAt', 'age']
});
```

In the example above we've defined three fields. Their types haven't been provided so they can take any value.

Now, we can create an instance of our class and check if it has defined fields.

```js
var user = new User();
user.firstName; // null
user.createdAt; // null
```

**Fields with types**

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: 'string',
    createdAt: 'date',
    age: 'number'
  }
});
```

In this example, we passed an object with fields' names as keys and fields' types as values. There are several predefined types, you can choose from:

- `string`
- `number`
- `boolean`
- `date`

You can also create your own types, which will be discussed in the [Custom types](#custom-types) section.

**Default values**

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

If we don't provide a default value of the field, then it will be set to `null` on a document creation. As a default value, we can pass a plain JavaScript object or a function that will be executed on a document creation. If you're using a function as a default value, then a value returned from the function will be used as a default value of the field.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    seed: {
      type: 'number',
      default: function() {
        return Math.random();
      }
    }
  }
});
```

**Embeding objects and arrays**

MongoDB is a document-oriented database. Thanks to that, you can not only store plain values in the fields but also objects and arrays. Let's take a look on how to define such class.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  embedOne: ['address'],
  embedMany: ['phones'],
  fields: {
    firstName: 'string',
    age: 'number'
  }
});
```

In the example, we've defined the `address` field that can store objects and the `phones` field that can store arrays of objects or arrays of any other value. But what if we want to define a default value or the type of the field of the address object? We can do it by creating the `Address` class.

```js
Address = Astro.Class({
  name: 'Address',
  /* No collection attribute */
  fields: {
    city: {
      type: 'string',
      default: 'San Francisco'
    },
    state: {
      type: 'string',
      default: 'CA'
    }
  }
});

User = Astro.Class({
  name: 'User',
  collection: Users,
  embedOne: {
    address: {
      // The "address" field can store an instance of the Address class.
      class: 'Address'
    }
  },
  fields: {
    firstName: 'string',
    age: 'number'
  }
});
```

At the beginning it may look awkward, but when you understand what benefits does it give, you will understand that it's a right solution.

Now try defining the `User` class, that has the `addresses` field for storing an array of addresses.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  embedMany: { // No we embed many documents in an array.
    addresses: {
      // The "addresses" field can store many instances of the Address class.
      class: 'Address'
    }
  }
});
```

An embedded field can also have a default value.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  embedOne: {
    address: {
      class: 'Address',
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

**Adding fields to already existing class**

There are situations, when we want to add some fields to the class that is already defined. For example, we have a class that is shared among client and server, but we want to add additional fields to the class on the server. To add fields to the class, we use a few functions: `addField()`, `embedOne()` and `embedMany()`.

```js
// Client and server
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: 'string',
    age: 'number'
  }
});

// Only server
if (Meteor.isServer) {
  User.addField('updatedAt', 'date');
  User.addField('createdAt', {
    type: 'date',
    default: function() {
      return new Date();
    }
  });
  User.embedOne('address', {
    class: 'Address'
  });
  User.embedMany('phones', {
    class: 'Phone'
  });
}
```
{{/template}}
