{{#template name="DefiningFields"}}
We have several ways of defining fields. Let's discuss each one.

**Simple fields list**

```js
Post = Astro.Class({
  name: 'Post',
  /* ... */
  fields: ['title', 'createdAt', 'commentsCount']
});
```

In the example above we defined three fields. Their types haven't been defined so they can take any value. There will be no values transformation on document save.

**Fields with types**

```js
Post = Astro.Class({
  name: 'Post',
  /* ... */
  fields: {
    title: 'string',
    createdAt: 'date',
    commentsCount: 'number'
  }
});
```

In this example, we passed an object with fields' names as keys and fields' types as values. There are several predefined types, you can choose from:

- `string`
- `number`
- `boolean`
- `date`

You can also create your own types, which will be discussed in the [Advanced Usage](#advanced-usage) section.

**Default values**

If you need to provide more information than just field's type, let's say a default value, then you can pass an object with a field's definition. Take a look at the example.

```js
Post = Astro.Class({
  name: 'Post',
  /* ... */
  fields: {
    title: {
      type: 'string',
      default: ''
    }
  }
});
```

If we don't provide a default value of the field, then it will be set to `null` on a document creation. As a default value, we can pass a plain JavaScript object or a function that will be executed on a document creation.

_NOTICE: We can't pass a reference to the object because it would be reused across all instances of the given class._

```js
Post = Astro.Class({
  name: 'Post',
  /* ... */
  fields: {
    userId: {
      type: 'string',
      default: function() {
        return Meteor.userId();
      }
    }
  }
});
```
{{/template}}
