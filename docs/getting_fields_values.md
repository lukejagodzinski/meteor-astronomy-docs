{{#template name="GettingFieldsValues"}}
As mentioned earlier, you should follow Astronomy's pattern of using the `set()`, `inc()`, `push()` and `pop()` methods for modifying a document's values. These methods ensure that values have been cast to their proper types and provide access to them via key. So, for instance in a template you can just write:

```html
<div>Age: {{|user.age}}</div>
```

The same is true in any other place, just access fields directly through their keys.

```js
Template.TemplateName.helpers({
  fullName: function() {
    var user = Users.findOne();
    return user.firstName + ' ' + user.lastName;
  }
});
```
{{/template}}
