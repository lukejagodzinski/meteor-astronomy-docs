{{#template name="FieldsWithTypes"}}
```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: 'string',
    createdAt: 'date',
    age: 'number'
  }
});
```

In this example, we passed an object with fields' names as keys and fields' types as values. There are several predefined types, you can choose from:

- `string`
- `number`
- `boolean`
- `date`
- `object`
- `array`
{{/template}}
