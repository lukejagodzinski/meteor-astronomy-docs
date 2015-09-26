{{#template name="CustomTypes"}}
You can create custom types by using the `Astro.createType()` method. You have to pass a type definition object as the first argument of the function. The only required property is a type `name`. However, in most cases you will have only to provide `cast` and `plain` methods. Let's take a look at possible properties that you can provide in a type definition.

```js
Astro.createType({
  name: 'type',
  constructor: function Type(fieldDefinition) {},
  getDefault: function(defaultValue) {},
  cast function(value) {},
  needsCast function(value) {},
  plain function(value) {},
  needsPlain function(value) {}
});
```

Now, we will investigate each property:

- `constructor` - the constructor function is the one that receives a field definition as the first argument. We can get some extra data from this definition and initialize a field. For example in the `object` type, we get the `nested` property and initialize a sub type.
- `getDefault` - its function is to make sure that a default value of a field will be casted to the proper type defined for a field. A default value for a field is passed as the first argument of a method. If you don't provide `getDefault` method, then a default value will be casted anyway. This method is used in `object` and `array` types.
- `cast` - it receives as the first argument a value being casted. Your task is to cast a given value to your type and return it.
- `needsCast` - it's a helper function that can speed up a process of casting values. It just checks if there is a need for running the `cast` function. If a passed value is already an instance of a given type then we can just return `true` in the `needsCast` method.
- `plain` - its job is to convert a value of your type to a plain JavaScript value. This plain value will be stored in the database.
- `needsPlain` - it's a helper function that is very similar to the `needsCast` method. It just makes sure that there is a need for running the `plain` method.

The best way to learn how to create a custom type is checking how already defined types were defined.
{{/template}}
