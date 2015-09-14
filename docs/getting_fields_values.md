{{#template name="GettingFieldsValues"}}
As it was told before, you should follow Astronomy principle of using the `set()`, `inc()`, `push()` and `pop()` methods for modifying document's values. Thanks to that you may be sure that values have been casted to the proper types and access them directly. For instance in a template you can just write:

```html
<div>Age: {{|user.age}}</div>
```

The same is true in any other place, just access fields directly.

```js
Template.TemplateName.helpers({
  fullName: function() {
    var user = Users.findOne();
    return user.firstName + ' ' + user.lastName;
  }
});
```
{{/template}}
