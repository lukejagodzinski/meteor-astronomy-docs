{{#template name="SettersAndGetters"}}
Every Astronomy class has `set()` and `get()` methods. As their names imply, they're responsible for setting and getting values from a document.

**Setting a single value**

You should always use the `set()` method to set values. Take a look at the example of a wrong assignment.

```js
// ANTI-EXAMPLE
var user = new User();
user.age = $('#age').value; // WRONG! Never do that!
```

In the listing above, we've assigned value from the input to the `age` field. The type of the `age` field is `number` but we assigned string value. It won't be converted to the number as you would expect. Now, take a look at the correct example.

```js
var user = new User();
user.set('age', $('#age').value); // CORRECT!
```

Now, the value will be converted to the number during the assignment.

**Setting multiple fields**

You can also set multiple fields at once, by providing an object of key-value pairs, where the key is a field name and the value is a field value.

```js
var user = new User();
user.set({
  firstName: 'John',
  lastName: 'Smith',
  age: 30
});
```

**Setting nested fields**

As Astronomy allows storing nested/embeded values like objects or arrays, so we have also a way of accessing such fields. The example below shows possible ways of accessing nested fields if no class had been specified for the nested object.

```js
User = Astro.Class({
  name: 'User',
  /* */
  embedOne: {
    address: {
      // No class provided.
      default: function() {
        return {};
      }
    }
  }
});

var user = new User();
user.set('address.city', 'San Francisco');
```

As you can see, we've used the `.` notation to access nested field. In this situation, the `address` field will be filled with an empty object (default value) during the document creation. Later, we assign the `San Francisco` string to the `city` property that does not exist yet. But that's not a problem, as long as the `address` field's value is already an object. Astronomy will add the `city` property and properly assign the string.

But what about nested/embeded objects that have a type specified. We have here three possible approaches. Let's take a look at them in the example below.

```js
User = Astro.Class({
  name: 'User',
  /* */
  embedOne: {
    address: {
      nested: 'Address', // Class provided.
      default: function() {
        return {};
      }
    }
  }
});

var user = new User();
// The same as before.
user.set('address.city', 'San Francisco');
// Use the "set" method from the "address" class.
user.address.set('city', 'San Francisco');
// Get an address and set a city.
user.get('address').set('city', 'San Francisco');
```

With the first solution, you're already familiar.

It the second solution, we access the `address` field directly and execute the `set` method on it. It's possible because the value of the `address` field is an instance of the `Address` class and this class also has the `set` method.

In the third approach, we first get a value of the `address` field and then execute the `set` method. We will write more about the `get` method in following sections.

**Setting fields on the initialization**

When creating a new document, you can pass as the first argument of the constructor an object with values of the fields.

```js
var user = new User({
  firstName: 'John',
  lastName: 'Smith',
  age: 30
});
```

**Getting a single value**

It's good to use the `get()` method wherever you have to retrieve a value from a document, however it's not obligatory. Let's take a look at the example.

```js
var user = new User();
user.age; // Permitted but not recommended.
user.get('age'); // It's much better!
```

In templates you can access fields directly.

```html
<div>Age: {{|user.age}}</div>
```

**Getting multiple fields**

You can also get multiple fields at once, by providing an array of fields names.

```js
var user = new User();
user.get(['firstName', 'lastName', 'age']);
```

The code above will return an object of key-value pairs, where the key is a field name and the value is a field value.

**Getting all fields**

Sometime you may want to get all the fields in the document. You just have to use the `get()` method without any argument.

```js
var user = new User();
user.get();
```

**Getting nested fields**

As Astronomy allows storing nested/embeded values like objects or arrays, so we have also a way of accessing such fields. The example below shows possible ways of accessing nested fields if no class had been specified for the nested object.

```js
User = Astro.Class({
  name: 'User',
  /* */
  embedOne: {
    address: {
      // No class provided.
      default: function() {
        return {};
      }
    }
  }
});

var user = new User({
  address: {
    city: 'San Francisco',
    state: 'CA'
  }
});
user.get('address.city');
```

As you can see, we've used the `.` notation to access nested field. The `get` method will return the `San Francisco` string.

But what about nested/embeded objects that have a type specified. We have here three possible approaches. Let's take a look at them in the example below.

```js
User = Astro.Class({
  name: 'User',
  /* */
  embedOne: {
    address: {
      nested: 'Address', // Class provided.
      default: function() {
        return {};
      }
    }
  }
});

var user = new User({
  address: {
    city: 'San Francisco',
    state: 'CA'
  }
});
// The same as before.
user.get('address.city');
// Use the "set" method from the "address" class.
user.address.get('city');
// Get an address and then get a city.
user.get('address').get('city');
```

With the first solution, you're already familiar.

It the second solution, we access the `address` field directly and execute the `get` method on it. It's possible because the value of the `address` field is an instance of the `Address` class and this class also has the `get` method.

In the third approach, we first get a value of the `address` field and then execute the `get` method.

**Getting modified fields**

An Astronomy document is aware of its state. It knows if it's new document or the document that is already stored in the database. It also knows what fields have been modified from the last save operation. The `getModfied()` method responsible for getting modified fields.

```js
user.get('firstName'); // "Luke"

/* ... */

user.set({
  firstName: 'John'
});

user.getModified(); // Returns {firstName: "John"}
```

The method returns an object of key-value pairs where the key is a field name and the value is a new field value. But what, if we want to retrieve the old values, before the modification? You just have to pass `true` as the first argument of the `getModified` method.

```js
user.get('firstName'); // "Luke"

/* ... */

user.set({
  firstName: 'John'
});

user.getModified(true); // Returns {firstName: "Luke"}
```
{{/template}}
