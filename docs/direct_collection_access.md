{{#template name="DirectCollectionAccess"}}
Each class created in Astronomy has some useful methods for interacting with Collection correlated with a given class. These methods are:

- `Class.insert()` - is equivalent for `Collection.insert()`
- `Class.update()` - is equivalent for `Collection.update()`
- `Class.upsert()` - is equivalent for `Collection.upsert()`
- `Class.remove()` - is equivalent for `Collection.remove()`
- `Class.find()` - is equivalent for `Collection.find()`
- `Class.findOne()` - is equivalent for `Collection.findOne()`

*NOTICE: Not all options from collection methods are available in Astronomy equivalents.*

But why creating a new set of methods that are equivalents of the collection methods. These methods have some extra features. Like for example, possibility to hook into the process of the method execution. The good example can be `find()` and `findOne()` methods. The `softremove` behavior hooks into the find operation by defining the `beforeFind` event handler. It modifies a selector so that it only returns non-softremoved documents.

```js
Users.find().count(); // 5
var user = Users.findOne();
user.softRemove();
Users.find().count(); // still 5
User.find().count(); // only 4 - not showing soft removed documents
```

**Inserting a document**

Let's say, we have the following class.

```js
User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    firstName: {
      type: 'string',
      default: 'John'
    },
    lastName: 'string',
    age: 'number'
  }
});
```

Now, let's try inserting the following set of data using the `User.insert()` method.

```js
User.insert({
  lastName: 'Smith',
  age: '45'
});
```

It will insert the following document.

```js
{
  // A default value for the "firstName" field
  firstName: 'John',
  lastName: 'Smith',
  // The "45" string converted to the 45 number
  age: 45
}
```

As you can see, this method makes sure that the data is consistent. The same is true if it goes about other methods.

**The "forEach" option**

You can pass the `forEach` option in the `update()` method. It has to be a function that will be invoked for each update operation.

```js
User.update(selector, modifier, {
  forEach: function(doc, index) {
    // You can do something here
  }
});
```

If you return falsy in the `forEach` function, the document won't be saved.

```js
User.update(selector, modifier, {
  forEach: function(doc, index) {
    if (doc.firstName === 'John') {
      return false;
    }
  }
});
```
{{/template}}
