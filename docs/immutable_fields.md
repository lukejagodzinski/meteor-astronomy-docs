{{#template name="ImmutableFields"}}
```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    createdAt: {
      type: 'date',
      immutable: true
    }
  }
});
```
{{/template}}
