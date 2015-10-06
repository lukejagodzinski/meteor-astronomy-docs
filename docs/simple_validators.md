{{#template name="SimpleValidators"}}
The `jagi:astronomy-simple-validators` package is an extension of the core validation package [`jagi:astronomy-validators`](https://atmospherejs.com/jagi/astronomy-validators). The 'jagi:astronomy-validators' package uses functional validators which are fast and powerful. However, they require a little bit more code for implementation. There are situations where you can sacrifice all the benefits of functional validators for more concise string validators that come with the `jagi:astronomy-simple-validators` package.

To use the simple validators package you don't have to add the core `jagi:astronomy-validators` package. It's a dependency for the simple validators package and it will be added automatically.

```sh
meteor add jagi:astronomy-simple-validators
```

**Adding simple validators**

We can add simple validators directly on the class or on the class's field definitions. Simple validators are defined using a pattern similar to that of normal validators. If we're defining simple validators on the class level, we use a plural form `simpleValidators`, and, if we are adding validators to the field definition then we use a singular form `simpleValidator`. Let's examine both examples:

The class level:

```js
// .
User = Astro.Class({
  name: 'User',
  /* ... */
  simpleValidators: {
    firstName: 'minLength(3)'
  }
});
```

The field level:

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: {
      type: 'string',
      simpleValidator: 'minLength(3)'
    }
  }
});
```

As you can see, we've added the `minLength` validator to the `firstName` field. The validation rules have to be written in the form of a string. We just write a validator name as it would be a function and pass a parameter in the parentheses. The `minLength` validator is one of many predefined validation functions. Almost all validators from `jagi:astronomy-validators` package can be used in the `jagi:astronomy-simple-validators` package. There are some limitations where we can't use objects as a validator param. In such situation, you have to use functional validators.

**Validation error message**

There is also a way of defining a custom error message for the validator:

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  simpleValidators: {
    firstName: {
      rules: 'minLength(5)',
      messages: {
        minLength: 'The first name is too short!'
      }
    }
  }
});
```

Instead passing a the message on the `rules` property, we pass an object with `rules` and `messages` properties. The value of the `messages` property is an object of key-value pairs, where the key is a validator name and the value is an error message for the given validator.

**Complex validation rules**

For now, we've shown how to add a single string validator per field, but what about multiple validation rules. We can create more complex validation rules. One possible way is the `and` validator which is created when we separate validators with commas.

```js
simpleValidators: {
  firstName: 'required,string,minLength(3)'
}
```
{{/template}}
