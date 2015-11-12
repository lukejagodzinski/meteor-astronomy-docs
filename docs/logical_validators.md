{{#template name="LogicalValidators"}}
**and**

```js
Validators.and(validatorsList);
```

The `and` validator takes a list of validators as the first argument and its function is to check whether a value of the field passes validation of all validators from the list.

```js
validators: {
  firstName: Validators.and([
    Validators.string(),
    Validators.minLength(3)
  ])
}
```

**or**

```js
Validators.or(validatorsList);
```

The `or` validator takes a list of validators as the first argument and its function is to check whether a value of the field passes validation of any validator from the list.

```js
validators: {
  // Age has to be between 18 and 30 or between 45 and 60
  age: Validators.or([
    Validators.and([
      Validators.minLength(18),
      Validators.maxLength(30)
    ]),
    Validators.and([
      Validators.minLength(45),
      Validators.maxLength(60)
    ])
  ])
}
```

**if**

```js
Validators.if({
  condition: function(fieldValue, fieldName) {},
  true: validator
  false: validator /* Optional */
});
```

The `if` validator takes an object with some options as the first argument. The available options are `condition`, `true` and `false`. The `false` option is not obligatory. In the `condition` function, you have to return `true` or `false` value which will determine usage of the `true` or `false` validator accordingly. The `condition` function is executed in the context of the given document, so you can base condition on values of other fields in a document. The `condition` function also receives two arguments. The first one is a current field value and the second one is a current field name.

```js
// Example:
validators: {
  someField: Validators.if({
    if: function(fieldValue, fieldName) {
      return this.otherField.length > fieldValue.length
    },
    true: Validators.and([
      Validators.string(),
      Validators.email()
    ])
  })
}
```

**switch**

```js
Validators.switch({
  expression: function(fieldValue, fieldName) {},
  cases: {
    value1: validator,
    value2: validator,
    value3: validator
    /* ... */
  }
});
```

The `switch` validator takes an object with some options as the first argument. The available options are `expression` and `cases`. Both options are obligatory. In the `expression` function, you have to return one of the keys in the `cases` object. It will take the returned value and validate a value of a field using proper validator from the `cases` object.

```js
// Example:
validators: {
  someField: Validators.switch({
    expression: function(fieldValue, fieldName) {
      return fieldValue.length
    },
    cases: {
      4: Validators.regexp(/^d+$/),
      6: Validators.regexp(/^[a-z]+$/)
    }
  })
}
```
{{/template}}
