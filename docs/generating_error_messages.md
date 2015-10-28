{{#template name="GeneratingErrorMessages"}}
There are several ways of generating an error message when validation fails. You can always use default error messages that comes with the validator's module. However, if you want something more application specific or if you need messages translation, then it may be a good idea to generate custom error messages. In this section, we will discuss all possible ways generating validation error messages.

**A validation message in a field validator**

The simplest but least flexible way of generating error message is passing it as the second argument of a validator. Let's take a look at an example:

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: {
      type: 'string',
      validator: Validator.minLength(3, 'The first name is too short!')
    }
  }
});
```

As you can see, we passed the `"The first name is too short"` string as the second argument of the `minLength` validator. Each validator can have its own error message or it can be left empty, in which case the default error message will be used.

**Generating an error message in an event**

There is the `validationError` event that is triggered on a validation error. There is some useful information passed to that event in the event object. It includes:

- `e.data.validator` - the field validator object
- `e.data.validator.name` - the name of the field validator
- `e.data.fieldValue` - the value of the field
- `e.data.fieldName` - the name of the field
- `e.data.param` - the param value passed to the field validator
- `e.data.message` - the current error message

There are also two method on the event object:

- `e.setMessage()` - sets a new error message
- `e.getMessage()` - gets the current error message

Now, let's take a look at the example usage of the `validationError` event.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: {
      type: 'string',
      validator: Validator.minLength(3)
    }
  },
  events: {
    validationError: function(e) {
      if (
        e.data.validator.name === 'minLength' &&
        e.data.fieldName === 'firstName'
      ) {
        // Set a new error message.
        e.setMessage('The first name is too short!');
        // You have to stop propagation.
        e.stopPropagation();
      }
    }
  }
});
```

As you can see, in the `validationError` event handler we check if a validator that caused error is `minLength` and if a field name is `firstName`. If these condition are met, then we set a new error message using the `e.setMessage()` method. We also have to `e.stopPropagation()` to prevent other event handlers from handling this error.

As in all document events, the event propagation of the `validationError` event goes from the parent class to the child class and finally to the global scope. Knowing that we could also "catch" the `validationError` event in the global scope, we could also do this:

```js
Astro.eventManager.on('validationError', function(e) {
  if (
    e.data.validator.name === 'minLength' &&
    e.data.fieldName === 'firstName'
  ) {
    // Set a new error message.
    e.setMessage('The first name is too short!');
    // You have to stop propagation.
    e.stopPropagation();
  }
});
```

If we don't generate an error message in our event handler then the message will be generated in the default event handler for the validator. If a validator does not have an event handler for the `validationError` event, then the default validation error will be used.
{{/template}}
