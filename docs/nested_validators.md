{{#template name="NestedValidators"}}
**every**

The `every` validator takes a validator as the first argument. The purpose is to check whether every element of a field's value, which should be an array, passes validation using the function passed as the first argument.

```js
// Example:
Post = Astro.Class({
  name: 'Post',
  /* ... */
  fields: {
    tags: {
      type: 'array',
      nested: 'string',
      default: function() {
        return [];
      },
      validator: [
        // Up to 100 tags per post.
        Validators.maxLength(100),
        // Each tag has to...
        Validators.every(
          Validators.and([
            // ... be a string and...
            Validators.string(),
            // ... at least 3 characters long
            Validators.minLength(3)
          ])
        )
      ]
    }
  }
});
```

**has**

```js
Validators.has(propertyName);
```

The `has` validator takes a property name as the first argument. Its function is to check whether a value of a field, which should be an object, has the property name defined.

```js
validators: {
  address: Validators.has('city')
}
```

**contains**

```js
Validators.contains(soughtArrayElement);
```

The `contains` validator takes a sought element as the first argument. Its function is to check whether a value of a field, which should be an array, contains the sought element.

```js
validators: {
  tags: Validators.contains('meteor')
}
```
{{/template}}
