{{#template name="CreatingValidators"}}
We will describe the process of creating a validator using the `maxLength` validator as an example. Here is the code for the validator:

```js
Astro.createValidator({
  name: 'maxLength',
  validate: function(fieldValue, fieldName, maxLength) {
    if (_.isNull(fieldValue) || !_.has(fieldValue, 'length')) {
      return false;
    }

    return fieldValue.length <= maxLength;
  },
  events: {
    validationError: function(e) {
      var fieldName = e.data.fieldName;
      var maxLength = e.data.param;

      e.setMessage(
        'The length of the value of the "' + fieldName +
        '" field has to be at most ' + maxLength
      );
    }
  }
});

```

We have two mandatory attributes. The first one is the `name` attribute. The validator will be added to the global `Validators` object using this name.

The second mandatory attribute is the `validate` function. It should return a boolean value indicating if a value of a given field passes validation. The `validate` function receives three arguments: a field's value, a field name and a param. The param argument can be for instance the number with which we are comparing a field's value. In the example of the `maxLength` validator, the param argument is the `maxLength` of the string.

The `maxLength` validator is also an optional attribute `validationError` which is triggered when the `validate` method returns false. The `validationError` event receives an event object as the first argument. Here we can generate an error message on validation failure. To generate an error message just use the `e.setMessage()` method.
{{/template}}
