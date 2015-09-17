{{#template name="Saving"}}
In this section we will focus on documents' storage. MongoDB provides the `insert` method that allows document inserting and the `update` method that modifies an already stored document. In Astronomy we don't need to call this methods directly. Because Astronomy documents are aware of their states, we can replace both methods with the one named `save()`. Let's take a look at the example showing how to insert new document and update existing one.

```js
var user = new User();
user.set({
  firstName: 'John',
  lastName: 'Smith'
});
user.save(); // Document insertion.

user.set({
  firstName: 'Łukasz',
  lastName: 'Jagodziński'
});
user.save(); // Document update.
```

As you can see, we've used the `save()` method for both insertion and modification of a document. Every Astronomy document has a private `_isNew` property that tells Astronomy if it should be inserted or updated.

**Callback function**

Because Meteor provides a way of passing a callback function as the last argument of `insert()` and `update()` methods, so Astronomy does it too in the `save()` method.


```js
var user = new User();

user.save(function(err, id) {
});
```
{{/template}}
