{{#template name="LogicalValidators"}}
**and**

```js
Validators.and(validatorsList);
```

The `and` validator takes an array of validators as the first argument and its function is to check whether the value of the field passes validation of all validators from the list.

```js
// firstName has to be a string that is at least 3 characters long
validators: {
  firstName: Validators.and([
    Validators.string(),
    Validators.minLength(3)
  ])
}

// or you can use a simple array
validators: {
  firstName: [
    Validators.string(),
    Validators.minLength(3)
  ]
}
```

**or**

```js
// creditCardNumber can be 15 or 16 characters long
validators: {
  creditCardNumber: Validators.or([Validators.length(15), Validators.length(16)])
}
```

The `or` validator takes an array of validators as the first argument and its function is to check whether a value of the field passes validation of any validator from the list.

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
The `if` validator takes an object with some options as the first argument. The available options are `condition`, `true` and `false`. The `false` option is not obligatory. In the `condition` function, you have to return `true` or `false` which will determine whether to use the `true` or `false` validator. The `condition` function is executed in the context of the given document, so you can base the condition on the values of other fields in a document. The `condition` function also receives two arguments. The first one is a current field value and the second one is a current field name.

```js
// Example:
// if someField's length is less than otherField's length, then, someField needs to be a email string
validators: {
  someField: Validators.if({
    condition: function(fieldValue, fieldName) {
      return this.otherField.length > fieldValue.length
    },
    true: Validators.and([
      Validators.string()
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

The `switch` validator takes an object with some options as the first argument. The available options are `expression` and `cases`. Both options are obligatory. In the `expression` function, you have to return one of the keys in the `cases` object. This will determine which validation method to use from the `cases` object.

```js
// Example:
// if someField is 4 characters long, then it has to be "dddd"
// if someField is 6 characters long, then it has to use only lower case letters
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
