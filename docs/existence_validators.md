{{#template name="ExistenceValidators"}}
**required**

```js
Validators.required();
```

The `required` validator doesn't take any options as the first argument and its function is to check whether a value of the field is not an empty value like `null` or `""` (empty string).

**null**

```js
Validators.null();
```

The `null` validator doesn't take any options as the first argument and its function is to check whether a value of the field is `null`.

**notNull**

```js
Validators.notNull();
```

The `notNull` validator doesn't take any options as the first argument and its function is to check whether a value of the field is not `null`.
{{/template}}
