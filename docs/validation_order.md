{{#template name="ValidationOrder"}}
By default validators are executed in the order of their definition, however we can rearrange it by providing a new order under the `validationOrder` property in the class schema. The `validationOrder` property is an array of fields in which validation should take place. Let's take a look at the example below:

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  validators: {
    firstName: Validators.minLength(3),
    lastName: Validators.minLength(3),
    birthDate: Validators.date()
  },
  validationOrder: [
    'birthDate',
    'firstName',
    'lastName'
  ]
});
```

The original validation order will be ignored. You don't have to pass a complete list of fields for the validation order. The validators for the missing fields will be added in their original order.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  validators: {
    firstName: Validators.minLength(3),
    lastName: Validators.minLength(3),
    birthDate: Validators.date()
  },
  validationOrder: [
    'birthDate'
  ]
});
```

In this situation the validation order will be: `birthDate`, `firstName`, `lastName`.
{{/template}}
