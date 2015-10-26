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

The `choice` validator takes a list of valid values as the first argument and its function is to check whether a value of the field is one of them.

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

The `unique` validator takes no arguments and checks whether the value of the field is unique.
Currently the `unique` validator should only be used to validate top level fields. It will not work with nested fields.

```js
// Example:
validators: {
  // Each document has to have unique email address.
  email: Validators.unique()
}
```

*NOTICE: The `unique` validator should be used on the server because on the client we can be subscribed to not entire set of documents and checking uniqueness in such situation may not be reliable.*

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

The `equalTo` validator takes a field name as the first argument and its function is to check whether a value of the field is equal to the value of a field passed as the argument.

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
