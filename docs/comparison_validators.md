{{#template name="ComparisonValidators"}}
**email**

```js
Validators.email();
```

The `email` validator doesn't take any options as the first argument and its function is to check whether a value of the field is a string with a valid email address.

```js
// Example:
validators: {
  email: Validators.email()
}
```

**choice**

```js
Validators.choice(choices);
```

The `choice` validator takes an array of valid values as the first argument and its function is to check whether a value of the field exists in the array of valid values.

```js
// Example:
validators: {
  sex: Validators.choice(['male', 'female'])
}
```

**unique**

```js
Validators.unique();
```

The `unique` validator doesn't take any options as the first argument and its function is to check whether a value of the field is unique.

```js
// Example:
validators: {
  // Each document has to have unique email address.
  email: Validators.unique()
}
```

*NOTICE: The `unique` validator should only be used on the server because on the client the subscription may not contain the entire set of documents in the collection, in which case the validator may return an inaccurate result.*

**equal**

```js
Validators.equal(comparisonValue);
```

The `equal` validator takes a comparison value as the first argument and its function is to check whether a value of the field is equal to the comparison value.

```js
// Example:
validators: {
  captcha: Validators.equal('aBcDeFg')
}
```

**equalTo**

```js
Validators.equalTo(fieldName);
```

The `equalTo` validator takes a field name as the first argument and its function is to check whether the value of the field is equal to the value of the field passed as the argument.

```js
// Example:
validators: {
  // Check if values of `password1` and `password2` fields are equal.
  password1: Validators.equalTo('password2')
}
```

**regexp**

```js
Validators.regexp(regularExpression);
```

The `regexp` validator takes a regular expression as the first argument and its function is to check whether a value of the field is matches the regular expression passed as the argument.

```js
// Example:
validators: {
  login: Validators.regexp(/^[a-zA-Z0-9]+$/)
}
```
{{/template}}
