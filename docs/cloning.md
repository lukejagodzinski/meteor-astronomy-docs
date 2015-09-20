{{#template name="Cloning"}}
You may clone a document using the `copy` method on the document.

```js
var user = Users.findOne();
var copy = user.copy();
copy.save(); // Save a document copy.
```

A copied document will have a value of the `_id` field cleared to allow saving a document copy. You can also automatically save a copy by passing the `true` value as the first argument of the `copy()` method.

```js
var user = Users.findOne();
var copy = user.copy(true);  // Auto save a document copy.
```
{{/template}}
