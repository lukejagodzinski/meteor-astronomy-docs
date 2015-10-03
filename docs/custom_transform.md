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
  },
});

ChildUser = Astro.Class({
  name: 'ChildUser'
});
```
{{/template}}
