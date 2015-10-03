{{#template name="Publications"}}
When using Astronomy you can publish your documents just like in a regular Meteor code. However, there are situations when you are publishing multiple cursors using packages like `publish with relations` or `publish composite`. In such situations you have to turn off a documents transformation.

```js
Meteor.publishComposite('users', {
  find: function() {
    return Users.find({}, {
      transform: null
    });
  }
});
```

If you don't turn off a documents transformation, then it will work anyway. However it will show multiple warnings in the console and it will do a lot of unnecessary work which may cause some bugs in certain situations. You can turn of warnings what is described in the [Warnings](#warnings) section.
{{/template}}
