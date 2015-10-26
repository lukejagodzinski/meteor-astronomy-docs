{{#template name="CustomTransform"}}
You may want to provide a custom transform function for your collection. It's especially difficult if you are using inheritance. However if you know what are you doing, you can override the standard transform function provided by Astronomy.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  typeField: '_type',
  transform: function(doc) {
    // You can modify here the doc argument.
    return new User(doc);
  }
});
```

Here is the example usage of a custom transform function with a class inheritance.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  typeField: '_type',
  transform: function(doc) {
    // You can modify here the doc argument.
    var className = doc._type;
    var Class = Astro.getClass(className);
    if (Class) {
      return new Class(doc);
    } else {
      return new User(doc);
    }
  }
});

ChildUser = Astro.Class({
  name: 'ChildUser'
});
```

**Turning off transformation**

There is a possibility to turn of a transform function by passing `null`.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  transform: null
});
```

After that, the `Users.findOne()` method will return a plain JavaScript object instead of Astronomy class. It's important to note that turning off a transformation function only applies to the collection. Calling the `find()` or `findOne()` method on the class object `User` will still return an Astronomy class.

```js
Users.findOne(); // Plain JavaScript object.
User.findOne(); // Instance of the Astronomy class.
```
{{/template}}
