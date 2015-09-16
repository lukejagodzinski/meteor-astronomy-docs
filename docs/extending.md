{{#template name="FieldsPerEnvironment"}}
There are situations, when we want to have different set of fields for client and server. You just can define different schemas on the client and server however you will repeat a lot of code. There is a better solution.

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
}
```

As you can see, we used `User.addField()` method to add server only fields to the `User` class. The first argument of the `addField()` method is a field name and the second one a field definition.
{{/template}}
